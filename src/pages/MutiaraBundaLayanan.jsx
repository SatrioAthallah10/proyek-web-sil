import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './MutiaraBundaLayanan.css'; // Menggunakan file CSS baru
import { FaMapMarkedAlt, FaSearch } from 'react-icons/fa';

// Menggunakan data area yang sama seperti sebelumnya
const serviceAreas = [
  'Balikpapan', 'Samarinda', 'Panajam', 'Berau', 'Nunukan', 'Sendawar', 
  'Tenggarong', 'Sanggata', 'Tanah Grogot', 'Bontang', 'Banjarmasin', 
  'Watampone', 'Enrekang', 'Banggae', 'Mamuju', 'Polewali', 
  'Kolaka', 'Manado', 'Gorontalo', 'Luwuk', 'Taliabu', 'Palu', 'Kendari', 
  'Makassar', 'Konawe', 'Muna', 'Baubau', 'Jeneponto', 'Sorong', 
  'Manokwari', 'Merauke', 'Timika', 'Jayapura', 'Kaimana', 'Biak', 
  'Tarakan', 'Kutai Kartanegara', 'Bulukumba', 'Minahasa', 'Nabire',
  'Lampung', 'Palembang', 'Jambi', 'Pekan Baru', 'Medan', 'Aceh', 
  'Tanjung Pinang', 'Batam', 'Denpasar', 'Lombok', 'Sumbawa', 'Bima', 
  'Labuan Bajo', 'Ruteng', 'Bajawa', 'Ende', 'Maumere', 'Larantuka', 
  'Waingapu', 'Waikelo', 'Waikabubak', 'Atambua', 'Kupang', 'Soe', 
  'Kefa', 'Kalabahi', 'Ternate', 'Tidore', 'Sofifi', 'Jailolo', 'Weda', 
  'Maba', 'Merotai', 'Tanjung Balai Karimun', 'Natuna', 'Bintan', 'Ambon', 
  'Masohi', 'Saumlaki', 'Bacan'
];

const uniqueSortedAreas = [...new Set(serviceAreas)].sort();

const MutiaraBundaLayanan = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredAreas = useMemo(() => {
    if (!searchTerm) {
      return uniqueSortedAreas;
    }
    return uniqueSortedAreas.filter(area =>
      area.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="mbe-layanan-page">
      <div className="mbe-layanan-header">
        <h1>Area Jangkauan Layanan Kami</h1>
        <p>Kami menjangkau kota-kota besar dan daerah terpencil di seluruh nusantara untuk memastikan distribusi Anda berjalan lancar.</p>
        
        <div className="mbe-layanan-search-container">
          <div className="mbe-layanan-search-bar">
            <FaSearch className="mbe-search-icon-layanan" />
            <input
              type="search"
              placeholder="Cari kota atau daerah..."
              value={searchTerm}
              onChange={handleSearchChange}
              aria-label="Cari daerah layanan"
            />
          </div>
        </div>
      </div>
      
      <div className="mbe-layanan-container">
        {filteredAreas.length > 0 ? (
          <div className="mbe-area-list">
            {filteredAreas.map((area, index) => (
              <Link to={`/mutiara-bunda/pesan-layanan?kota=${area}`} key={index} className="mbe-area-link">
                <div className="mbe-area-item">
                  <FaMapMarkedAlt className="mbe-area-icon" />
                  <span>{area}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mbe-no-results">
            <p>Daerah "{searchTerm}" tidak ditemukan.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MutiaraBundaLayanan;