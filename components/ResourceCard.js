import PropTypes from 'prop-types';

const ResourceCard = props => (
  <div className="resource">
    <span className="resource__lead">{props.lead}</span>
    <h2 className="resource__title">{props.title}</h2>
    <p className="resource__desc">{props.desc}</p>
    <span className="demo__link"><a target="_blank" href={props.link}>{props.linkText}</a></span>
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
