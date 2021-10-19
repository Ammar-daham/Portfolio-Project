import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm} from "react-hook-form";

const ContactMe = () => {

    const [successMessage, setSuccessMessage] = useState("");
    const {register, handleSubmit, formState: { errors }} = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_uOx1jFjIYhSI0TgkAAbGc";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
               name:  data.name,
               phone: data.phone,
               email: data.email,
               subject: data.subject,
               message: data.message 
            },
            userID
            )
            r.target.reset();
    } 
    

    const sendEmail = (serviceID, templateID, variables, userID) => {
      emailjs.send(serviceID, templateID, variables, userID)
        .then(() => {
            setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
        }).catch(err => console.error(`Something went wrong ${err}`));
    }

    return (
      <div className="contacts" id="contactMe">
          <div className="text-center">
            <h1>Contact me</h1>
            <p>Please fill out the form and I'll contact you as soon as possible.</p>
            <span className="success-message">{successMessage}</span>
          </div>

          <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                {...register("name", { required: true, maxLength:20})}
   
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.name?.type === 'required' && "Please enter your name"}
                            {errors.name?.type === 'maxLength' && "Please enter your name with fewer than 20 characters"}
                        </span>

                        <div className="text-center">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Phone Number"
                                name="phone"
                                {...register("phone", { required: true})}
                            />
                                <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.phone?.type === 'required' && "Please add your phone number"}
                            {errors.name?.type === 'maxLength' && "Please enter your name with fewer than 20 characters"}
                        </span>

                        <div className="text-center">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}
                            />
                                <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.email?.type === 'required' && "Please add your email"}
                            {errors.email?.type === 'pattern' && "Invalid Email"}
                        </span>

                        <div className="text-center">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                                name="subject"
                                {...register("subject", { required: true})}
                            />
                                <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.subject?.type === 'required' && "Please add the subject"}
                        </span>
                </div>

                <div className="col-md-6 col-xs-12">
                    <div className="text-center">
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="Message"
                            name="message"
                            {...register("message", { required: true})}
                        ></textarea>
                        <div className="line"></div>
                    </div>
                    <span className="error-message">
                            {errors.message?.type === 'required' && "Please describe shortly your need..."}
                    </span>
                    <button className="btn-main-offer contact-btn" type="submit">CONTACT ME</button>
                </div>

            </div>
            </form>
          </div>
      </div>  
    )
}

export default ContactMe
