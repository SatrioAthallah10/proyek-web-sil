import React from 'react';
import './MutiaraBundaKontak.css'; // Menggunakan file CSS baru
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

// Informasi kontak baru untuk Mutiara Bunda Express
const contactInfo = {
  phones: ['(021) 123-4567', '0812-3456-7890'],
  email: 'info@mutiarabundaexpress.com',
  address: 'Jln. Sidotopo Lor No: 22 A, Kota Surabaya, Indonesia',
  workingHours: {
    weekdays: 'Senin - Sabtu: 08:00 - 18:00'
  }
};

const MutiaraBundaKontak = () => {
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const ownerWhatsApp = '6281234567890'; // GANTI DENGAN NOMOR WA MBE

    const message = `
Halo Mutiara Bunda Express, saya ingin bertanya.
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
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleWhatsAppClick = (phone) => {
    const sanitizedPhone = phone.replace(/[-() ]/g, '');
    const message = encodeURIComponent('Halo Mutiara Bunda Express, saya ingin bertanya tentang layanan Anda.');
    window.open(`https://wa.me/62${sanitizedPhone.substring(1)}?text=${message}`, '_blank');
  };

  return (
    <div className="mbe-kontak-page">
      {/* Contact Form and Map Section */}
      <section className="mbe-contact-main-section">
        <div className="mbe-container">
          <div className="mbe-contact-main-grid">
            <div className="mbe-contact-form-section">
              <h2>Kirim Pesan</h2>
              <p>Isi formulir di bawah ini dan tim kami akan segera merespon</p>
              <form onSubmit={handleSubmit} className="mbe-contact-form">
                <div className="mbe-form-row">
                  <div className="mbe-form-group"><label htmlFor="name">Nama Lengkap *</label><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Masukkan nama lengkap Anda"/></div>
                  <div className="mbe-form-group"><label htmlFor="email">Email *</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="email@example.com"/></div>
                </div>
                <div className="mbe-form-row">
                  <div className="mbe-form-group"><label htmlFor="phone">Nomor Telepon *</label><input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="08xx-xxxx-xxxx"/></div>
                  <div className="mbe-form-group"><label htmlFor="subject">Subjek *</label><input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Subjek pesan Anda"/></div>
                </div>
                <div className="mbe-form-group"><label htmlFor="message">Pesan *</label><textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="6" placeholder="Jelaskan kebutuhan atau pertanyaan Anda..."></textarea></div>
                <button type="submit" className="mbe-submit-btn" disabled={isSubmitting}>{isSubmitting ? <><span className="mbe-spinner"></span>Mengirim...</> : <><FaPaperPlane />Kirim Pesan</>}</button>
              </form>
            </div>
            <div className="mbe-contact-map-section">
              <div className="mbe-map-container">
                <h2>Lokasi Kami</h2>
                <div className="mbe-map-placeholder">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.80123456789!2d112.75273!3d-7.26281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f95a62f2a74b%3A0x1d782b8d1b1e2b0!2sJln.%20Sidotopo%20Lor%20No.22a%2C%20Sidotopo%2C%20Kec.%20Semampir%2C%20Surabaya%2C%20Jawa%20Timur%2060152!5e0!3m2!1sen!2sid!4v1678886543210!5m2!1sen!2sid" width="100%" height="300" style={{ border: 0, borderRadius: '12px' }} allowFullScreen="" loading="lazy" title="Lokasi Mutiara Bunda Express"></iframe>
                </div>
              </div>
              <div className="mbe-quick-contact">
                <h3>Butuh Bantuan Cepat?</h3>
                <p>Hubungi kami langsung melalui WhatsApp untuk respons cepat</p>
                <div className="mbe-quick-contact-buttons">
                  {contactInfo.phones.map((phone, index) => (
                    <button key={index} className="mbe-quick-whatsapp-btn" onClick={() => handleWhatsAppClick(phone)}><FaWhatsapp /> WhatsApp {phone}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="mbe-contact-info-section">
        <div className="mbe-container">
          <div className="mbe-contact-grid">
            <div className="mbe-contact-card">
              <div className="mbe-contact-icon"><FaPhone /></div>
              <h3>Telepon</h3>
              <div className="mbe-contact-details">
                {contactInfo.phones.map((phone, index) => (
                  <div key={index} className="mbe-phone-item">
                    <a href={`tel:${phone}`} className="mbe-phone-link">{phone}</a>
                    <button className="mbe-whatsapp-btn" onClick={() => handleWhatsAppClick(phone)} title="Hubungi via WhatsApp">
                      <FaWhatsapp />
                    </button>
                  </div>
                ))}
              </div>
              <p className="mbe-contact-description">Hubungi kami untuk informasi layanan dan penawaran terbaik</p>
            </div>
            <div className="mbe-contact-card">
              <div className="mbe-contact-icon"><FaEnvelope /></div>
              <h3>Email</h3>
              <div className="mbe-contact-details">
                <a href={`mailto:${contactInfo.email}`} className="mbe-email-link">{contactInfo.email}</a>
              </div>
              <p className="mbe-contact-description">Kirim email untuk pertanyaan detail atau penawaran kerjasama</p>
            </div>
            <div className="mbe-contact-card">
              <div className="mbe-contact-icon"><FaMapMarkerAlt /></div>
              <h3>Alamat Kantor</h3>
              <div className="mbe-contact-details">
                <p className="mbe-address-text">{contactInfo.address}</p>
              </div>
              <p className="mbe-contact-description">Kunjungi kantor kami untuk konsultasi langsung</p>
            </div>
            <div className="mbe-contact-card">
              <div className="mbe-contact-icon"><FaClock /></div>
              <h3>Jam Operasional</h3>
              <div className="mbe-contact-details">
                <p className="mbe-hours-text">{contactInfo.workingHours.weekdays}</p>
              </div>
              <p className="mbe-contact-description">Kami siap melayani kebutuhan logistik Anda</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MutiaraBundaKontak;