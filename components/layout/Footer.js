export default () => (
  <div className="container">
    <footer className="footer">
      <div className="col-md-4">
        <a href="http://mozilla.org">
          <img className="footer__logo" src="/static/img/moz-logo.svg" alt="Mozila" />
        </a>
      </div>
      <div className="col-md-4">
        <span className="footer__title">Mozilla</span>
        <ul className="footer__list">
          <li><a href="https://www.mozilla.org/en-US/about/" rel="noreferrer noopener" target="_blank">About</a></li>
          <li><a href="https://www.mozilla.org/en-US/contact/" rel="noreferrer noopener" target="_blank">Contact Us</a></li>
          <li><a href="https://donate.mozilla.org/en-US/?presets=100,50,25,15&amount=50&utm_source=mozilla.org&utm_medium=referral&utm_content=footer&currency=usd" rel="noreferrer noopener" target="_blank">Donate</a></li>
        </ul>
      </div>
      <div className="col-md-4 col-last">
        <span className="footer__title">Mozilla</span>
        <ul className="footer__list">
          <li><a href="https://www.mozilla.org/en-US/firefox/" rel="noreferrer noopener" target="_blank">Download Firefox Web Browser</a></li>
          <li><a href="https://www.mozilla.org/en-US/firefox/desktop/" rel="noreferrer noopener" target="_blank">Desktop Browser for Mac, Windows, Linux</a></li>
          <li><a href="https://www.mozilla.org/en-US/firefox/android/" rel="noreferrer noopener" target="_blank">Mobile Browser for Android</a></li>
          <li><a href="https://www.mozilla.org/en-US/firefox/ios/" rel="noreferrer noopener" target="_blank">Mobile Browser for iOS</a></li>
        </ul>
      </div>
      <div className="footer__legal">
        <ul className="footer__legal-list">
          <li><a href="https://www.mozilla.org/en-US/privacy/" rel="noreferrer noopener" target="_blank">Privacy</a></li>
          <li><a href="https://www.mozilla.org/en-US/privacy/websites/#cookies" rel="noreferrer noopener" target="_blank">Cookies</a></li>
          <li><a href="https://www.mozilla.org/en-US/about/legal/" rel="noreferrer noopener" target="_blank">Legal</a></li>
        </ul>
      </div>
    </footer>
  </div>
);
