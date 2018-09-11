import React from 'react';

// images
import goggles from '../img/designed/goggles.png';

const Designed = () => (
  <div className="fxr-designed">
    <h2>Designed from the Virtual Ground Up</h2>
    <p>
      Firefox Reality was specifically designed to tackle all of the new
      opportunities (and challenges) that come with browsing in VR.
    </p>
    <img
      className="mt10"
      src={goggles}
      alt="A browser made specifically for VR"
    />
  </div>
);

export default Designed;
