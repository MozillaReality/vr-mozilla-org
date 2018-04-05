import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { hybrid } from 'react-syntax-highlighter/styles/hljs';
import { Entity, Scene } from 'aframe-react';

// The code that will appear in the code/pre example.
const codeString = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <script src="https://aframe.io/releases/0.7.0/aframe.min.js"></script>
  </head>
  <body>
    <a-scene>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
      <a-sky color="#BBBBBB"></a-sky>
    </a-scene>
  </body>
</html>
`;

class Experiment extends React.Component {
  // necessary because nextjs requires SSR
  componentDidMount() {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line global-require
      require('aframe');
    }
  }
  render() {
    return (
      <div className="experiment">
        <div className="experiment__text">
          <h2 className="h1">Build VR with A-Frame</h2>
          <p>
            Create virtual reality experiences for the browser with A-Frame. This Mozilla-supported
            framework is powerful, open source, and is easy to learn.
          </p>
        </div>

        <div className="experiment__link">
          <a href="https://codepen.io/mozvr/pen/BjygdO" rel="noreferrer noopener" target="_blank">
            View and edit an example on Codepen
          </a>
        </div>

        <div className="experiment__code">
          <SyntaxHighlighter language="xml" style={hybrid}>
            {codeString}
          </SyntaxHighlighter>;
        </div>

        <div className="experiment__demo">
          <Scene embedded>
            <Entity text={{ value: 'Hello, WebVR!' }} />
            <Entity primitive="a-box" color="#4CC3D9" position="-1 0.5 -3" rotation="0 45 0" />
            <Entity primitive="a-sphere" color="#EF2D5E" position="0 1.25 -5" radius="1.25" />
            <Entity
              primitive="a-cylinder"
              color="#FFC65D"
              position="1 0.75 -3"
              radius="0.5"
              height="1.5"
            />
            <Entity
              primitive="a-plane"
              color="#7BC8A4"
              position="0 0 -4"
              rotation="-90 0 0"
              width="4"
              height="4"
            />
            <Entity primitive="a-sky" color="#BBBBBB" />
          </Scene>
        </div>
      </div>
    );
  }
}

Experiment.propTypes = {};

export default Experiment;
