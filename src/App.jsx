import React from 'react';
import Navbar from './components/Navbar'; // Import komponen Navbar
import './App.css'; // Anda bisa menggunakan ini untuk styling halaman lainnya

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        {/* Konten halaman Anda akan berada di sini */}
        <h1>Selamat Datang di Website Saya</h1>
        <p>Ini adalah konten utama halaman.</p>
      </main>
    </div>
  );
}

export default App;