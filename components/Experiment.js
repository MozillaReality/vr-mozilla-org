import SyntaxHighlighter from 'react-syntax-highlighter';
import { hybrid } from 'react-syntax-highlighter/dist/styles';

// The code that will appear in the code/pre example.
const codeString = `
  <html>
    <head>
      <script src=“https://aframe.io/releases/0.6.0/aframe.min.js”></script>
    <head>

    <body>
      <a-scene>
        <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
        <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
        <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
        <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
        <a-sky color="#ECECEC"></a-sky>
      </a-scene>
    </body>
  </html>
`;

const Experiment = () => (
  <div className="experiment">
    <div className="experiment__text">
      <h2>Experiment with A-Frame</h2>
      <p>
        Create virtual reality experiences for the browser with A-Frame.
        This Mozilla-supported framework is powerful, open source, and is easy to learn.
      </p>
    </div>

    <div className="experiment__code">
      <SyntaxHighlighter language="xml" style={hybrid}>{codeString}</SyntaxHighlighter>;
    </div>


    <div className="experiment__demo">
      <a-scene embedded>
        <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" />
        <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" />
        <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" />
        <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" />
        <a-sky color="#bbbbbb" />
      </a-scene>
    </div>

    <div className="experiment__link">
      <a href="https://codepen.io/mozvr/pen/BjygdO" rel="noreferrer noopener" target="_blank">View and edit this example on Codepen</a>
    </div>
  </div>
);

Experiment.propTypes = {
};

export default Experiment;
