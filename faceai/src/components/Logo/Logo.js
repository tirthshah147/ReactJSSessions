import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return(
    <div>
      <Tilt className="Tilt br2 shadow-2 ml3" options={{ max : 75 }} style={{ height: 250, width: 250 }} >
          <div className="Tilt-inner"> 
            <img src={brain} alt="Brain Logo" className="pt5"/>
          </div>
      </Tilt>
    </div>
  )
}

export default Logo;