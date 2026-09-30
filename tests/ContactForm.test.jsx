import emailjs from '@emailjs/browser'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { profile } from '../src/data/profile'
import ContactForm from '../src/components/ContactForm'

vi.mock('@emailjs/browser', () => ({ default: { send: vi.fn() } }))

const setup = () => {
  const user = userEvent.setup()
  render(<ContactForm />)
  const field = (label) => screen.getByLabelText(label, { exact: true })
  return {
    user,
    name: field('Name'),
    email: field('Email'),
    message: field('Message'),
    submit: screen.getByRole('button', { name: /send message|sending/i }),
    status: screen.getByRole('status'),
    fill: async ({
      name = 'Jane Doe',
      email = 'jane@company.com',
      message = 'Hello there',
    } = {}) => {
      await user.type(field('Name'), name)
      await user.type(field('Email'), email)
      await user.type(field('Message'), message)
    },
  }
}

// The error message that aria-describedby points a field at
const errorFor = (input) =>
  document.getElementById(input.getAttribute('aria-describedby'))

describe('ContactForm', () => {
  beforeEach(() => {
    emailjs.send.mockReset()
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('has a labelled field for name, email and message', () => {
    const { name, email, message } = setup()

    expect(name).toHaveAttribute('type', 'text')
    expect(email).toHaveAttribute('type', 'email')
    expect(message.tagName).toBe('TEXTAREA')
    for (const input of [name, email, message]) expect(input).toBeRequired()
  })

  it('shows an error on each empty field, focuses the first, sends nothing', async () => {
    const { user, name, email, message, submit, status } = setup()

    await user.click(submit)

    for (const [input, text] of [
      [name, 'Please enter your name.'],
      [email, 'Please enter your email.'],
      [message, 'Please write a message.'],
    ]) {
      expect(input).toHaveAttribute('aria-invalid', 'true')
      expect(errorFor(input)).toHaveTextContent(text)
    }
    expect(name).toHaveFocus()
    expect(status).toBeEmptyDOMElement()
    expect(emailjs.send).not.toHaveBeenCalled()
  })

  it('rejects an invalid email and clears errors as they are fixed', async () => {
    const { user, name, email, submit, fill } = setup()

    await fill({ email: 'jane@' })
    await user.click(submit)
    expect(email).toHaveFocus()
    expect(errorFor(email)).toHaveTextContent(/valid email/)
    expect(name).not.toHaveAttribute('aria-invalid')

    await user.type(email, 'company.com')
    expect(email).not.toHaveAttribute('aria-invalid')
    expect(emailjs.send).not.toHaveBeenCalled()
  })

  it('sends once, shows the sending state, then thanks and clears the form', async () => {
    let finish
    emailjs.send.mockReturnValue(new Promise((resolve) => (finish = resolve)))
    const { user, name, email, message, submit, status, fill } = setup()

    await fill({ name: '  Jane Doe ' })
    await user.click(submit)
    expect(submit).toHaveTextContent('Sending…')
    expect(submit).toHaveAttribute('aria-disabled', 'true')

    await user.click(submit) // a second click while sending is ignored
    expect(emailjs.send).toHaveBeenCalledTimes(1)
    expect(emailjs.send).toHaveBeenCalledWith(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: 'Jane Doe',
        email: 'jane@company.com',
        reply_to: 'jane@company.com',
        subject: 'Portfolio contact from Jane Doe',
        message: 'Hello there',
        description: 'Hello there',
      },
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        blockHeadless: true,
      },
    )

    finish({ status: 200, text: 'OK' })
    expect(await within(status).findByText(/Thanks!/)).toBeInTheDocument()
    expect(submit).toHaveTextContent('Send message')
    expect(submit).not.toHaveAttribute('aria-disabled')
    for (const input of [name, email, message]) expect(input).toHaveValue('')

    await user.type(name, 'A') // typing again clears the thank-you
    expect(status).toBeEmptyDOMElement()
  })

  it('shows the error state with a mailto: fallback, and keeps the message', async () => {
    emailjs.send.mockRejectedValue({ status: 400, text: 'Bad request' })
    const logged = vi.spyOn(console, 'error').mockImplementation(() => {})
    const { user, message, submit, status, fill } = setup()

    await fill({ message: 'Hi & hello?' })
    await user.click(submit)

    expect(
      await within(status).findByText(/couldn’t be sent/),
    ).toBeInTheDocument()
    const fallback = within(status).getByRole('link', {
      name: 'email me directly',
    })
    const url = new URL(fallback.getAttribute('href'))
    expect(url.protocol).toBe('mailto:')
    expect(url.pathname).toBe(profile.email)
    expect(url.searchParams.get('subject')).toBe(
      'Portfolio contact from Jane Doe',
    )
    expect(url.searchParams.get('body')).toBe('Hi & hello?')
    expect(message).toHaveValue('Hi & hello?')
    expect(submit).toHaveTextContent('Send message')
    expect(logged).toHaveBeenCalled()
  })

  it('treats a filled honeypot as spam: shows success, sends nothing', async () => {
    const { user, submit, status, fill } = setup()
    const honeypot = document.querySelector('input[name="website"]')
    expect(honeypot).toHaveAttribute('tabindex', '-1')
    expect(honeypot.closest('[aria-hidden="true"]')).not.toBeNull()

    await fill()
    await user.type(honeypot, 'https://spam.example')
    await user.click(submit)

    expect(within(status).getByText(/Thanks!/)).toBeInTheDocument()
    expect(emailjs.send).not.toHaveBeenCalled()
  })
})
