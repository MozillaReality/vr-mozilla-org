import React from 'react';

import PropTypes from 'prop-types';

const ResourceCard = ({ lead, title, desc, link, linkText }) => (
  <div className="resource">
    <span className="resource__lead">{lead}</span>
    <h2 className="resource__title">{title}</h2>
    <p className="resource__desc">{desc}</p>
    <span className="demo__link">
      <a rel="noopener noreferrer" href={link}>
        {linkText}
      </a>
    </span>
  </div>
);

ResourceCard.propTypes = {
  lead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default ResourceCard;
