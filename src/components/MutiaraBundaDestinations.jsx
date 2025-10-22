import React from 'react';
import './MutiaraBundaDestinations.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// Anda perlu menyiapkan gambar-gambar ini di folder assets
import lombokImg from '../assets/lombok.jpg'; // Ganti dengan gambar Lombok
import maumereImg from '../assets/maumere.jpg'; // Ganti dengan gambar Maumere
import jambiImg from '../assets/jambi.jpg';   // Ganti dengan gambar Jambi

const destinations = [
  {
    image: lombokImg,
    city: 'Lombok',
    description: 'Menghubungkan pusat pariwisata dan bisnis NTB dengan pengiriman kargo yang efisien.'
  },
  {
    image: maumereImg,
    city: 'Maumere',
    description: 'Solusi logistik andal untuk mendukung perdagangan dan industri di Flores.'
  },
  {
    image: jambiImg,
    city: 'Jambi',
    description: 'Menjadi jembatan logistik utama untuk kelancaran distribusi komoditas di Sumatera.'
  }
];

const MutiaraBundaDestinations = () => {
  return (
    <section className="mbe-destinations-section">
      <div className="mbe-destinations-container">
        <h2 className="mbe-destinations-title">Jangkauan Pengiriman Kami</h2>
        <p className="mbe-destinations-subtitle">Melayani rute-rute strategis di seluruh Indonesia untuk kelancaran bisnis Anda.</p>
        
        <div className="mbe-destinations-grid">
          {destinations.map((dest, index) => (
            <Link to={`/mutiara-bunda/pesan-layanan?kota=${dest.city}`} key={index} className="mbe-destination-card-link">
              <div className="mbe-destination-card">
                <img src={dest.image} alt={`Pengiriman ke ${dest.city}`} className="mbe-card-image" />
                <div className="mbe-card-content">
                  <h3>{dest.city}</h3>
                  <p>{dest.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <a href="/mutiara-bunda/layanan" className="mbe-see-more-link">
          Lihat daerah lain <FaArrowRight />
        </a>
      </div>
    </section>
  );
};

export default MutiaraBundaDestinations;