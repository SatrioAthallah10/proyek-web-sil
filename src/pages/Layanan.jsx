import React from 'react';
import { Link } from 'react-router-dom'; // <-- 1. Impor komponen Link
import './Layanan.css';
import { FaMapMarkedAlt } from 'react-icons/fa';

// Daftar kota dari gambar Anda
const serviceAreas = [
  'Balikpapan', 'Samarinda', 'Panajam', 'Berau', 'Nunukan', 'Sendawar', 
  'Tenggarong', 'Sanggata', 'Tanah Grogot', 'Bontang', 'Banjarmasin', 
  'Watampone', 'Enrekang', 'Banggae', 'Mamuju', 'Polewali', 
  'Kolaka', 'Manado', 'Gorontalo', 'Luwuk', 'Taliabu', 'Palu', 'Kendari', 
  'Makassar', 'Konawe', 'Muna', 'Baubau', 'Jeneponto', 'Sorong', 
  'Manokwari', 'Merauke', 'Timika', 'Jayapura', 'Kaimana', 'Biak', 
  'Tarakan', 'Kutai Kartanegara', 'Bulukumba', 'Minahasa', 'Nabire'
];

const Layanan = () => {
  return (
    <div className="layanan-page">
      <div className="layanan-header">
        <h1>Area Jangkauan Layanan Kami</h1>
        <p>Kami menjangkau kota-kota besar dan daerah terpencil di seluruh nusantara untuk memastikan distribusi Anda berjalan lancar.</p>
      </div>
      <div className="layanan-container">
        <div className="area-list">
          {serviceAreas.map((area, index) => (
            // 2. Bungkus setiap item dengan Link
            <Link to={`/pesan-layanan?kota=${area}`} key={index} className="area-link">
              <div className="area-item">
                <FaMapMarkedAlt className="area-icon" />
                <span>{area}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layanan;