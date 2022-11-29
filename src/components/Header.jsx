import { NavLink } from 'react-router-dom';
import navRoutes from './RoutesNav';

import Logo from '../assets/images/logo.svg';
import '../assets/styles/components/header.scss';
import '../assets/styles/components/blockHeader.scss';

const Header = () => {
  const navigationList = navRoutes.map(({ path, name, key }) => (
    <li key={key} className="menu__item">
      <NavLink exact="true" to={path}>
        <span> {name} </span>
      </NavLink>
    </li>
  ));

  return (
    <header className="header">
      <section className="overBar">
        <div className="overBar__title">
          <img src={Logo} alt="Logo" />
        </div>
        <input type="checkbox" className="check" id="menu" />
        <nav className="overBar__options">
          <ul className="menu">{navigationList}</ul>
        </nav>
        <div className="overBar__request">
          <button type="button" className="btn">
            <a href="">GitHub repo</a>
          </button>
        </div>
        <div className="overBar__mobile-menu">
          <label for="menu" className="lbl-menu">
            <div className="spn1" />
            <div className="spn2" />
            <div className="spn3" />
          </label>
        </div>
      </section>
    </header>
  );
};

export default Header;
