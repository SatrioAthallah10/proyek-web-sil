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
          Jln.Sidotopo Lor No: 22 A, Kota Surabaya, Indonesia
        </p>
      </div>
    </div>
  );
};

export default Marquee;