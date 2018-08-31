import React from 'react';

// images
import goggles from '../img/designed/goggles.png';

const Designed = () => (
  <div className="fxr-designed">
    <h1>Designed for Virtual Reality</h1>
    <p>
      Built from the ground up to handle all of the new opportunities (and
      challenges) that come with browsing in VR.
    </p>
    <img
      className="mt10"
      src={goggles}
      alt="A browser made specifically for VR"
    />
  </div>
);

export default Designed;
