import React from 'react'
import "./menu.css"

const Menu = () => {
  return (
    <header className="menu-container">
      <div className="menu-logo">
        <img src="logo.png" alt="logo" />
      </div>
      <nav className="menu-items">
        <a href="#">How We Work</a>
        <a href="#">Services</a>
        <a href="#">Free Quote</a>
        <a href="#">Contact</a>
      </nav>
      <button className="menu-button">Menu</button>
    </header>
  );
};

export default Menu;

