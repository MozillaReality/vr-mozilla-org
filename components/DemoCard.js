import PropTypes from 'prop-types';

const DemoCard = (props) => {
  const cardStyle = {
    backgroundImage: `url('${props.bg}')`,
  };

  return (
    <div className="demo" style={cardStyle}>
      <div className="demo__content">
        <p className="demo__lead">{props.lead}</p>
        <h2 className="demo__title">{props.title}</h2>
        <p className="demo__link"><a href={props.link}>{props.linkText}</a></p>
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
};

export default DemoCard;
