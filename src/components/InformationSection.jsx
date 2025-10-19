import React from 'react';
import './InformationSection.css';
import infoImage from '../assets/info_section.jpg'; // Menggunakan gambar yang sudah ada

const InformationSection = () => {
  return (
    <section className="info-section">
      <div className="info-container">
        {/* Sisi Gambar */}
        <div className="info-image-side" style={{ backgroundImage: `url(${infoImage})` }}>
          {/* Gambar diatur via CSS */}
        </div>
        
        {/* Sisi Teks */}
        <div className="info-text-side">
          <div className="text-content">
            <h2>Mengapa Memilih Samudera Indah Lestari?</h2>
            <p>
              Dengan pengalaman bertahun-tahun di industri logistik, kami memahami bahwa kepercayaan adalah segalanya. Kami berkomitmen untuk memberikan layanan yang andal, efisien, dan transparan. Setiap pengiriman, besar atau kecil, kami tangani dengan profesionalisme tertinggi untuk memastikan barang Anda tiba dengan aman dan tepat waktu.
            </p>
            <a href="/layanan" className="info-button">Lihat Layanan Kami</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;