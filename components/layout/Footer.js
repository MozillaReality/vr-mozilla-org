export default () => (
  <div className="container">
    <footer className="footer">
      <div className="col-md-4">
        <img className="footer__logo" src="/static/img/moz-logo.svg" alt="Mozila" />
      </div>
      <div className="col-md-4">
        <span className="footer__title">Mozilla</span>
        <ul className="footer__list">
          <li><a href="http://mozilla.org" target="_blank">About</a></li>
          <li><a href="http://mozilla.org" target="_blank">Contact Us</a></li>
          <li><a href="http://mozilla.org" target="_blank">Donate</a></li>
        </ul>
      </div>
      <div className="col-md-4 col-last">
        <span className="footer__title">Mozilla</span>
        <ul className="footer__list">
          <li><a href="http://mozilla.org" target="_blank">Download Firefox Web Browser</a></li>
          <li><a href="http://mozilla.org" target="_blank">Desktop Browser for Mac, Windows, Linux</a></li>
          <li><a href="http://mozilla.org" target="_blank">Mobile Browser for Android</a></li>
          <li><a href="http://mozilla.org" target="_blank">Mobile Browser for iOS</a></li>
        </ul>
      </div>
      <div className="footer__legal">
        <ul className="footer__legal-list">
          <li><a href="http://mozilla.org" target="_blank">Privacy</a></li>
          <li><a href="http://mozilla.org" target="_blank">Cookies</a></li>
          <li><a href="http://mozilla.org" target="_blank">Legal</a></li>
        </ul>
      </div>
    </footer>
  </div>
);
