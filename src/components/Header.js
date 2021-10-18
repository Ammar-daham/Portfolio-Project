import React from "react";
import Typed from "react-typed";


const Header = () => {
    return (
        <div className="header-wraper" id="header"> 
            <div className="main-info">
                <h1>web development and Software production</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Software production"]}
                    typeSpeed={50}
                    backSpeed={60}
                    loop
                />
                <a href="" className="btn-main-offer">Contact me</a>
            </div>
        </div>
    )
}

export default Header
