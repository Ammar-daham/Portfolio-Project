import { useId, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useContent } from '../i18n'
import Button from './ui/Button'
import Card from './ui/Card'
import Icon from './ui/Icon'
import styles from './ContactForm.module.css'

// Set in .env locally (see .env.example) and in Netlify's environment
// variables. They are public by design (they ship in the bundle), so the
// EmailJS dashboard limits which origins may use them.
const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

const FIELDS = ['name', 'email', 'message']
// `website` is the honeypot: hidden from people, but bots fill it in
const EMPTY = { name: '', email: '', message: '', website: '' }

// Each returns the field's error message, or '' when it's valid
const validators = (messages) => ({
  name: (value) => (value.trim() ? '' : messages.nameRequired),
  email: (value) => {
    if (!value.trim()) return messages.emailRequired
    return /^\S+@\S+\.\S+$/.test(value.trim()) ? '' : messages.emailInvalid
  },
  message: (value) => (value.trim() ? '' : messages.messageRequired),
})

// Opens the visitor's mail app with their message filled in
const mailto = (to, subject, { name, message }) =>
  `mailto:${to}?subject=${encodeURIComponent(
    subject(name.trim()),
  )}&body=${encodeURIComponent(message)}`

const Field = ({ label, error, multiline = false, ...props }) => {
  const id = useId()
  const errorId = `${id}-error`
  const Control = multiline ? 'textarea' : 'input'
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <Control
        id={id}
        className={styles.control}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...props}
      />
      {error && (
        <p id={errorId} className={styles.error}>
          {error}
        </p>
      )}
    </div>
  )
}

const ContactForm = () => {
  const { profile, ui } = useContent()
  const t = ui.form
  const validate = validators(t.errors)
  const honeypotId = useId()
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  // idle → sending → sent | error
  const [status, setStatus] = useState('idle')
  const sending = status === 'sending'

  const onChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    // Once a field shows an error, re-check it as the visitor types
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: validate[name](value) }))
    }
    if (status === 'sent') setStatus('idle')
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    if (sending) return

    const found = {}
    for (const field of FIELDS) {
      const error = validate[field](values[field])
      if (error) found[field] = error
    }
    setErrors(found)
    const firstInvalid = FIELDS.find((field) => found[field])
    if (firstInvalid) {
      setStatus('idle')
      event.currentTarget.elements[firstInvalid].focus()
      return
    }

    // A bot filled in the honeypot: act as if it worked, send nothing
    if (values.website) {
      setValues(EMPTY)
      setStatus('sent')
      return
    }

    setStatus('sending')
    const name = values.name.trim()
    const email = values.email.trim()
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          name,
          email,
          reply_to: email,
          subject: t.subject(name),
          message: values.message,
          // The EmailJS template still reads the old form's field name
          description: values.message,
        },
        { publicKey: EMAILJS.publicKey, blockHeadless: true },
      )
      setValues(EMPTY)
      setStatus('sent')
    } catch (error) {
      console.error('Contact form: EmailJS failed to send', error)
      setStatus('error')
    }
  }

  return (
    <Card as="form" className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.row}>
        <Field
          label={t.name}
          name="name"
          type="text"
          autoComplete="name"
          placeholder={t.placeholders.name}
          maxLength={100}
          required
          value={values.name}
          onChange={onChange}
          error={errors.name}
        />
        <Field
          label={t.email}
          name="email"
          type="email"
          autoComplete="email"
          placeholder={t.placeholders.email}
          maxLength={254}
          required
          value={values.email}
          onChange={onChange}
          error={errors.email}
        />
      </div>
      <Field
        label={t.message}
        name="message"
        multiline
        rows={5}
        placeholder={t.placeholders.message}
        maxLength={5000}
        required
        value={values.message}
        onChange={onChange}
        error={errors.message}
      />
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor={honeypotId}>{t.honeypot}</label>
        <input
          id={honeypotId}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={onChange}
        />
      </div>
      <div>
        <Button
          type="submit"
          size="lg"
          className={styles.submit}
          aria-disabled={sending || undefined}
        >
          {sending ? t.sending : t.send}
        </Button>
        <div role="status" aria-live="polite">
          {status === 'sent' && (
            <p className={`${styles.status} ${styles.sent}`}>
              <Icon name="check-circle" className={styles.statusIcon} />
              <span>{t.sent}</span>
            </p>
          )}
          {status === 'error' && (
            <p className={`${styles.status} ${styles.failed}`}>
              <Icon name="alert-circle" className={styles.statusIcon} />
              <span>
                {t.failed}{' '}
                <a
                  className={styles.statusLink}
                  href={mailto(profile.email, t.subject, values)}
                >
                  {t.failedLink}
                </a>
                .
              </span>
            </p>
          )}
        </div>
      </div>
    </Card>
  )
}

export default ContactForm
