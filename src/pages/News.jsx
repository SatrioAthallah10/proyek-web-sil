import React from 'react';
import './News.css';
import { FaSearch, FaNewspaper, FaArrowRight, FaUser, FaCalendarAlt } from 'react-icons/fa';

const categories = ["Semua", "Ekspansi", "Teknologi", "CSR", "Penghargaan", "Operasional", "Partnership", "Update Layanan"];

// Data dummy untuk contoh tampilan
const dummyNews = [
    
];

const News = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('Semua');
  
  // Menggunakan data dummy
  const newsData = dummyNews;

  const filteredNews = React.useMemo(() => {
    let filtered = newsData;
    if (selectedCategory !== 'Semua') {
      filtered = filtered.filter(news => news.category === selectedCategory);
    }
    if (searchTerm) {
      filtered = filtered.filter(news => 
        news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  }, [newsData, searchTerm, selectedCategory]);

  return (
    <div className="news-page">
      {/* Search and Filter Section */}
      <section className="news-filters">
        <div className="container">
          {/* Container baru untuk menampung search bar dan kategori */}
          <div className="filter-container">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Cari berita atau artikel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Cari berita"
              />
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
        </div>
      </section>

      {/* Main Content Area */}
      <main className="news-content" id="news-content">
        <div className="container">
          {filteredNews.length === 0 ? (
            <div className="empty-state">
              <FaNewspaper className="empty-icon" />
              <h2>Hasil Tidak Ditemukan</h2>
              <p>Tidak ada berita yang cocok dengan kriteria pencarian Anda.</p>
              <button 
                className="reset-btn"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Semua');
                }}
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="news-grid">
              {filteredNews.map((news) => (
                <article key={news.id} className="news-card">
                  <div className="news-image">
                    <img src={news.image} alt={news.title} />
                  </div>
                  <div className="card-news-content">
                    <div className="news-meta">
                      <span className="news-category">{news.category}</span>
                      <span className="news-date">
                        <FaCalendarAlt /> {news.date}
                      </span>
                    </div>
                    <h3>{news.title}</h3>
                    <p className="news-excerpt">{news.excerpt}</p>
                    <div className="news-footer">
                      <span className="news-author">
                        <FaUser /> {news.author}
                      </span>
                      <a href="#" className="read-more-btn">
                        Baca Selengkapnya <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default News;
