import React from 'react';
import { NavLink } from 'react-router-dom';

function Header({ userId, setUserId, mockedData, setMockedData }) {
  function userToggle() {
    userId === 12 ? setUserId(18) : setUserId(12);
  }
  function dataToggle() {
    mockedData === true ? setMockedData(false) : setMockedData(true);
  }

  return (
    <header className="header">
      <nav>
        <img src="./assets/logo.svg" alt="logo" />
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/" onClick={userToggle}>
          Profil
        </NavLink>
        <NavLink to="/" onClick={dataToggle}>
          Réglage
        </NavLink>
        <NavLink to="/">Communauté</NavLink>
      </nav>
    </header>
  );
}

export default Header;
