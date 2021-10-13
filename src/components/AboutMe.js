import React from "react";
import MyPhoto from "../myphoto.png";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img src={MyPhoto} className="profile-img" alt="MyPhoto"
                            data-holder-rendered="true" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About me</h1>
                    <p>
                        Hello! My name is Ammar Daham. I am a software engneering student at Metropolia university of applied sciences.
                        I have a bachelor degree from the college of education, department of computer science and manthmatics at the university of Mosul.
                        Also, I hold a basic degree from Omnia Vocational School in infromation and communication technology
                        I am experienced in web development.
                        As a worker, I am detail-oriented and result-driven. I work well with others and part of a team. I do not shy away from delegation of
                    </p>
                </div>
            </div>

        </div>

    )
}


export default AboutMe
