import React from 'react';
import './News.css';
import { FaSearch, FaNewspaper, FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

// SEO-friendly meta data
const seoData = {
  title: "Berita & Artikel - Samudera Indah Lestari | Solusi Logistik Terpercaya",
  description: "Dapatkan informasi terbaru tentang layanan logistik, ekspansi perusahaan, dan perkembangan industri pengiriman dari Samudera Indah Lestari. Temukan artikel informatif seputar solusi logistik terintegrasi.",
  keywords: "berita logistik, artikel pengiriman, Samudera Indah Lestari, solusi logistik, ekspansi layanan, teknologi logistik, CSR perusahaan, penghargaan logistik",
  author: "Samudera Indah Lestari"
};

const categories = ["Semua", "Ekspansi", "Teknologi", "CSR", "Penghargaan", "Operasional", "Partnership", "Update Layanan"];

const News = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('Semua');
  const [newsData, setNewsData] = React.useState([]);

  // Set SEO meta tags
  React.useEffect(() => {
    document.title = seoData.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoData.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = seoData.description;
      document.head.appendChild(meta);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seoData.keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = seoData.keywords;
      document.head.appendChild(meta);
    }
    
    // Update meta author
    const metaAuthor = document.querySelector('meta[name="author"]');
    if (metaAuthor) {
      metaAuthor.setAttribute('content', seoData.author);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'author';
      meta.content = seoData.author;
      document.head.appendChild(meta);
    }

    // Open Graph meta tags for social sharing
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', seoData.title);
    } else {
      const meta = document.createElement('meta');
      meta.property = 'og:title';
      meta.content = seoData.title;
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', seoData.description);
    } else {
      const meta = document.createElement('meta');
      meta.property = 'og:description';
      meta.content = seoData.description;
      document.head.appendChild(meta);
    }

    // Structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": seoData.title,
      "description": seoData.description,
      "url": window.location.href,
      "publisher": {
        "@type": "Organization",
        "name": "Samudera Indah Lestari",
        "description": "Solusi Logistik Terintegrasi untuk Masa Depan Bisnis Anda"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup structured data
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript && existingScript.textContent === JSON.stringify(structuredData)) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  // Filter news based on search and category
  const filteredNews = React.useMemo(() => {
    let filtered = newsData;

    // Filter by category
    if (selectedCategory !== 'Semua') {
      filtered = filtered.filter(news => news.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(news => 
        news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [newsData, searchTerm, selectedCategory]);

  // Function to add news (you can call this from admin panel or directly)
  const addNews = (newsItem) => {
    setNewsData(prev => [newsItem, ...prev]);
  };

  // Function to update news
  const updateNews = (id, updatedNews) => {
    setNewsData(prev => prev.map(news => 
      news.id === id ? { ...news, ...updatedNews } : news
    ));
  };

  // Function to delete news
  const deleteNews = (id) => {
    setNewsData(prev => prev.filter(news => news.id !== id));
  };

  return (
    <div className="news-page">
      {/* Header Section */}
      <header className="news-header">
        <div className="container">
          <h1>Berita & Artikel</h1>
          <p>Ikuti perkembangan terbaru dari Samudera Indah Lestari</p>
          
          {/* SEO-friendly breadcrumb */}
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li><a href="/">Beranda</a></li>
              <li aria-current="page">Berita & Artikel</li>
            </ol>
          </nav>
        </div>
      </header>

      {/* Search and Filter Section */}
      <section className="news-filters">
        <div className="container">
          <div className="filter-row">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Cari berita, artikel, atau informasi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Cari berita"
              />
            </div>
          </div>
          
          <div className="category-tabs" role="tablist">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
                role="tab"
                aria-selected={selectedCategory === category}
                aria-controls="news-content"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area - Ready for News Articles */}
      <main className="news-content" id="news-content">
        <div className="container">
          {filteredNews.length === 0 ? (
            <div className="empty-state">
              <FaNewspaper className="empty-icon" />
              <h2>Belum Ada Berita</h2>
              <p>
                {searchTerm || selectedCategory !== 'Semua' 
                  ? 'Tidak ada berita yang cocok dengan kriteria pencarian Anda. Coba ubah kata kunci atau kategori.'
                  : 'Belum ada berita yang dipublikasikan. Kunjungi kembali untuk mendapatkan informasi terbaru dari Samudera Indah Lestari.'
                }
              </p>
              {(searchTerm || selectedCategory !== 'Semua') && (
                <button 
                  className="reset-btn"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('Semua');
                  }}
                >
                  Reset Filter
                </button>
              )}
            </div>
          ) : (
            <>
              <div className="news-results-header">
                <h2>Hasil Pencarian</h2>
                <p>Menampilkan {filteredNews.length} berita</p>
              </div>
              
              <div className="news-grid">
                {filteredNews.map((news) => (
                  <article key={news.id} className="news-card">
                    <div className="news-image">
                      <img src={news.image} alt={news.title} />
                      {news.featured && (
                        <span className="featured-badge">Unggulan</span>
                      )}
                    </div>
                    <div className="news-content">
                      <div className="news-meta">
                        <span className="news-category">{news.category}</span>
                        <span className="news-date">
                          <FaCalendarAlt /> {news.date}
                        </span>
                      </div>
                      <h3>{news.title}</h3>
                      <p>{news.excerpt}</p>
                      <div className="news-footer">
                        <span className="news-author">
                          <FaUser /> {news.author}
                        </span>
                        <button className="read-more-btn">
                          Baca Selengkapnya <FaArrowRight />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Newsletter Samudera Indah Lestari</h2>
            <p>Dapatkan berita terbaru, update layanan, dan penawaran khusus langsung di email Anda</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Masukkan email Anda" 
                required
                aria-label="Email untuk newsletter"
              />
              <button type="submit" className="newsletter-btn">Berlangganan</button>
            </form>
          </div>
        </div>
      </section>

      {/* SEO-friendly additional content */}
      <section className="seo-content">
        <div className="container">
          <div className="seo-grid">
            <div className="seo-item">
              <h3>Logistik Terpercaya</h3>
              <p>Samudera Indah Lestari menyediakan solusi logistik terintegrasi untuk mendukung pertumbuhan bisnis Anda di seluruh Indonesia.</p>
            </div>
            <div className="seo-item">
              <h3>Jangkauan Luas</h3>
              <p>Melayani pengiriman ke lebih dari 40 kota di Indonesia dengan jaringan distribusi yang komprehensif.</p>
            </div>
            <div className="seo-item">
              <h3>Inovasi Berkelanjutan</h3>
              <p>Terus berinovasi dalam teknologi logistik untuk memberikan layanan terbaik dan efisien.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;