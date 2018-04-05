import React from 'react';
import NoSSR from 'react-no-ssr';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Img from './Img';

const Experience = () => (
  <div className="experience" id="experience">
    <h2 className="h1">How to Experience VR</h2>
    <p className="experience__text">Experience WebVR on your phone, computer or headset.</p>
    <Img
      className="hidden-desktop mb4"
      src="/static/img/experience/devices-with-bg.png"
      alt="supported devices"
    />
    <div className="experience__devices">
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
            <Img src="/static/img/experience/devices-bg.png" alt="supported devices" />
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
