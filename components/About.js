import Img from './Img';

const About = () => (
  <div className="about" id="mission">
    <div className="about__content">
      <div>
        <Img className="about__logo mb6" src="static/img/logo.svg" alt="Mozilla Logo" />
        <p className="mb6">
          Our mission is to keep the Internet open to innovators, creators, and builders on the web. Virtual Reality is set to change the future of web interaction. The ability for anyone to access and enjoy VR experiences is critical. This is why Mozilla set out to bring virtual reality to web browsers, and why we are enabling WebVR in Firefox.
        </p>
        {/* <a href="https://www.mozilla.org" rel="noreferrer noopener" target="_blank">Read More</a> */}
      </div>
    </div>
    <div className="about__photo" />
  </div>
);

export default About;
