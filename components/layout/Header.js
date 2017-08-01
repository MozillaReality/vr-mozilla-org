import Img from '../Img';

const Header = () => (
  <header className="header">
    <div className="container">
      <Img className="logo" src="/static/img/logo.svg" alt="Mozilla VR" />
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item"><a href="https://blog.mozvr.com/" rel="noreferrer noopener">Blog</a></li>
          <li className="nav__item"><a href="https://aframe.io/" rel="noreferrer noopener">Explore A-Frame</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
