import React, { useState } from 'react';
import Logo from '../assets/samudera-letari.svg'; 
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaYoutube, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar-wrapper">
      {/* ===== BAGIAN ATAS (BIRU) ===== */}
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <span>
              <FaEnvelope /> Logistic Solution
            </span>
            <span>
              <FaPhone /> 082331481710 | 089678366832
            </span>
          </div>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /> Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaYoutube /> Youtube</a>
          </div>
        </div>
      </div>

      {/* ===== BAGIAN BAWAH (KREM) ===== */}
      <nav className="bottom-bar">
        <div className="container">
          <div className="navbar-logo">
            <a href="/">
              <img src={Logo} alt="Samudera Indah Lestari Logo" className="navbar-logo-img" />
            </a>
          </div>

          {/* Tombol Hamburger Menu (hanya tampil di mobile) */}
          <div className="menu-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Grup baru untuk item di sebelah kanan */}
          <div className="navbar-right">
            <ul className={isMobileMenuOpen ? 'navbar-links active' : 'navbar-links'}>
              <li><a href="/" className="active-link">Home</a></li>
              <li><a href="/layanan">Layanan</a></li>
              <li><a href="/news">News</a></li>
              <li><a href="/kontak">Kontak</a></li>
            </ul>

            <div className="search-icon">
              <FaSearch />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;