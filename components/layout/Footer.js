import Img from '../Img';

export default () => (
  <div className="container">
    <footer className="footer">
      <div className="col-md-4">
        <a href="http://mozilla.org">
          <Img className="footer__logo" src="/static/img/moz-logo.svg" alt="Mozila" />
        </a>
      </div>
      <div className="col-md-4">
        <span className="footer__title">Additional Links</span>
        <ul className="footer__list">
          <li><a href="https://w3c.github.io/webvr/" rel="noreferrer noopener" target="_blank">WebVR Spec</a></li>
          <li><a href="https://mail.mozilla.org/listinfo/web-vr-discuss" rel="noreferrer noopener" target="_blank">WebVR Newsletter</a></li>
          <li><a href="https://webvr-slack.herokuapp.com/" rel="noreferrer noopener" target="_blank">WebVR Slack</a></li>
          <li><a href="https://aframe.io/blog/" rel="noreferrer noopener" target="_blank">A-Frame Blog</a></li>
        </ul>
      </div>
      <div className="col-md-4 col-last">
        <span className="footer__title">Mozilla</span>
        <ul className="footer__list">
          <li><a href="https://www.mozilla.org/en-US/about/" rel="noreferrer noopener" target="_blank">About</a></li>
          <li><a href="https://www.mozilla.org/en-US/contact/" rel="noreferrer noopener" target="_blank">Contact Us</a></li>
          /*
          Can we remove the locale in the URLs above and let the natural detection happen?

          Also, is there a reason we want/need noreferrer set (here and elsewhere)?
          */
          <li><a href="https://donate.mozilla.org/en-US/?presets=100,50,25,15&amount=50&utm_source=mozilla.org&utm_medium=referral&utm_content=footer&currency=usd" rel="noreferrer noopener" target="_blank">Donate</a></li>
          /*
          This is a smart URL on mozilla.org (changes based on locale in URL), so it's probably best to just leave this en-US specific.
          */
        </ul>
      </div>
      <div className="footer__legal">
        <ul className="footer__legal-list">
          <li><a href="https://www.mozilla.org/en-US/privacy/" rel="noreferrer noopener" target="_blank">Privacy</a></li>
          <li><a href="https://www.mozilla.org/en-US/privacy/websites/#cookies" rel="noreferrer noopener" target="_blank">Cookies</a></li>
          <li><a href="https://www.mozilla.org/en-US/about/legal/" rel="noreferrer noopener" target="_blank">Legal</a></li>
          /*
          Same here - better to remove locale and let detection happen.
          */
        </ul>
      </div>
    </footer>
  </div>
);
