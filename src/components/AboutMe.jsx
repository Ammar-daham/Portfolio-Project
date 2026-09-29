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
            I&apos;m Ammar Daham, a full-stack engineer in Helsinki who builds
            with JavaScript, TypeScript and Java. At Air Dice Oy I build tools
            for other teams and give them the support they need. My earlier work
            as a manager taught me to take responsibility and drive projects
            forward, and as a team player I enjoy collaborating and sharing the
            work to reach our goals.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
