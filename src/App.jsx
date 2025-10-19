import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import InformationSection from './components/InformationSection';
import ClientTicker from './components/ClientTicker';
import Destinations from './components/Destinations'; // <-- 1. Impor komponen baru
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Marquee />
      <InformationSection />
      <ClientTicker />
      <Destinations /> {/* <-- 2. Tambahkan komponen di sini */}
      <main>
        {/* Konten halaman lainnya nanti akan ada di sini */}
      </main>
      <Footer />
    </div>
  );
}

export default App;