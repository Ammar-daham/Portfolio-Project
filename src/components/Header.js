import React from "react";
import { ReactTyped } from 'react-typed';

const Header = () => {
    
    return (
        <div className="header-wraper" id="header"> 
            <div className="main-info">
                <h1>web development and Software production</h1>
                <ReactTyped
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Software production"]}
                    typeSpeed={50}
                    backSpeed={60}
                    loop
                />
                <a href="#contact" className="btn-main-offer">Contact me</a>
            </div>
        </div>
    )
}

export default Header
