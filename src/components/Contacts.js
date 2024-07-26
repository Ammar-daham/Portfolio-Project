import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef(); // Define useRef for the form
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false); // Success state

  const serviceID = 'service_ID_ammar';
  const templateID = 'template_ID';
  const userID = 'B0Q-gtarwkqZhDpXo';

  const validateForm = () => {
    const formErrors = {};
    const formElements = form.current.elements;

    if (!formElements.name.value.trim()) {
      formErrors.name = 'Name is required';
    }

    if (!formElements.phone.value.trim()) {
      formErrors.phone = 'Phone number is required';
    }

    if (!formElements.email.value.trim()) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formElements.email.value)) {
      formErrors.email = 'Email address is invalid';
    }

    if (!formElements.subject.value.trim()) {
      formErrors.subject = 'Subject is required';
    }

    if (!formElements.description.value.trim()) {
      formErrors.description = 'Description is required';
    }

    return formErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      emailjs
        .sendForm(serviceID, templateID, form.current, {
          publicKey: userID,
        })
        .then(
          () => {
            setSuccess(true); // Set success to true when email is sent
            setErrors({}); // Clear errors
            form.current.reset(); // Reset the form
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    } else {
      setErrors(formErrors);
      setSuccess(false); // Set success to false if there are errors
    }
  };

  return (
    <div className="blog" id="contact">
      <div className="text-center">
        <h2>Contact me</h2>
        <p>Please fill out the form and I'll contact you as soon as possible</p>
      </div>
      <div className="container">
        <form ref={form} onSubmit={sendEmail} noValidate>
          {success && (
            <div className="alert alert-success" role="alert">
              Your message has been sent successfully!
            </div>
          )}
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="form-group">
                {errors.name && <small className="form-text text-danger">{errors.name}</small>}
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  required
                />
              </div>
              <div className="form-group">
                {errors.phone && <small className="form-text text-danger">{errors.phone}</small>}
                <input
                  id="phone"
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  required
                />
              </div>
              <div className="form-group">
                {errors.email && <small className="form-text text-danger">{errors.email}</small>}
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>
              <div className="form-group">
                {errors.subject && <small className="form-text text-danger">{errors.subject}</small>}
                <input
                  id="subject"
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="form-group">
                {errors.description && <small className="form-text text-danger">{errors.description}</small>}
                <textarea
                  id="description"
                  className="form-control"
                  placeholder="Description"
                  name="description"
                  required
                ></textarea>
              </div>
              <button className="btn-main-offer contact-btn" type="submit">
                Contact me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
