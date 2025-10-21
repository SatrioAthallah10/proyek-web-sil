import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Layanan from './pages/Layanan';
import PesanLayanan from './pages/PesanLayanan'; // <-- 1. Impor halaman baru
import News from './pages/News';
import Kontak from './pages/Kontak';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/layanan" element={<Layanan />} />
            <Route path="/pesan-layanan" element={<PesanLayanan />} /> {/* <-- 2. Tambahkan route baru */}
            <Route path="/news" element={<News />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;