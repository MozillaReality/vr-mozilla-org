import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';
import Img from './Img';

class Experience extends React.Component {
  static contextTypes = {
    parallaxController: PropTypes.object.isRequired,
  };

  handleLoad = () => {
    // updates cached values after image dimensions have loaded
    const { parallaxController } = this.context;
    parallaxController.update();
  };

  render() {
    return (
      <div className="experience" id="experience">
        <h2 className="h1">How to Experience VR</h2>
        <p className="experience__text">
          Experience WebVR on your phone, computer or headset.
        </p>
        <Img className="hidden-desktop mb4" src="/static/img/experience/devices-with-bg.png" alt="supported devices" />
        <div className="experience__devices">
          <Parallax
            className="hidden-mobile"
            offsetYMax={8}
            offsetYMin={-5}
            offsetXMin={-5}
            offsetXMax={2}
            slowerScrollRate={false}
          >
            <Img
              onLoad={this.handleLoad}
              src="/static/img/experience/devices-bg.png"
              alt="supported devices"
            />
          </Parallax>
        </div>

        <div className="mt3">
          <a href="https://www.webvrexperiments.com/how" rel="noreferrer noopener" target="_blank" alt="How to experience WebVR">How to enjoy WebVR </a>
        </div>

      </div>
    );
  }
}

export default Experience;
