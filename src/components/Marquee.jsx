import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './Marquee.css';

const Marquee = () => {
  return (
    <div className="marquee-section">
      <div className="marquee-content">
        <FaMapMarkerAlt className="location-icon" />
        <p className="marquee-text">
          {/* GANTI ALAMAT INI DENGAN ALAMAT KANTOR ANDA */}
          Jalan Logistik No. 123, Kawasan Industri Maju, Jakarta, Indonesia 12345
        </p>
      </div>
    </div>
  );
};

export default Marquee;