import React from 'react';
import './Navbar.css'; // Jangan lupa import file CSS

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <a href="/">
          {/* Anda bisa mengganti teks ini dengan tag <img> untuk logo */}
          <strong>ADVIANT</strong> BERKAT BERSAMA
        </a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">HOME</a></li>
        <li><a href="/tentang">TENTANG KAMI</a></li>
        <li><a href="/layanan">LAYANAN</a></li>
        <li><a href="/kontak">KONTAK</a></li>
      </ul>
      <button className="navbar-cta-button">HUBUNGI KAMI</button>
    </nav>
  );
};

export default Navbar;