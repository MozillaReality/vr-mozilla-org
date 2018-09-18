import React from 'react';

// image
import logo from '../../../components/img/fxr/logo-lockup.svg';
import goggles from '../img/goggles.svg';

const bgStyle = {
  backgroundImage: `url(${goggles})`,
};

const hero = () => (
  <div className="fxr-hero">
    <div className="fxr-hero__bg" style={bgStyle} />
    <div className="fxr-hero__content">
      <img className="fxr-hero__logo" alt="Firefox Reality" src={logo} />
      <h1>Enter a New Dimension</h1>
    </div>
  </div>
);

export default hero;
