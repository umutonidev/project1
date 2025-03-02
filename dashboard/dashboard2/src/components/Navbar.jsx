// Navbar.jsx
import React from 'react';
import image from '../assets/avat.jpg'
import '../Styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars, faSearch, faSun, faLanguage, faCog, faBolt, faBell
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <>
      <div className="top-navbar">
        <div className="envato-market">
          <img src="https://assets.market-storefront.envato-static.com/storefront/assets/logos/envato-market-0c6ef0bdbf918a098bf915273cd4ca39cb1afd7992deef185dafe33b2c623b2f.svg" alt="Envato Market" className='flower'/>
          <button className="buy-now-button">Buy now</button>
        </div>
      </div>
      <div className="navbar">
        <div className="navbar-left">
          <button className="menu-button">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="search-box">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="text" placeholder="Ctrl + K" />
          </div>
        </div>

        <div className="navbar-right">
          <button className="icon-button">
            <FontAwesomeIcon icon={faSun} />
          </button>
          <button className="icon-button">
            <FontAwesomeIcon icon={faLanguage} />
          </button>
          <button className="icon-button">
            <FontAwesomeIcon icon={faCog} />
          </button>
          <button className="icon-button">
            <FontAwesomeIcon icon={faBolt} />
          </button>
          <button className="icon-button has-badge">
            <FontAwesomeIcon icon={faBell} />
            <span className="badge">3</span>
          </button>
          <div className="profile-avatar">
            <img src="https://i.pravatar.cc/40?img=3" alt="User Avatar" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;