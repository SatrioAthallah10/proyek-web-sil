import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';

// Import komponen utama
import Navbar from './components/Navbar';
import MutiaraBundaNavbar from './components/MutiaraBundaNavbar';
import Footer from './components/Footer';
import MutiaraBundaFooter from './components/MutiaraBundaFooter';

// Import halaman Samudera Indah Lestari
import Home from './pages/Home';
import Layanan from './pages/Layanan';
import PesanLayanan from './pages/PesanLayanan';
import News from './pages/News';
import Kontak from './pages/Kontak';

// Import Halaman Mutiara Bunda Express
import MutiaraBundaHome from './pages/MutiaraBundaHome';
import MutiaraBundaLayanan from './pages/MutiaraBundaLayanan';
import MutiaraBundaNews from './pages/MutiaraBundaNews';
import MutiaraBundaKontak from './pages/MutiaraBundaKontak';
import MutiaraBundaPesanLayanan from './pages/MutiaraBundaPesanLayanan'; // <-- 1. Impor komponen baru

const MainLayout = () => {
  const location = useLocation();
  const isMutiaraBundaPage = location.pathname.startsWith('/mutiara-bunda');

  return (
    <div className="App">
      {isMutiaraBundaPage ? <MutiaraBundaNavbar /> : <Navbar />}
      <main>
        <Outlet />
      </main>
      {isMutiaraBundaPage ? <MutiaraBundaFooter /> : <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Rute Samudera Indah Lestari */}
          <Route index element={<Home />} />
          <Route path="layanan" element={<Layanan />} />
          <Route path="pesan-layanan" element={<PesanLayanan />} />
          <Route path="news" element={<News />} />
          <Route path="kontak" element={<Kontak />} />

          {/* Rute Mutiara Bunda Express */}
          <Route path="mutiara-bunda" element={<MutiaraBundaHome />} />
          <Route path="mutiara-bunda/layanan" element={<MutiaraBundaLayanan />} />
          <Route path="mutiara-bunda/pesan-layanan" element={<MutiaraBundaPesanLayanan />} /> {/* <-- 2. Ganti placeholder */}
          <Route path="mutiara-bunda/news" element={<MutiaraBundaNews />} />
          <Route path="mutiara-bunda/kontak" element={<MutiaraBundaKontak />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;