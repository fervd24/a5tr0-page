import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import './InviteMe.css';
import "aos/dist/aos.css";
import Aos from 'aos';

export const InviteMe = () => {

  useEffect(() => {
    Aos.init({ duration: 2100 });
  },[]);

  return (
    <div className='invite-main' id='Invite'>
      <h2 data-aos="flip-right">Invitame a tu servidor!</h2>
      <div className='invite-btn-container'>
        <a href='https://discord.com/api/oauth2/authorize?client_id=1053195900308176896&permissions=0&scope=bot' target='_blank'>
          <button data-aos="zoom-in" class="glow-on-hover" type="button">
            Invitar&nbsp;
            <FontAwesomeIcon icon={faDiscord} className='discord-icon'/>
          </button>
        </a>
      </div>
    </div>
  )
}
