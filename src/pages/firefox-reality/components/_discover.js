import React from 'react';
import PropTypes from 'prop-types';

// images
import dance from '../img/discover/dance.jpg';
import dessert from '../img/discover/dessert.jpg';
import future from '../img/discover/future.jpg';
import mrnomnom from '../img/discover/mrnomnom.jpg';
import opera from '../img/discover/opera.png';
import pirate from '../img/discover/pirate.jpeg';
import thegirl from '../img/discover/thegirl.jpeg';
import waikiki from '../img/discover/waikiki.jpg';

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
    <h2>Content Served Fresh</h2>
    <p>
      Firefox Reality serves you the very best immersive games, videos,
      environments, and experiences from around the Web.
    </p>
    <div className="fxr-discover__grid first">
      <DiscoverItem img={opera} tag="360° Panorama" desc="Opera House" />
      <DiscoverItem
        img={dessert}
        tag="360° Video"
        desc="Dessert Island: T. Thanks A Lot"
      />
      <DiscoverItem img={pirate} tag="3D Model" desc="Pirate Tower" new />
      <DiscoverItem img={mrnomnom} tag="VR Game" desc="Mr Nom Nom" />
    </div>
    <div className="fxr-discover__grid reverse">
      <DiscoverItem img={future} tag="360° Video" desc="I Saw the Future" new />
      <DiscoverItem img={dance} tag="360° Music Video" desc="Dance Tonight" />
      <DiscoverItem
        img={thegirl}
        tag="3D Model"
        desc="The Girl who found pearls..."
        new
      />
      <DiscoverItem img={waikiki} tag="360° Panorama" desc="Waikiki Jetty" />
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
