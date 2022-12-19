/* eslint-disable react/prop-types */
import React from 'react'
import "./menu.css"

const Menu = ({logo, menu}) => {
  return (
    <header className="menu-container">
      <div className="menu-logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="menu-items">
        <a href="#">How We Work</a>
        <a href="#">Services</a>
        <a href="#">Free Quote</a>
        <a href="#">Contact</a>
      </nav>
      <div className="menu-button">
        <img src={menu} alt="menu" />
        </div>
    </header>
  );
};

export default Menu;

