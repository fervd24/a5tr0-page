import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import "./Typed.css";
import "aos/dist/aos.css";
import Aos from 'aos';

export const Typed = () => {
    
  useEffect(() => {
    Aos.init({ duration: 2000 });
  },[]);

  return (
    <div data-aos="zoom-out-right" className='typed-container'>
      <TypeAnimation
          sequence={[
              "Hola! Soy A5tr0",
              3000,
              `Tu bot favorito de discord.`,
              3000,
              "Tareas como reproducir musica🎵",
              1700,
              "Tareas como buscar productos🛒",
              3000,
              "Entre otras son las que puedo realizar...",
              3000,
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          className="typed"
      />
    </div>
  )
}
