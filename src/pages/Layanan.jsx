import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Layanan.css';
import { FaMapMarkedAlt, FaSearch } from 'react-icons/fa';

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

const Layanan = () => {
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
    <div className="layanan-page">
      <div className="layanan-header">
        <h1>Area Jangkauan Layanan Kami</h1>
        <p>Kami menjangkau kota-kota besar dan daerah terpencil di seluruh nusantara untuk memastikan distribusi Anda berjalan lancar.</p>
        
        <div className="layanan-search-container">
          <div className="layanan-search-bar">
            <FaSearch className="search-icon-layanan" />
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
      
      <div className="layanan-container">
        {filteredAreas.length > 0 ? (
          <div className="area-list">
            {filteredAreas.map((area, index) => (
              <Link to={`/pesan-layanan?kota=${area}`} key={index} className="area-link">
                <div className="area-item">
                  <FaMapMarkedAlt className="area-icon" />
                  <span>{area}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>Daerah "{searchTerm}" tidak ditemukan.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Layanan;

