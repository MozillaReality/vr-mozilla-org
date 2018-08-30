import React from 'react';

// images
import vrIcon from './img/hero/vr-icon.svg';

const Hero = () => (
  <div className="hero">
    <img className="hero__icon mb2" src={vrIcon} alt="Virtual Reality" />
    <h1 className="hero__text">Virtual Reality for the Open Web</h1>
  </div>
);

export default Hero;
