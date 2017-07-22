/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';

// Components
import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';

const Layout = ({ children, title = 'Whiskey, Sugar and Bitters' }) => (
  <div>
    <Meta title={title} />
    <Header />

    <div className="container">
      { children }
    </div>

    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
