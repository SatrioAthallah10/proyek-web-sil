import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './PesanLayanan.css';
import CSImage from '../assets/cs-image.jpg'; // Siapkan gambar customer service di folder assets

const PesanLayanan = () => {
  const [searchParams] = useSearchParams();
  const kotaTujuan = searchParams.get('kota') || ''; // Mengambil nama kota dari URL

  const [formData, setFormData] = React.useState({
    nama: '',
    telepon: '',
    alamat: '',
    kota: kotaTujuan, // Pre-fill kota tujuan
    pesan: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const nomorWhatsApp = '6282331481710'; // GANTI DENGAN NOMOR WA ANDA

    const message = `
Halo Samudera Indah Lestari,

Saya ingin melakukan pemesanan layanan pengiriman. Berikut detailnya:
-----------------------------------
*Nama:* ${formData.nama}
*No. Telepon:* ${formData.telepon}
*Alamat Jemput:* ${formData.alamat}
*Kota Tujuan:* ${formData.kota}
*Catatan Tambahan:*
${formData.pesan}
-----------------------------------

Mohon informasinya lebih lanjut. Terima kasih.
    `;

    // Membuat URL WhatsApp
    const whatsappUrl = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(message)}`;

    // Membuka WhatsApp di tab baru
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pesan-layanan-wrapper">
      <div className="pesan-image-side">
        <img src={CSImage} alt="Customer Service" />
      </div>
      <div className="pesan-form-side">
        <form onSubmit={handleSendWhatsApp}>
          <h2>Formulir Pemesanan Layanan</h2>
          <p>Isi detail di bawah ini dan tim kami akan segera menghubungi Anda melalui WhatsApp.</p>
          
          <div className="form-group">
            <label htmlFor="nama">Nama Lengkap</label>
            <input type="text" id="nama" name="nama" value={formData.nama} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="telepon">Nomor WhatsApp Aktif</label>
            <input type="tel" id="telepon" name="telepon" value={formData.telepon} onChange={handleChange} required />
          </div>
          
          <div className="form-group">
            <label htmlFor="kota">Kota Tujuan</label>
            <input type="text" id="kota" name="kota" value={formData.kota} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="alamat">Alamat Lengkap Penjemputan</label>
            <textarea id="alamat" name="alamat" rows="3" value={formData.alamat} onChange={handleChange} required></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="pesan">Catatan Tambahan (Jenis barang, estimasi berat, dll.)</label>
            <textarea id="pesan" name="pesan" rows="4" value={formData.pesan} onChange={handleChange}></textarea>
          </div>

          <button type="submit" className="kirim-button">Kirim via WhatsApp</button>
        </form>
      </div>
    </div>
  );
};

export default PesanLayanan;