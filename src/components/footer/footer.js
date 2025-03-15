import React from 'react';
import './Footer.css'; // Stil dosyasını dışarıya ayırdık

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; 2025 <strong>UTKA TİCARET</strong>. Tüm hakları saklıdır.
        </p>
        <div className="footer-links">
          <a href="/privacy-policy" className="footer-link">Gizlilik Politikası</a> | 
          <a href="/terms-of-service" className="footer-link">Hizmet Şartları</a>
        </div>
        <p className="footer-contact">
          İletişim: <a href="mailto:info@utkaticaret.com" className="footer-email">info@utkaticaret.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
