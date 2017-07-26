import variables from '../../variables';

const baseUrl = variables.prodUrl;

const Header = () => (
  <header className="header">
    <div className="container">
      <img className="logo" src={`${baseUrl}/static/img/logo.svg`} alt="Mozilla VR" />
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item"><a href="https://aframe.io/">Explore A-frame</a></li>
          <li className="nav__item"><a href="/#experience">How to Experience</a></li>
          <li className="nav__item"><a href="/#mission">Our Mission</a></li>
          <li className="nav__item"><a href="https://blog.mozvr.com/">Blog</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
