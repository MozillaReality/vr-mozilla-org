import PropTypes from 'prop-types';
import { prodUrl as baseUrl } from '../variables';

const Img = ({ src, alt, className }) => (
  <img className={className} src={`${baseUrl}${src}`} alt={alt} />
);

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

Img.defaultProps = {
  className: '',
  alt: '',
};

export default Img;
