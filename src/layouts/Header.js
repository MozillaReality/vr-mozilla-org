import React from 'react';
import Link from 'gatsby-link';

import logo from './img/logo.svg';

const Header = () => (
  <header className="header">
    <div className="container">
      <Link to="/">
        <img className="logo" src={logo} alt="Mozilla VR" />
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
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
