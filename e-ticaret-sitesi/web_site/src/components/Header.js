import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="logo">
        <h1 className="text-2xl font-bold">My Website</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Ana Sayfa</Link></li>
          <li><Link to="/about" className="hover:underline">Hakkımızda</Link></li>
          <li><Link to="/services" className="hover:underline">Hizmetler</Link></li>
          <li><Link to="/contact" className="hover:underline">İletişim</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;