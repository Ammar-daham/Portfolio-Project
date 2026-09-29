import {
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  XIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share'
import { profile } from '../data/profile'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            style={{ marginBottom: '2rem' }}
          >
            <div className="d-flex add-email">
              <p>{profile.location}</p>
            </div>
            <div className="d-flex add-email">
              <a href={profile.phone.href}>{profile.phone.display}</a>
            </div>
            <div className="d-flex add-email">
              <p>{profile.email}</p>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-3 col-sm-6"
            style={{ marginBottom: '2rem' }}
          >
            <div className="row">
              <div className="col footer-nav-bar">
                <a href="#header" className="footer-nav">
                  Home
                </a>
                <br />
                <a href="#about-me" className="footer-nav">
                  About me
                </a>
                <br />
                <a href="#experience" className="footer-nav">
                  Experience
                </a>
                <br />
              </div>
              <div className="col footer-nav-bar">
                <a href="#skills" className="footer-nav">
                  Skills
                </a>
                <br />
                <a href="#education" className="footer-nav">
                  Education
                </a>
                <br />
                <a href={profile.links.linkedin} className="footer-nav">
                  LinkedIn
                </a>
                <br />
              </div>
              <div className="col footer-nav-bar">
                <a href="#contact" className="footer-nav">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <p>Share github on: </p>
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <LinkedinShareButton url={profile.links.github}>
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
              <WhatsappShareButton url={profile.links.github}>
                <WhatsappIcon className="mx-3" size={36} />
              </WhatsappShareButton>
              <FacebookShareButton url={profile.links.github}>
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton url={profile.links.github}>
                <XIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <EmailShareButton url={profile.links.github}>
                <EmailIcon className="mx-3" size={36} />
              </EmailShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy; {new Date().getFullYear()}&nbsp; | All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
