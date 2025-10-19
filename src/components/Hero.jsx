import React, { useState, useEffect } from 'react';
import './Hero.css';

import slide1 from '../assets/hero_section.png';
import slide2 from '../assets/hero_2.png';
import slide3 from '../assets/hero_3.png';

const slides = [slide1, slide2, slide3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="hero-slider">
      {/* Kontainer untuk semua slide */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide})` }}
        >
          <div className="hero-overlay"></div>
        </div>
      ))}
      
      {/* Konten teks */}
      <div className="hero-content">
        <h1 className="hero-title">Samudera Indah Lestari</h1>
        <p className="hero-subtitle">Solusi Logistik Terintegrasi untuk Masa Depan Bisnis Anda</p>
        {/* Tombol "Jelajahi Layanan Kami" telah dihapus dari sini */}
      </div>
    </section>
  );
};

export default Hero;