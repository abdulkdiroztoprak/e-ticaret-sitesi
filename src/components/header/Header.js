import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 


function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1 className="logo-text">UTKA TİCARET</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Anasayfa</Link></li>
          <li><Link to="/about" className="nav-link">Hakkımızda</Link></li>
          <li><Link to="/Sepet" className="nav-link">Alışveriş</Link></li>
          <li><Link to="/contact" className="nav-link">İletişim</Link></li>
         
        </ul>
      </nav>
    </header>
  );
}

export default Header;
