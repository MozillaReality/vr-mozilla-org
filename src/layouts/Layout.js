import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

// Components
import Header from './Header';
import Footer from './Footer';

// CSS
import '../styles/style.scss';

// Images
import favicon16 from './img/favicon16.png';
import favicon32 from './img/favicon32.png';
import socialImg from '../components/img/about/bg.png';

const Layout = ({
  children,
  desc = 'Mixed Reality for a free and open Web',
  title = 'Mozilla Mixed Reality',
}) => (
  <>
    <Helmet>
      {/* Meta */}
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta
        name="keywords"
        content="Mixed Reality, Virtual Reality, Augmented Reality, Mozilla, Firefox"
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

      {/* Favicons */}
      <link rel="icon" type="image/png" href={favicon16} sizes="16x16" />
      <link rel="icon" type="image/png" href={favicon32} sizes="32x32" />

      {/* Social Sharing - Facebook */}
      <meta property="og:url" content="https://mixedreality.mozilla.org" />
      <meta property="og:title" content="Mozilla Mixed Reality" />
      <meta
        property="og:description"
        content="Mixed Reality for a free and open Web"
      />
      <meta property="og:image" content={socialImg} />

      {/* Social Sharing - Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mozilla" />
      <meta name="twitter:creator" content="@mozilla" />
      <meta name="twitter:title" content="Mozilla Mixed Reality" />
      <meta
        name="twitter:description"
        content="Mixed Reality for a free and open Web"
      />
      <meta name="twitter:image" content={socialImg} />

      {/* Other */}
      <html lang="en" />
    </Helmet>
    <div className="layout__wrap">
      <Header />

      <div className="container content">{children}</div>

      <Footer />
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  desc: PropTypes.string,
};

Layout.defaultProps = {
  title: 'Mozilla Mixed Reality',
  desc: 'Mixed Reality for a free and open Web',
};

export default Layout;
