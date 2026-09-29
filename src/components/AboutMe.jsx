import MyPhoto from '../ammar.webp'

const AboutMe = () => {
  return (
    <div className="container py-5 blog" id="about-me">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img
              src={MyPhoto}
              className="profile-img"
              alt="Portrait of Ammar Daham"
              data-holder-rendered="true"
            />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h2>About me</h2>
          <p className="para">
            I&apos;m Ammar Daham, a full-stack developer in Helsinki. At Air
            Dice Oy I build and maintain promotional and monitoring tools for
            iGaming, and I work across the stack with React, Node.js and Java. I
            hold a Bachelor&apos;s degree in ICT from Metropolia University of
            Applied Sciences and a Bachelor&apos;s degree in Computer Science
            and Mathematics from the University of Mosul.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
