import React from 'react'
import MyPhoto from '../ammar.png'

const AboutMe = () => {
  return (
    <div className="container py-5 blog" id="about-me">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img
              src={MyPhoto}
              className="profile-img"
              alt="MyPhoto"
              data-holder-rendered="true"
            />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h2>About me</h2>
          <p className="para">
            Hello! I am Ammar Daham, a software engineer with a diverse
            educational background and extensive experience in web and
            application development. I hold a Bachelor's degree in ICT from
            Metropolia University of Applied Sciences and another Bachelor's
            degree in Computer Science and Mathematics from the College of
            Education at the University of Mosul. Currently, I am employed at
            Air Dice Oy, where I contribute to innovative projects and
            collaborate effectively with my team. I pride myself on being
            detail-oriented and result-driven, always striving for excellence in
            my work. I thrive in team environments, embracing collaboration and
            the delegation of tasks to achieve our collective goals.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
