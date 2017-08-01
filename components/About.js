import Img from './Img';

const About = () => (
  <div className="about" id="mission">
    <div className="about__content">
      <div>
        <Img className="mb6" src="/static/img/logo.svg" alt="Mozilla Logo" />
        <p className="mb6">
          Our mission is to keep the Internet open to innovative creators
          and builders anywhere on the web.
        </p>
        <a href="http://www.mozilla.org" rel="noreferrer noopener" target="_blank">Read More</a>
        /*
        Change to https
        */
      </div>
    </div>
    <div className="about__photo" />
  </div>
);

export default About;
