import React from 'react';
import './Kontak.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube, FaPaperPlane, FaBuilding, FaTruck, FaUsers, FaHeadset } from 'react-icons/fa';

// Contact information from navbar
const contactInfo = {
  phones: ['082331481710', '089678366832'],
  email: 'info@samuderaindahlestari.com',
  address: 'Jl. Logistik No. 123, Jakarta Selatan, Indonesia',
  workingHours: {
    weekdays: 'Senin - Jumat: 08:00 - 17:00',
    saturday: 'Sabtu: 08:00 - 15:00',
    sunday: 'Minggu: Tutup'
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleWhatsAppClick = (phone) => {
    const message = encodeURIComponent('Halo Samudera Indah Lestari, saya ingin bertanya tentang layanan Anda.');
    window.open(`https://wa.me/62${phone.substring(1)}?text=${message}`, '_blank');
  };

  return (
    <div className="kontak-page">
      {/* Header Section */}
      <header className="kontak-header">
        <div className="container">
          <h1>Hubungi Kami</h1>
          <p>Tim kami siap membantu Anda dengan solusi logistik terbaik</p>
          
          {/* SEO-friendly breadcrumb */}
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li><a href="/">Beranda</a></li>
              <li aria-current="page">Hubungi Kami</li>
            </ol>
          </nav>
        </div>
      </header>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            {/* Phone Contact */}
            <div className="contact-card">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <h3>Telepon</h3>
              <div className="contact-details">
                {contactInfo.phones.map((phone, index) => (
                  <div key={index} className="phone-item">
                    <a href={`tel:${phone}`} className="phone-link">
                      {phone}
                    </a>
                    <button 
                      className="whatsapp-btn"
                      onClick={() => handleWhatsAppClick(phone)}
                      title="Hubungi via WhatsApp"
                    >
                      <FaWhatsapp />
                    </button>
                  </div>
                ))}
              </div>
              <p className="contact-description">
                Hubungi kami untuk informasi layanan dan penawaran terbaik
              </p>
            </div>

            {/* Email Contact */}
            <div className="contact-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <div className="contact-details">
                <a href={`mailto:${contactInfo.email}`} className="email-link">
                  {contactInfo.email}
                </a>
              </div>
              <p className="contact-description">
                Kirim email untuk pertanyaan detail atau penawaran kerjasama
              </p>
            </div>

            {/* Address */}
            <div className="contact-card">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Alamat Kantor</h3>
              <div className="contact-details">
                <p className="address-text">{contactInfo.address}</p>
              </div>
              <p className="contact-description">
                Kunjungi kantor kami untuk konsultasi langsung
              </p>
            </div>

            {/* Working Hours */}
            <div className="contact-card">
              <div className="contact-icon">
                <FaClock />
              </div>
              <h3>Jam Operasional</h3>
              <div className="contact-details">
                <p className="hours-text">{contactInfo.workingHours.weekdays}</p>
                <p className="hours-text">{contactInfo.workingHours.saturday}</p>
                <p className="hours-text">{contactInfo.workingHours.sunday}</p>
              </div>
              <p className="contact-description">
                Kami siap melayani kebutuhan logistik Anda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-main-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Kirim Pesan</h2>
              <p>Isi formulir di bawah ini dan tim kami akan segera merespon</p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nama Lengkap *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Nomor Telepon *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="08xx-xxxx-xxxx"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subjek *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Subjek pesan Anda"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Pesan *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Jelaskan kebutuhan atau pertanyaan Anda..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map and Quick Contact */}
            <div className="contact-map-section">
              <div className="map-container">
                <h2>Lokasi Kami</h2>
                <div className="map-placeholder">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sMonas!5e0!3m2!1sen!2sid!4v1635959048142!5m2!1sen!2sid"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Lokasi Samudera Indah Lestari"
                  ></iframe>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="quick-contact">
                <h3>Butuh Bantuan Cepat?</h3>
                <p>Hubungi kami langsung melalui WhatsApp untuk respons cepat</p>
                <div className="quick-contact-buttons">
                  {contactInfo.phones.map((phone, index) => (
                    <button 
                      key={index}
                      className="quick-whatsapp-btn"
                      onClick={() => handleWhatsAppClick(phone)}
                    >
                      <FaWhatsapp />
                      WhatsApp {phone}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <h2>Layanan Utama Kami</h2>
          <div className="services-grid">
            <div className="service-item">
              <FaTruck className="service-icon" />
              <h3>Pengiriman Barang</h3>
              <p>Layanan pengiriman ke seluruh Indonesia dengan jaringan luas</p>
            </div>
            <div className="service-item">
              <FaBuilding className="service-icon" />
              <h3>Logistik Terintegrasi</h3>
              <p>Solusi logistik komprehensif untuk bisnis Anda</p>
            </div>
            <div className="service-item">
              <FaUsers className="service-icon" />
              <h3>Konsultasi Logistik</h3>
              <p>Tim ahli siap membantu optimasi rantai pasok Anda</p>
            </div>
            <div className="service-item">
              <FaHeadset className="service-icon" />
              <h3>Dukungan 24/7</h3>
              <p>Layanan pelanggan siap membantu kapan saja</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-section">
        <div className="container">
          <h2>Ikuti Kami</h2>
          <p>Dapatkan update terbaru tentang layanan dan promosi kami</p>
          <div className="social-links">
            <a href="#" className="social-link facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
              <span>Facebook</span>
            </a>
            <a href="#" className="social-link instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
              <span>Instagram</span>
            </a>
            <a href="#" className="social-link youtube" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontak;