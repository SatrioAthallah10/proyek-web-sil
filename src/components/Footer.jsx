import React from 'react';
// 1. Ikon LinkedIn (FaLinkedinIn) dihapus dari sini
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      {/* ===== BAGIAN UTAMA (BIRU MUDA) ===== */}
      <div className="footer-main">
        <div className="container">
          {/* Kolom 1: Our Company */}
          <div className="footer-column">
            <h3>PERUSAHAAN KAMI</h3>
            <ul>
              <li><a href="/tentang">Tentang Kami</a></li>
              <li><a href="/news">Ruang Berita</a></li>
              <li><a href="/syarat">Syarat dan Ketentuan</a></li>
            </ul>
          </div>

          {/* KOLOM "INFO LAINNYA" DAN "SUMBER DAYA" DIHAPUS DARI SINI 
          */}
          
          {/* Kolom 4: Follow Us & Social Media */}
          <div className="footer-column">
            <h3>IKUTI KAMI</h3>
            <div className="social-icons">
              {/* 2. Ikon dan link untuk LinkedIn telah dihapus */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BAGIAN BAWAH (GELAP) ===== */}
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright-text">&copy; S. Athallah Kresno P. 2023-{new Date().getFullYear()}</p>
          <div className="footer-links-bottom">
            <a href="/terms">Terms of Use</a>
            <span>|</span>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;