import React, { useState } from 'react';
import logo from '../assets/logo.png'
import '../Menu.css';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <ul className={`menu__list ${isOpen ? 'menu__list--open' : 'hide'}`}>
        <li className="menu__item">Home</li>
        <li className="menu__item">Projects</li>
        <li className="menu__item">About</li>
        <li className="menu__item">Contact</li>
      <img src={logo} className="logo1" />
      </ul>
      <div className="menu__toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Menu;