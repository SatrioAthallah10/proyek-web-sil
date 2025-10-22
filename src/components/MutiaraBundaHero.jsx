import React, { useState, useEffect } from 'react';
import './MutiaraBundaHero.css'; // Kita akan buat file CSS baru untuk ini

// Menggunakan gambar yang sama dari hero section sebelumnya
import slide1 from '../assets/hero_section.png';
import slide2 from '../assets/hero_2.png';
import slide3 from '../assets/hero_3.png';

const slides = [slide1, slide2, slide3];

const MutiaraBundaHero = () => {
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
      
      {/* Konten teks yang sudah diubah */}
      <div className="hero-content">
        <h1 className="hero-title">Mutiara Bunda Express</h1>
        <p className="hero-subtitle">Layanan Kargo Cepat dan Andal, Menjangkau Seluruh Pelosok Negeri</p>
      </div>
    </section>
  );
};

export default MutiaraBundaHero;