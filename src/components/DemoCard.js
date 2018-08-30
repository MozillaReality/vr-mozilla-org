import React from 'react';
import PropTypes from 'prop-types';

const DemoCard = ({ bg, supports, lead, title, link, linkText }) => {
  const cardStyle = {
    backgroundImage: `url('${bg}')`,
  };

  const listItems = supports.map(support => (
    <li key={support.toString()}>{support}</li>
  ));

  return (
    <div className="demo" style={cardStyle}>
      <div className="demo__content">
        <p className="demo__lead">{lead}</p>
        <h2 className="demo__title">{title}</h2>
        <p className="demo__link">
          <a target="_blank" rel="noopener noreferrer" href={link}>
            {linkText}
          </a>
        </p>
      </div>
      <div className="demo__support">
        <ul>{listItems}</ul>
      </div>
    </div>
  );
};

DemoCard.propTypes = {
  bg: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  supports: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DemoCard;
