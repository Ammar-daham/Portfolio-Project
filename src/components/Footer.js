import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton, 
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
 } from "react-share"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>My Portfolio</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:+358403223634">+358 40 3223 634</a>
                        </div>
                        <div className="d-flex">
                            <p>ammar.daham@metropolia.fi</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br />
                                <a className="footer-nav">About me</a>
                                <br />
                                <a className="footer-nav">Education</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Resume</a>
                                <br />
                                <a className="footer-nav">My Projects</a>
                                <br />
                                <a className="footer-nav">Contact me</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton 
                                url={"https://www.linkedin.com/in/ammar-daham-00130817b/"}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                            >
                                <FacebookIcon className="max-3" size={36} />
                            </FacebookShareButton>

                            <TwitterShareButton 
                                url={"https://www.linkedin.com/in/ammar-daham-00130817b/"}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                            >
                                <TwitterIcon className="max-3" size={36} />
                            </ TwitterShareButton>

                            <LinkedinShareButton
                                url={"https://www.linkedin.com/in/ammar-daham-00130817b/"}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                            >
                                <LinkedinIcon className="max-3" size={36} />
                            </ LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;
                        </p>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Footer
