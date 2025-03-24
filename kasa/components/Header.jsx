// Header.jsx
import React from 'react';
import logo from '/KasaLogo.png'
import './header.css';

function Header () {
    
  return (
    <>
    
    <header className="header">
    <img src={logo} className="logo" alt="kasa logo"/>
       <nav>
        <ul>
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#apropos">À propos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
     
    </header>
    </>
  );
};

export default Header;


