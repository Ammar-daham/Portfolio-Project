import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contacts = () => {

  const serviceID = 'service_ID_ammar'
  const templateID = 'template_ID'
  const userID = 'B0Q-gtarwkqZhDpXo'

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: userID,
      })
      .then(
        () => {
          console.log('SUCCESS!')
        },
        (error) => {
          console.log('FAILED...', error.text)
        },
      )
  }

  return (
    <div className="blog" id="contact">
      <div className="text-center">
        <h2>Contact me</h2>
        <p>Please fill out the form and I'll contact you as soon as possible</p>
      </div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
              <input
                id="phone"
                type="text"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
              />
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
              />
              <input
                id="subject"
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="col-md-6 col-xs-12">
              <textarea
                id="description"
                type="text"
                className="form-control"
                placeholder="Description"
                name="description"
              ></textarea>
              <button className="btn-main-offer contact-btn" type="submit">
                Contact me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts
