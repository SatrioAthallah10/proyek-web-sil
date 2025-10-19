import React from 'react';
import './Destinations.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// Ganti dengan path gambar Anda di folder assets
import jakartaImg from '../assets/jkt.jpg';
import surabayaImg from '../assets/sby.jpg';
import medanImg from '../assets/mdn.jpg';

const destinations = [
  {
    image: jakartaImg, // Ganti dengan jakartaImg
    city: 'Jakarta',
    description: 'Jangkauan pengiriman cepat dan efisien di seluruh wilayah Jabodetabek, pusat bisnis dan distribusi Indonesia.'
  },
  {
    image: surabayaImg, // Ganti dengan surabayaImg
    city: 'Surabaya',
    description: 'Solusi logistik terintegrasi untuk mendukung industri dan perdagangan di gerbang utama Indonesia Timur.'
  },
  {
    image: medanImg, // Ganti dengan medanImg
    city: 'Medan',
    description: 'Menghubungkan Sumatera ke seluruh nusantara dengan layanan kargo darat dan laut yang terpercaya.'
  }
];

const Destinations = () => {
  return (
    <section className="destinations-section">
      <div className="destinations-container">
        <h2 className="destinations-title">Jangkauan Pengiriman Kami</h2>
        <p className="destinations-subtitle">Melayani rute-rute strategis di seluruh Indonesia untuk kelancaran bisnis Anda.</p>
        
        <div className="destinations-grid">
          {destinations.map((dest, index) => (
            // 2. Bungkus kartu dengan komponen Link
            <Link to={`/pesan-layanan?kota=${dest.city}`} key={index} className="destination-card-link">
              <div className="destination-card">
                <img src={dest.image} alt={`Pengiriman ke ${dest.city}`} className="card-image" />
                <div className="card-content">
                  <h3>{dest.city}</h3>
                  <p>{dest.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <a href="/jangkauan" className="see-more-link">
          Lihat daerah lain <FaArrowRight />
        </a>
      </div>
    </section>
  );
};

export default Destinations;