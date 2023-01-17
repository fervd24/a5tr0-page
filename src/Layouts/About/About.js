import React, { useEffect } from 'react'
import playGif from '../../assets/play.gif';
import productGif from '../../assets/productos.gif';
import helpGif from '../../assets/help.gif';
import gifGif from '../../assets/gif.gif'
import Aos from 'aos';
import "aos/dist/aos.css";
import './About.css';

export const About = () => {

  useEffect(() => {
    Aos.init({ duration: 2100 });
  },[]);

  return (
    <div className='About' id='About'>
        <h2 data-aos="zoom-in-up" data-aos-duration="2100">Acerca de A5TR0</h2>
        <p data-aos="fade-up" data-aos-duration="2100" className='about-description'>Hola! soy A5tr0 un bot multifuncion que busca traer interactividad 
          a tu servidor de Discord. Fui desarrollado con el proposito de ser de utilidad para las
          personas. A continuacion te muestro algunas de las funciones que puedo realizar dentro de tu 
          servidor de Discord.</p>
        <ul className='functions-main'>
            <h3 className='functions-title' data-aos="fade-left">Funciones de A5TR0</h3>
            <li data-aos="fade-right" data-aos-duration="2100" className='function-card'>
              <h3>Visualizador de commandos.</h3>
              <div className='card-body'>
                <div>
                  <span className="command-name">Comando help</span>
                  <p>
                    Comando de ayuda que muestra un listado de todos los comandos disponibles de A5TR0, las funciones de cada
                    commando y ejemplos de uso.
                  </p>
                  <span className='usage-main'>Uso:<span className='usage'>/help</span></span>
                </div>
                <img src={helpGif}/>
              </div>
            </li>
            <li data-aos="fade-left" data-aos-duration="2100" className='function-card'>
              <h3>Reproductor de audio Youtube.</h3>
              <div className='card-body'>
                <div>
                  <span className="command-name">Comando play</span>
                  <p>La funcionalidad principal y favorita de todos por defecto es el reproductor
                    de audio de Youtube permite la reproduccion de audio de cualquier video 
                    en youtube. A5TR0 te permite pausar, detener o saltar una cancion en la lista.
                  </p>
                  <span className='usage-main'>Uso:<span className='usage'>-play &lt;Nombre de busqueda&gt;</span></span>
                </div>
                <img src={playGif}/>
              </div>
            </li>
            <li data-aos="fade-right" data-aos-duration="2100" className='function-card'>
              <h3>Generador de links de productos.</h3>
              <div className='card-body'>
                <div>
                  <span className="command-name">Comando help</span>
                  <p>Cansado de tener que estar buscando un producto en sitio por sitio? Con A5TR0
                    puedes llevar acabo la generacion de links con solo escribir el nombre de tu busqueda
                    en distintas tiendas online de Mexico como lo son Mercado Libre, Amazon, Cyberpuerta, Liverpool, Coppel.
                  </p>
                  <span className='usage-main'>Uso:<span className='usage'>/producto &lt;Nombre de busqueda&gt;</span></span>
                </div>
                <img src={productGif}/>
              </div>
            </li>
            <li data-aos="fade-left" data-aos-duration="2100" className='function-card'>
              <h3>Generador de gif aleatorio.</h3>
              <div className='card-body'>
                <div>
                  <span className="command-name">Comando gif</span>
                  <p>
                    Commando que permite enviar un gif aleatorio, dependiendo de la categoria que se le proporcione.
                  </p>
                  <span className='usage-main'>Uso:<span className='usage'>/gif &lt;Nombre de gif&gt;</span></span>
                </div>
                <img src={gifGif}/>
              </div>
            </li>
        </ul>
    </div>
  )
}
