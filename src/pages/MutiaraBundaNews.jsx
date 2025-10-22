import React from 'react';
import './MutiaraBundaNews.css'; // Menggunakan file CSS baru
import { FaSearch, FaNewspaper, FaArrowRight, FaUser, FaCalendarAlt } from 'react-icons/fa';

const categories = ["Semua", "Ekspansi", "Teknologi", "CSR", "Penghargaan", "Operasional", "Partnership", "Update Layanan"];

// Data dummy untuk contoh tampilan (saat ini kosong)
const dummyNews = [];

const MutiaraBundaNews = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('Semua');
  
  const newsData = dummyNews;

  const filteredNews = React.useMemo(() => {
    let filtered = newsData;
    if (selectedCategory !== 'Semua') {
      filtered = filtered.filter(news => news.category === selected-category);
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
    <div className="mbe-news-page">
      {/* Search and Filter Section */}
      <section className="mbe-news-filters">
        <div className="mbe-container">
          <div className="mbe-filter-container">
            <div className="mbe-search-box">
              <FaSearch className="mbe-search-icon" />
              <input
                type="text"
                placeholder="Cari berita atau artikel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Cari berita"
              />
            </div>
            
            <div className="mbe-category-tabs" role="tablist">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`mbe-category-tab ${selectedCategory === category ? 'active' : ''}`}
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
      <main className="mbe-news-content" id="news-content">
        <div className="mbe-container">
          {filteredNews.length === 0 ? (
            <div className="mbe-empty-state">
              <FaNewspaper className="mbe-empty-icon" />
              <h2>Hasil Tidak Ditemukan</h2>
              <p>Tidak ada berita yang cocok dengan kriteria pencarian Anda.</p>
              <button 
                className="mbe-reset-btn"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Semua');
                }}
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="mbe-news-grid">
              {filteredNews.map((news) => (
                <article key={news.id} className="mbe-news-card">
                  <div className="mbe-news-image">
                    <img src={news.image} alt={news.title} />
                  </div>
                  <div className="mbe-card-news-content">
                    <div className="mbe-news-meta">
                      <span className="mbe-news-category">{news.category}</span>
                      <span className="mbe-news-date">
                        <FaCalendarAlt /> {news.date}
                      </span>
                    </div>
                    <h3>{news.title}</h3>
                    <p className="mbe-news-excerpt">{news.excerpt}</p>
                    <div className="mbe-news-footer">
                      <span className="mbe-news-author">
                        <FaUser /> {news.author}
                      </span>
                      <a href="#" className="mbe-read-more-btn">
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

export default MutiaraBundaNews;