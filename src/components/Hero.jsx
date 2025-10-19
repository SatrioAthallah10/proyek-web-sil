import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section hero-option-1">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Samudera Indah Lestari</h1>
        <p className="hero-subtitle">Solusi Logistik Terintegrasi untuk Masa Depan Bisnis Anda</p>
        <a href="/layanan" className="hero-cta-button">Jelajahi Layanan Kami</a>
      </div>
    </section>
  );
};

export default Hero;