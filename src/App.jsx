import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Layanan from './pages/Layanan';
import PesanLayanan from './pages/PesanLayanan'; // <-- 1. Impor halaman baru

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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;