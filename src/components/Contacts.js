import React from "react";

const Contacts = () => {
    return (
        <div className="blog" id="contact">
            <div className="text-center">
                <h2>Contact me</h2>
                <p>Please fill out the form and I'll contact you as soon as possible</p>
            </div>
            <div className="container">
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
                            phone="phone"
                        />
                        <input 
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            email="email"
                        />
                        <input 
                            id="subject"
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            subject="subject"
                        />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <textarea 
                            id="description"
                            type="text"
                            className="form-control"
                            placeholder="Description"
                            email="email"
                        >
                        </textarea>
                        <button className="btn-main-offer contact-btn" type="submit"
                        >
                            Contact me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;