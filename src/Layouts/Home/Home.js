import React, { useEffect } from 'react'
import { Typed } from '../../components/Typed'
import './Home.css';
import "aos/dist/aos.css";
import Aos from 'aos';

export const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2100 });
  },[]);

  return (
    <div className='home-main' id="Home">
        <Typed/>
        <div  className='robot'>
          <div className='head'>
            <div className='face'>
              <div className='eyes left-eye'></div>
              <div className='eyes right-eye'></div>
            </div>
          </div>
          <div className='body-container'>
            <div className='body'>
            </div>
              <div className='arm left-arm'></div>
              <div className='arm right-arm'></div>
          </div>
          <div className='shadow'></div>
          <div className='mouth'></div>
        </div>
    </div>
  )
}
