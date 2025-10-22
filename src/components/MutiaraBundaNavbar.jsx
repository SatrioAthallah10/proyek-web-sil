import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/mbe-logo.png';
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';
// Pastikan nama file CSS yang diimpor benar
import './MutiaraBundaNavbar.css';

const MutiaraBundaNavbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    // Gunakan class name yang unik
    <header className="mbe-navbar-wrapper">
      <div className="mbe-top-bar">
        <div className="mbe-container">
          <div className="mbe-contact-info">
            <span><FaEnvelope /> logistic@mutiarabundaexpress.com</span>
            <span><FaPhone /> 082331481710 | 089678366832</span>
          </div>
          <div className="mbe-social-links">
            <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /> Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaYoutube /> Youtube</a>
          </div>
        </div>
      </div>

      <nav className="mbe-bottom-bar">
        <div className="mbe-container">
          <div className="mbe-navbar-logo">
            <a href="/mutiara-bunda">
              <img src={Logo} alt="Mutiara Bunda Express Logo" className="mbe-navbar-logo-img" />
            </a>
          </div>

          <div className="mbe-menu-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <div className="mbe-navbar-right">
            <ul className={isMobileMenuOpen ? 'mbe-navbar-links active' : 'mbe-navbar-links'}>
              <li><NavLink to="/mutiara-bunda" className={({isActive}) => isActive ? "active-link" : ""}>Home</NavLink></li>
              <li><NavLink to="/mutiara-bunda/layanan" className={({isActive}) => isActive ? "active-link" : ""}>Layanan</NavLink></li>
              <li><NavLink to="/mutiara-bunda/news" className={({isActive}) => isActive ? "active-link" : ""}>News</NavLink></li>
              <li><NavLink to="/mutiara-bunda/kontak" className={({isActive}) => isActive ? "active-link" : ""}>Kontak</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MutiaraBundaNavbar;