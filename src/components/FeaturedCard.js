import React from 'react';
import Link from 'gatsby-link';

// images
import logo from './img/fxr/logo-lockup.svg';

const FeaturedCard = () => (
  <div className="featured">
    <div className="featured__ribbon">New</div>
    <img className="featured__logo mb2" alt="Firefox Reality" src={logo} />
    <p>A new browser for Virtual Reality.</p>
    <Link className="featured__link" to="/firefox-reality">
      Learn More
    </Link>
  </div>
);

export default FeaturedCard;
