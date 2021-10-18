import React from "react";

const Education = () => {
    return (
        <div className="education" id="education">
            <div className="d-flex justify-content-center my-5">
                <h1>education</h1>
            </div>
            <div className="container education-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2007-2011</h3>
                        <h5> University of Mosul - computer science </h5>
                        <p>
                            bachelor degree from the college of education, department of computer science and manthmatics at the university of Mosul.                
                        </p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2018-2020</h3>
                        <h5> Omnia vocational school - Information Technology</h5>
    
                        <p>
                            Studied information and communications technology.
                            <ul>
                                <li>I have designed two websites as an online shop using React and WordPress and it was school project.</li>
                                <li>Certificate of privacy education 17.03.2019.</li>
                                <li>Certified ScrumMaster® (CSM®) 26.12.2019</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2020 - ongoing</h3>
                        <h5> Metropolia UAS - ICT </h5>
                        <p>
                            Studying software engneering at Metropolia university of applied sciences. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
