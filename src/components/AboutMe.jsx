import MyPhoto from '../ammar.webp'
import { profile } from '../data/profile'

const AboutMe = () => {
  return (
    <div className="container py-5 blog" id="about-me">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img
              src={MyPhoto}
              className="profile-img"
              alt={`Portrait of ${profile.name}`}
              data-holder-rendered="true"
            />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h2>About me</h2>
          <p className="para">{profile.bio}</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
