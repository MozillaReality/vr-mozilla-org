import React from 'react';
import Link from 'gatsby-link';

import logo from './img/moz-logo.svg';

const Header = () => (
  <header className="header">
    <div className="container">
      <Link to="/">
        <img className="logo" src={logo} alt="Mozilla Mixed Reality Logo" />
      </Link>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="https://blog.mozvr.com/" rel="noreferrer noopener">
              Blog
            </a>
          </li>
          <li className="nav__item">
            <Link to="/firefox-reality" rel="noreferrer noopener">
              Firefox Reality
            </Link>
          </li>
          <li className="nav__item">
            <a href="https://shop.spreadshirt.com/mozillaMR/" rel="noreferrer noopener">
              Merchandise
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
