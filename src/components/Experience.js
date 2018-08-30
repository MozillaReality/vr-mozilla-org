import React from 'react';
import NoSSR from 'react-no-ssr';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

// images
import devicesWithBg from './img/experience/devices-with-bg.png';
import devicesBg from './img/experience/devices-bg.png';
import experienceBg from './img/experience/experience-bg.png';
import devices from './img/experience/devices.png';

// styles
const experienceStyle = {
  backgroundImage: `url(${experienceBg})`,
};

const experienceDevicesBg = {
  backgroundImage: `url(${devices})`,
};

const Experience = () => (
  <div className="experience" style={experienceStyle} id="experience">
    <h2 className="h1">How to Experience VR</h2>
    <p className="experience__text">
      Experience WebVR on your phone, computer or headset.
    </p>
    <img
      className="hidden-desktop mb4"
      src={devicesWithBg}
      alt="supported devices"
    />
    <div className="experience__devices" style={experienceDevicesBg}>
      <NoSSR>
        <ParallaxProvider>
          <Parallax
            className="hidden-mobile"
            offsetYMax={8}
            offsetYMin={-5}
            offsetXMin={-5}
            offsetXMax={2}
            slowerScrollRate={false}
          >
            <img src={devicesBg} alt="supported devices" />
          </Parallax>
        </ParallaxProvider>
      </NoSSR>
    </div>

    <div className="mt3">
      <a
        href="https://www.webvrexperiments.com/how"
        rel="noreferrer noopener"
        target="_blank"
        alt="How to experience WebVR"
      >
        How to enjoy WebVR{' '}
      </a>
    </div>
  </div>
);

export default Experience;
