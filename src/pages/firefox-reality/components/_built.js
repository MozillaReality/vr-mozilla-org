import React from 'react';

// images
import ablast from '../img/built/ablast.png';
import apainter from '../img/built/apainter.png';
import kid from '../img/built/kid.png';

const blastStyle = {
  backgroundImage: `url(${ablast})`,
  backgroundSize: 'cover',
};
const paintStyle = {
  backgroundImage: `url(${apainter})`,
  backgroundSize: 'cover',
};
const kidStyle = {
  backgroundImage: `url(${kid})`,
  backgroundSize: 'cover',
};

const Built = () => (
  <div className="fxr-built">
    <div className="fxr-built__square one">
      <p>Built by Mozilla</p>
    </div>
    <div style={paintStyle} className="fxr-built__square two" />
    <div style={blastStyle} className="fxr-built__square three" />
    <div className="fxr-built__square four">
      <div>
        <p>
          We have a bit of experience when it comes to making an awesome
          browser.
        </p>
        <p>Mozilla has been fighting for a better internet since 1998.</p>
      </div>
    </div>
    <div style={kidStyle} className="fxr-built__square five" />
  </div>
);

export default Built;
