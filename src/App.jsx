import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee'; // <-- 1. Impor komponen Marquee
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Marquee /> {/* <-- 2. Tambahkan komponen Marquee di sini */}
      <main>
        {/* Konten halaman lainnya nanti akan ada di sini */}
      </main>
    </div>
  );
}

export default App;