import React from 'react';
// import NoSSR from 'react-no-ssr';
// import { Parallax } from 'react-scroll-parallax';

class Experience extends React.Component {

  componentDidMount() {
    const isBrowser = typeof window !== 'undefined';
    const ParallaxController = isBrowser ? require('react-scroll-parallax').ParallaxController : undefined;
    ParallaxController.init();
  }

  render() {
    return (
      <div className="experience">
        <h2>How to Experience VR</h2>
        <p className="experience__text">
          Experience WebVR on your phone, computer or headset.
        </p>
        <img className="experience__devices" src="/static/img/experience/devices-with-bg.png" alt="supported devices" />
        <div className="mt3">
          <a href="http://www.mozilla.org" alt="How to experience WebVR">How to enjoy WebVR </a>
        </div>

      </div>
    );
  }
}

// const Experience = () => (
//   <div className="experience">
//     <h2>How to Experience VR</h2>
//     <p className="experience__text">
//       Experience WebVR on your phone, computer or headset.
//     </p>
//     <img className="experience__devices" src="/static/img/experience/devices-with-bg.png" />
//     <div className="mt3">
//       <a href="http://www.mozilla.org" alt="How to experience WebVR">How to enjoy WebVR </a>
//     </div>
//
//     <NoSSR>
//       <Parallax
//         offsetYMax={20}
//         offsetYMin={-20}
//         slowerScrollRate
//         tag="figure"
//       >
//       </Parallax>
//     </NoSSR>
//
//
//   </div>
// );

export default Experience;
