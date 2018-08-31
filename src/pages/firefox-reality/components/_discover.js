import React from 'react';
import PropTypes from 'prop-types';

// images
import exp1 from '../img/discover/exp1.png';
import exp2 from '../img/discover/exp2.png';
import exp3 from '../img/discover/exp3.png';
import exp4 from '../img/discover/exp4.png';
import exp5 from '../img/discover/exp5.png';

const DiscoverItem = props => {
  const style = {
    backgroundImage: `url(${props.img})`,
  };
  return (
    <div className="fxr-discover__item">
      <div style={style} className="fxr-discover__item-img">
        <span>{props.tag}</span>
      </div>
      <div className="fxr-discover__item-desc">
        {props.new === true ? <span>NEW</span> : ''}
        {props.desc}
      </div>
    </div>
  );
};

const Discover = () => (
  <div className="fxr-discover">
    <h1>Discover the Immersive Web</h1>
    <p>
      Open Firefox Reality to be presented with the best immersive games,
      videos, environments and experiences from around the web.
    </p>
    <div className="fxr-discover__grid first">
      <DiscoverItem
        img={exp1}
        tag="360 Video"
        desc="Virtual Reality for Everyone"
      />
      <DiscoverItem
        img={exp2}
        tag="Interactive"
        desc="Virtual Reality for Everyone"
      />
      <DiscoverItem
        img={exp3}
        tag="Interactive"
        desc="Virtual Reality for Everyone"
        new
      />
      <DiscoverItem
        img={exp4}
        tag="180 Video"
        desc="Virtual Reality for Everyone"
      />
    </div>
    <div className="fxr-discover__grid reverse">
      <DiscoverItem
        img={exp5}
        tag="180 Video"
        desc="Virtual Reality for Everyone"
        new
      />
      <DiscoverItem
        img={exp3}
        tag="Interactive"
        desc="Virtual Reality for Everyone"
        new
      />
      <DiscoverItem
        img={exp2}
        tag="360 Video"
        desc="Virtual Reality for Everyone"
      />
      <DiscoverItem
        img={exp1}
        tag="Interactive"
        desc="Virtual Reality for Everyone"
      />
    </div>
  </div>
);

DiscoverItem.propTypes = {
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  new: PropTypes.bool,
};

DiscoverItem.defaultProps = {
  new: false,
};

export default Discover;
