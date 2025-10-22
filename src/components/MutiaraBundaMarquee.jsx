import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './MutiaraBundaMarquee.css'; // Nama file CSS tidak berubah

const MutiaraBundaMarquee = () => {
  return (
    <div className="mbe-marquee-section">
      <div className="mbe-marquee-content">
        <FaMapMarkerAlt className="mbe-location-icon" />
        <p className="mbe-marquee-text">
          Jln.Sidotopo Lor No: 22 A, Kota Surabaya, Indonesia
        </p>
      </div>
    </div>
  );
};

export default MutiaraBundaMarquee;