import Aos from "aos";
import React, { useEffect } from "react";
import "./Navbar.css";
import "aos/dist/aos.css";
export default function Navbar() {

    useEffect(() => {
        Aos.init({ duration: 2100 });
      },[]);

    return(
        <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="navbar-root">
            <ul className="navbar-list">
                <a className="item-container" href="#Home">
                    <li className="navbar-list-item">Inicio</li>
                    <div></div>
                </a>
                <a className="item-container" href="#About">
                    <li className="navbar-list-item">Acerca de A5tr0 bot</li>
                    <div></div>
                </a>
                <a className="item-container" href="#Invite">
                    <li className="navbar-list-item">Invitame a tu servidor!</li>
                    <div></div>
                </a>
            </ul>
            <div className="logo-container">
                <span className="astro-logo">A5TR0</span>&nbsp;&nbsp;
                <span className="astro-logo2">Discord bot</span>
            </div>
        </div>
    )
}