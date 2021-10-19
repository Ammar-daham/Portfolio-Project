import React from "react";
import logo from "../logo.png";
// REACT FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">

                <a className="navbar-brand" ><img className="logo" src={logo} alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon ={faBars} style={{color : "#ffffff"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#header">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about-me">About me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#education">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://drive.google.com/file/d/11M4TSlbJPVWFtq9LeIiaGINrScy3cE6e/view?usp=sharing" target="_blank">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#myProjectWraper">My Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contactMe">contact me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
