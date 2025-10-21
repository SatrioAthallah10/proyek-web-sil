import React from 'react';
import './Kontak.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaPaperPlane, FaBuilding, FaTruck, FaUsers, FaHeadset } from 'react-icons/fa';

// Informasi kontak
const contactInfo = {
  phones: ['082331481710', '089678366832'],
  email: 'info@samuderaindahlestari.com',
  address: 'Jln.Sidotopo Lor No: 22 A, Kota Surabaya, Indonesia',
  workingHours: {
    weekdays: 'Senin - Minggu: 08:00 - 17:00'
  }
};

const Kontak = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const ownerWhatsApp = '6282331481710'; // Nomor WhatsApp tujuan

    const message = `
Halo, saya ingin bertanya.
-----------------------------------
*Nama:* ${formData.name}
*Email:* ${formData.email}
*No. Telepon:* ${formData.phone}
*Subjek:* ${formData.subject}
*Pesan:*
${formData.message}
-----------------------------------
    `;

    const whatsappUrl = `https://wa.me/${ownerWhatsApp}?text=${encodeURIComponent(message)}`;

    // Buka WhatsApp di tab baru
    window.open(whatsappUrl, '_blank');

    // Reset form setelah beberapa saat
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleWhatsAppClick = (phone) => {
    const message = encodeURIComponent('Halo Samudera Indah Lestari, saya ingin bertanya tentang layanan Anda.');
    window.open(`https://wa.me/62${phone.substring(1)}?text=${message}`, '_blank');
  };

  return (
    <div className="kontak-page">

    {/* Contact Form and Map Section */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-main-grid">
            <div className="contact-form-section">
              <h2>Kirim Pesan</h2>
              <p>Isi formulir di bawah ini dan tim kami akan segera merespon</p>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group"><label htmlFor="name">Nama Lengkap *</label><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Masukkan nama lengkap Anda"/></div>
                  <div className="form-group"><label htmlFor="email">Email *</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="email@example.com"/></div>
                </div>
                <div className="form-row">
                  <div className="form-group"><label htmlFor="phone">Nomor Telepon *</label><input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="08xx-xxxx-xxxx"/></div>
                  <div className="form-group"><label htmlFor="subject">Subjek *</label><input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Subjek pesan Anda"/></div>
                </div>
                <div className="form-group"><label htmlFor="message">Pesan *</label><textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="6" placeholder="Jelaskan kebutuhan atau pertanyaan Anda..."></textarea></div>
                <button type="submit" className="submit-btn" disabled={isSubmitting}>{isSubmitting ? <><span className="spinner"></span>Mengirim...</> : <><FaPaperPlane />Kirim Pesan</>}</button>
              </form>
            </div>
            <div className="contact-map-section">
              <div className="map-container">
                <h2>Lokasi Kami</h2>
                <div className="map-placeholder">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.925794519781!2d112.75201231477468!3d-7.24924199476736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9c2a6f2f2e5%3A0x7b23315606c137e!2sJl.%20Sidotopo%20Lor%20No.22%2C%20Sidotopo%2C%20Kec.%20Semampir%2C%20Surabaya%2C%20Jawa%20Timur%2060152!5e0!3m2!1sen!2sid!4v1635959048142!5m2!1sen!2sid" width="100%" height="300" style={{ border: 0, borderRadius: '12px' }} allowFullScreen="" loading="lazy" title="Lokasi Samudera Indah Lestari"></iframe>
                </div>
              </div>
              <div className="quick-contact">
                <h3>Butuh Bantuan Cepat?</h3>
                <p>Hubungi kami langsung melalui WhatsApp untuk respons cepat</p>
                <div className="quick-contact-buttons">
                  {contactInfo.phones.map((phone, index) => (
                    <button key={index} className="quick-whatsapp-btn" onClick={() => handleWhatsAppClick(phone)}><FaWhatsapp /> WhatsApp {phone}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon"><FaPhone /></div>
              <h3>Telepon</h3>
              <div className="contact-details">
                {contactInfo.phones.map((phone, index) => (
                  <div key={index} className="phone-item">
                    <a href={`tel:${phone}`} className="phone-link">{phone}</a>
                    <button className="whatsapp-btn" onClick={() => handleWhatsAppClick(phone)} title="Hubungi via WhatsApp">
                      <FaWhatsapp />
                    </button>
                  </div>
                ))}
              </div>
              <p className="contact-description">Hubungi kami untuk informasi layanan dan penawaran terbaik</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><FaEnvelope /></div>
              <h3>Email</h3>
              <div className="contact-details">
                <a href={`mailto:${contactInfo.email}`} className="email-link">{contactInfo.email}</a>
              </div>
              <p className="contact-description">Kirim email untuk pertanyaan detail atau penawaran kerjasama</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><FaMapMarkerAlt /></div>
              <h3>Alamat Kantor</h3>
              <div className="contact-details">
                <p className="address-text">{contactInfo.address}</p>
              </div>
              <p className="contact-description">Kunjungi kantor kami untuk konsultasi langsung</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><FaClock /></div>
              <h3>Jam Operasional</h3>
              <div className="contact-details">
                <p className="hours-text">{contactInfo.workingHours.weekdays}</p>
                <p className="hours-text">{contactInfo.workingHours.saturday}</p>
                <p className="hours-text">{contactInfo.workingHours.sunday}</p>
              </div>
              <p className="contact-description">Kami siap melayani kebutuhan logistik Anda</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontak;

