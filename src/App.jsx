import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Footer from './components/Footer'; // <-- 1. Impor komponen Footer

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Marquee />
      <main>
        {/* Konten halaman lainnya nanti akan ada di sini */}
      </main>
      <Footer /> {/* <-- 2. Tambahkan komponen Footer di sini */}
    </div>
  );
}

export default App;