import React from 'react';
import './ClientTicker.css';
import { FaStar } from 'react-icons/fa'; // Menambahkan ikon untuk pemisah

// GANTI NAMA-NAMA DI BAWAH INI DENGAN NAMA KLIEN ANDA
const clients = [
  'PT. MITRA ENGINEERING',
  'PT. BUNGA RAYA LESTARI',
  'CV. SEBATIK ISLAND',
  'PT. GLSUP WATER SPORT INDONESIA',
  'PT. ETHSON MANDIRI KREASI',
];

const ClientTicker = () => {
  // Duplikasi daftar klien untuk menciptakan efek loop yang mulus
  const extendedClients = [...clients, ...clients, ...clients];

  return (
    <section className="client-ticker-section">
      <h2 className="ticker-title">Telah Dipercaya Oleh</h2>
      <div className="ticker-wrap">
        <div className="ticker-content">
          {extendedClients.map((client, index) => (
            <div key={index} className="ticker-item">
              <span>{client}</span>
              <FaStar className="ticker-separator" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTicker;