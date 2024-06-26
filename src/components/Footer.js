import React from 'react'
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

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6" style={{marginBottom: "2rem"}}>
            <div className="d-flex add-email">
              <p>City Helsinki</p>
            </div>
            <div className="d-flex add-email">
              <a href="tel:0403223634">+(358)40322-3634</a>
            </div>
            <div className="d-flex add-email">
              <p>aljewaryammar@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6" style={{marginBottom: "2rem"}}>
            <div className="row">
              <div className="col footer-nav-bar">
                <a href="" className="footer-nav">
                  Home
                </a>
                <br />
                <a href="#about-me" className="footer-nav">
                  About me
                </a>
                <br />
                <a href="#education" className="footer-nav">
                  Education
                </a>
              </div>
              <div className="col footer-nav-bar">
                <a href="#skills" className="footer-nav">
                  Skills
                </a>
                <br />
                <a href="https://www.linkedin.com/in/ammar-daham/" className="footer-nav">
                  LinkedIn
                </a>
                <br />
                <a href="" className="footer-nav">
                  Skills
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center" >
            <div className="d-flex justify-content-center">
              <p>Share github on: </p>
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <LinkedinShareButton url={'https://github.com/Ammar-daham/'}>
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
              <WhatsappShareButton url={'https://github.com/Ammar-daham/'}>
                <WhatsappIcon className="mx-3" size={36} />
              </WhatsappShareButton>
              <FacebookShareButton url={'https://github.com/Ammar-daham/'}>
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton url={'https://github.com/Ammar-daham/'}>
                <XIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <EmailShareButton url={'https://github.com/Ammar-daham/'}>
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
