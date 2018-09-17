import React from 'react';
import PropTypes from 'prop-types';

// images
import oculus from '../img/download/oculus.svg';
import daydream from '../img/download/daydream.svg';
import htc from '../img/download/htc.svg';

const style = {
  border: 'none',
};

const DownloadItem = props => (
  <a style={style} target="_blank" rel="noopener noreferrer" href={props.link}>
    <div className="fxr-download__item">
      <div className="fxr-download__item-bg" />
      <div className="fxr-download__item-content">
        <img src={props.img} alt={props.alt} />
        <span>{props.text}</span>
      </div>
    </div>
  </a>
);

const Download = () => (
  <div className="fxr-download">
    <DownloadItem
      img={htc}
      text="Get it for HTC VIVEPORT"
      alt="HTC VIVEPORT"
      link="https://www.viveport.com/apps/05634fed-6dc5-4aa8-865d-af6027f4ec09"
    />
    <DownloadItem
      img={oculus}
      text="Get it for Oculus Go"
      alt="Oculus"
      link="https://www.oculus.com/experiences/go/2208418715853974/"
    />
    <DownloadItem
      img={daydream}
      text="Get it for Google Daydream"
      alt="Oculus"
      link="https://play.google.com/store/apps/details?id=org.mozilla.vrbrowser"
    />
  </div>
);

DownloadItem.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Download;
