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
      img={oculus}
      text="Get it for Oculus"
      alt="Oculus"
      link="https://www.google.com"
    />
    <DownloadItem
      img={daydream}
      text="Get it for Daydream"
      alt="Oculus"
      link="https://www.google.com"
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
