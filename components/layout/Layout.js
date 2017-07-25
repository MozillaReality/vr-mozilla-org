/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';

// Components
import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';

const Layout = ({ children, desc, title = 'Whiskey, Sugar and Bitters' }) => (
  <div>
    <Meta title={title} desc={desc} />
    <Header />

    <div className="container content">
      { children }
    </div>

    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Layout;
