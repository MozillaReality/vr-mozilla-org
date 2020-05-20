import React from 'react';
import Link from 'gatsby-link';

import logo from './img/moz-logo.svg';

const Footer = () => (
  <div className="container">
    <footer className="footer">
      <div className="col-md-4">
        <a href="http://mozilla.org">
          <img className="footer__logo" src={logo} alt="Mozila" />
        </a>
      </div>
      <div className="col-md-4">
        <span className="footer__title">Additional Links</span>
        <ul className="footer__list">
          <li>
            <Link to="/firefox-reality">Firefox Reality</Link>
          </li>
          <li>
            <a href="https://blog.mozvr.com">Mozilla Mixed Reality Blog</a>
          </li>
          <li>
            <a href="https://shop.spreadshirt.com/mozillaMR/">
              Mozilla Reality Merchandise
            </a>
          </li>
          <li>
            <a href="https://webvr-slack.herokuapp.com/">WebVR Slack</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/docs/Web/API/WebVR_API/Using_the_WebVR_API">
              Using WebVR API (MDN)
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 col-last">
        <span className="footer__title">Mozilla</span>
        <ul className="footer__list">
          <li>
            <a href="https://www.mozilla.org/about/">About</a>
          </li>
          <li>
            <a href="https://www.mozilla.org/contact/">Contact Us</a>
          </li>
          <li>
            <a href="https://donate.mozilla.org/en-US/?presets=100,50,25,15&amount=50&utm_source=mozilla.org&utm_medium=referral&utm_content=footer&currency=usd">
              Donate
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__legal">
        <ul className="footer__legal-list">
          <li>
            <a href="https://www.mozilla.org/privacy/">Privacy</a>
          </li>
          <li>
            <a href="https://www.mozilla.org/privacy/websites/#cookies">
              Cookies
            </a>
          </li>
          <li>
            <a href="https://www.mozilla.org/about/legal/">Legal</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
);

export default Footer;
