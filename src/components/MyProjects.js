import React from "react";
import MyFirstProject from "../myfirstproject.png";
import Basaari from "../basaari.png";
//FONTAWESOME IMPORTS
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearchPlus} from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from  "react-popupbox";
import "react-popupbox/dist/react-popupbox.css"

const MyProjects = () => {

    const openPopupboxMyfirstproject = () => {
        const content = (
        <>
            <img className="image-popupbox" src={MyFirstProject} alt="Coffee Web Page HTML and CSS Project"/>
            <p></p>
            <b>GitHub:</b><a className="hyper-link" onClick={() => window.open("https://github.com/ammaraljewary/HTML-CSS-project")}>https://github.com/ammaraljewary/HTML-CSS-project</a>
            <br/>
            <b>Demo:</b><a className="hyper-link" onClick={() => window.open("https://kind-cori-d632bc.netlify.app")}>https://kind-cori-d632bc.netlify.app</a>
        </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigMyfirstproject = {
        titleBar: {
            enable: true,
            text: "Coffee Web Page"
        },
        fadIn: true,
        fadeInSpeed: 500

    }

    const openPopupboxBasaari = () => {
        const content = (
        <>
            <img className="image-popupbox" src={Basaari} alt="e-commerce website HTML, CSS and JavaScript Project"/>
            <p></p>
            <b>GitHub:</b><a className="hyper-link" onClick={() => window.open("https://github.com/ammaraljewary/web-tekniikka-projektti")}>https://github.com/ammaraljewary/HTML-CSS-project</a>
            <br/>
            <b>Demo:</b><a className="hyper-link" onClick={() => window.open("https://agitated-bell-327c49.netlify.app/")}>https://agitated-bell-327c49.netlify.app/</a>
        </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigBasaari = {
        titleBar: {
            enable: true,
            text: "e-commerce website HTML, CSS and JavaScript Project"
        },
        fadIn: true,
        fadeInSpeed: 500

    }


    return (
        <div className="myproject-wraper" id="myProjectWraper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">MY Projects</h1>
                <div className="image-box-wrapper row justify-content-center">

                    <div className="project-image-box" onClick={openPopupboxMyfirstproject}>
                        <img className="my-project-image" src={MyFirstProject} alt="Coffee Web Page HTML and CSS Project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon= {faSearchPlus} />
                    </div>
                   

                    <div className="project-image-box" onClick={openPopupboxBasaari}>
                        <img className="my-project-image" src={Basaari} alt="e-commerce website HTML, CSS and JavaScript Project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon= {faSearchPlus} />
                    </div>

                </div>
            </div>
            <PopupboxContainer {...popupboxConfigMyfirstproject}/>
            <PopupboxContainer {...popupboxConfigBasaari}/>
        </div>
    )
}

export default MyProjects
