import React from 'react';
import './MutiaraBundaInformationSection.css';
import infoImage from '../assets/info_section.jpg'; // Menggunakan gambar yang sama

const MutiaraBundaInformationSection = () => {
  return (
    <section className="mbe-info-section">
      <div className="mbe-info-container">
        {/* Sisi Gambar */}
        <div className="mbe-info-image-side" style={{ backgroundImage: `url(${infoImage})` }}>
          {/* Gambar diatur via CSS */}
        </div>
        
        {/* Sisi Teks */}
        <div className="mbe-info-text-side">
          <div className="mbe-text-content">
            <h2>Mengapa Memilih Mutiara Bunda Express?</h2>
            <p>
              Kami adalah spesialis pengiriman cepat dan terpercaya. Dengan jaringan yang luas, kami memastikan setiap paket Anda sampai ke tujuan dengan amanah dan tepat waktu. Kecepatan, keamanan, dan kepuasan Anda adalah prioritas utama kami.
            </p>
            <a href="/mutiara-bunda/layanan" className="mbe-info-button">Lihat Layanan Kami</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MutiaraBundaInformationSection;