import React from 'react';
import './Destinations.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// Ganti dengan path gambar Anda di folder assets
import lbjImg from '../assets/lbj.jpg';
import srgImg from '../assets/srg.jpg';
import tntImg from '../assets/tnt.jpg';

const destinations = [
  {
    image: lbjImg, // Ganti dengan jakartaImg
    city: 'Labuan Bajo',
    description: 'Mendukung denyut pariwisata dan bisnis lokal dengan layanan logistik yang cepat dan terpercaya.'
  },
  {
    image: srgImg, // Ganti dengan surabayaImg
    city: 'Sorong',
    description: 'Gerbang logistik utama Anda untuk kelancaran industri dan perdagangan di seluruh Indonesia Timur.'
  },
  {
    image: tntImg, // Ganti dengan medanImg
    city: 'Ternate',
    description: 'Menghubungkan kepulauan Maluku dengan jaringan kargo laut yang efisien dan dapat diandalkan.'
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

        <a href="/layanan" className="see-more-link">
          Lihat daerah lain <FaArrowRight />
        </a>
      </div>
    </section>
  );
};

export default Destinations;