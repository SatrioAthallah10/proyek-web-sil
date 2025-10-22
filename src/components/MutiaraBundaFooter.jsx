import React from 'react';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import './MutiaraBundaFooter.css'; // Nama file CSS tetap sama

const MutiaraBundaFooter = () => {
  return (
    <footer className="mbe-footer-wrapper">
      {/* ===== BAGIAN UTAMA (DIAGONAL) ===== */}
      <div className="mbe-footer-main">
        <div className="mbe-container">
          {/* Kolom 1: Our Company */}
          <div className="mbe-footer-column">
            <h3>PERUSAHAAN KAMI</h3>
            <ul>
              <li><a href="/mutiara-bunda/tentang">Tentang Kami</a></li>
              <li><a href="/mutiara-bunda/news">Ruang Berita</a></li>
              <li><a href="/mutiara-bunda/syarat">Syarat dan Ketentuan</a></li>
              {/* Tautan diubah ke Samudera Indah Lestari */}
              <li><a href="/">Samudera Indah Lestari</a></li> 
            </ul>
          </div>
          
          {/* Kolom Follow Us & Social Media */}
          <div className="mbe-footer-column">
            <h3>IKUTI KAMI</h3>
            <div className="mbe-social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BAGIAN BAWAH (BIRU) ===== */}
      <div className="mbe-footer-bottom">
        <div className="mbe-container">
          <p className="mbe-copyright-text">&copy; S. Athallah Kresno P. 2023-{new Date().getFullYear()}</p>
          <div className="mbe-footer-links-bottom">
            <a href="/terms">Terms of Use</a>
            <span>|</span>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MutiaraBundaFooter;