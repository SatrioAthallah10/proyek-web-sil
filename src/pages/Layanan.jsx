import React from 'react';
import { Link } from 'react-router-dom';
import './Layanan.css';
import { FaMapMarkedAlt } from 'react-icons/fa';

// Daftar kota lengkap
const serviceAreas = [
  // Daftar Lama
  'Balikpapan', 'Samarinda', 'Panajam', 'Berau', 'Nunukan', 'Sendawar', 
  'Tenggarong', 'Sanggata', 'Tanah Grogot', 'Bontang', 'Banjarmasin', 
  'Watampone', 'Enrekang', 'Banggae', 'Mamuju', 'Polewali', 
  'Kolaka', 'Manado', 'Gorontalo', 'Luwuk', 'Taliabu', 'Palu', 'Kendari', 
  'Makassar', 'Konawe', 'Muna', 'Baubau', 'Jeneponto', 'Sorong', 
  'Manokwari', 'Merauke', 'Timika', 'Jayapura', 'Kaimana', 'Biak', 
  'Tarakan', 'Kutai Kartanegara', 'Bulukumba', 'Minahasa', 'Nabire',
  // Daftar Baru dari Screenshot
  'Lampung', 'Palembang', 'Jambi', 'Pekan Baru', 'Medan', 'Aceh', 
  'Tanjung Pinang', 'Batam', 'Denpasar', 'Lombok', 'Sumbawa', 'Bima', 
  'Labuan Bajo', 'Ruteng', 'Bajawa', 'Ende', 'Maumere', 'Larantuka', 
  'Waingapu', 'Waikelo', 'Waikabubak', 'Atambua', 'Kupang', 'Soe', 
  'Kefa', 'Kalabahi', 'Ternate', 'Tidore', 'Sofifi', 'Jailolo', 'Weda', 
  'Maba', 'Merotai', 'Tanjung Balai Karimun', 'Natuna', 'Bintan', 'Ambon', 
  'Masohi', 'Saumlaki', 'Bacan'
];

// Menghapus duplikasi dan mengurutkan berdasarkan abjad
const uniqueSortedAreas = [...new Set(serviceAreas)].sort();

const Layanan = () => {
  return (
    <div className="layanan-page">
      <div className="layanan-header">
        <h1>Area Jangkauan Layanan Kami</h1>
        <p>Kami menjangkau kota-kota besar dan daerah terpencil di seluruh nusantara untuk memastikan distribusi Anda berjalan lancar.</p>
      </div>
      <div className="layanan-container">
        <div className="area-list">
          {uniqueSortedAreas.map((area, index) => (
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
