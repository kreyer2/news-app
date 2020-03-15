import React from "react";
import logo from '../styles/img/logo.png'
import {Link} from "react-router-dom";

function Header() {
  const toggleMenu = () => {
    let menu = document.getElementById('navigation');
    let body = document.querySelector('body');
    let burger = document.getElementById('burger');

    menu.classList.toggle('active');
    body.classList.toggle('lock')
    burger.classList.toggle('change')
  };

  const profilePath = localStorage.name && localStorage.user ? '/profile' : '/login';

  return (
    <header className="header d-flex align-items-center" id="header">
      <div className="custom-container">
        <div className="header__row d-flex align-items-center">
          <div className="header__logo">
            <Link to="/">
              <img src={logo}
                   alt="logo"/>
            </Link>
          </div>
          <nav className="header__burger" id="burger" onClick={toggleMenu}>
            <div className="bar-1"></div>
            <div className="bar-2"></div>
            <div className="bar-3"></div>
          </nav>
          <nav className="header__navigation" id="navigation">
            <ul className="header__list">
              <li>
                <Link to="/" className="header__link">Home</Link>
              </li>
              <li>
                <Link to="/news" className="header__link">News</Link>
              </li>
              <li>
                <Link to={profilePath} className="header__link">Profile</Link>
              </li>
            </ul>
          </nav>
          <div className="header__profile">
            {localStorage.name ?
              <Link to="/profile">{localStorage.name}</Link>
              :
              <Link to="/login">Sign In</Link>
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;