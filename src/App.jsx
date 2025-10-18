import React, { useState } from 'react';

// === Ikon SVG untuk digunakan di dalam komponen ===
// Ikon untuk menu mobile (Hamburger & Close)
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Ikon untuk layanan
const TruckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-cyan-400 mb-4 mx-auto"><path d="M10 17h4V5H2v12h3"/><path d="M2 17a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3H2Z"/><path d="M14 17a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3h-5Z"/><path d="M12 5H9.84a2 2 0 0 0-1.95 1.55l-1.29 4.4A2 2 0 0 0 8.56 14H12Z"/><path d="M22 17h-1"/><path d="m22 5-2.65 4.55A2 2 0 0 1 17.56 11H14V5h8Z"/></svg>
);

const ShipIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-cyan-400 mb-4 mx-auto"><path d="M2 21c.6.5 1.2.8 2.5.8 2.5 0 2.5-2 5-2s2.5 2 5 2c1.3 0 1.9-.3 2.5-.8"/><path d="M19.38 20A11.6 11.6 0 0 0 22 13.22V9c0-2.2-1.8-4-4-4H6a4 4 0 0 0-4 4v4.22A11.6 11.6 0 0 0 4.62 20"/><path d="M12 16v-4"/><path d="M12 6V3"/><path d="M8 10h8"/></svg>
);

const WarehouseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-cyan-400 mb-4 mx-auto"><path d="M22 21V9l-9.4-7-4.6 3.5"/><path d="M2 21V11l4.6-3.5L12 11V21"/><path d="M12 21V11"/><path d="m18 15-6-4.5-6 4.5"/><path d="M12 3v8l6 4.5"/><path d="M3 21h18"/><path d="M15 21v-3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V21"/></svg>
);

// === Komponen Header ===
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["Home", "Tentang Kami", "Layanan", "Hubungi Kami"];

  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-sm text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-cyan-400">
              <span className="text-white">Adviant</span>Logistics
            </h1>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-gray-900 bg-opacity-95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

// === Komponen Hero Section ===
const Hero = () => (
  <section className="relative h-[90vh] max-h-[700px] min-h-[500px] text-white flex items-center justify-center text-center">
    <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
    <img
      src="https://placehold.co/1920x800/011C38/FFFFFF?text=Jasa+Pengiriman+Logistik"
      alt="Layanan Logistik"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative z-20 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4">
        SOLUSI LOGISTIK & PERGUDANGAN TERPERCAYA
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto">
        Mitra andalan Anda untuk semua kebutuhan pengiriman, kargo, dan penyimpanan.
      </p>
      <a
        href="#"
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-transform transform hover:scale-105"
      >
        Hubungi Kami
      </a>
    </div>
  </section>
);

// === Komponen Tentang Kami ===
const About = () => (
  <section className="py-16 md:py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="md:w-1/2">
          <img
            src="https://placehold.co/600x400/CCCCCC/000000?text=Tentang+Kami"
            alt="Tim Adviant Logistics"
            className="rounded-lg shadow-2xl w-full"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Tentang Kami</h2>
          <p className="text-cyan-600 font-semibold text-lg mb-4">PT. ADVIANT BERKAT BERSAMA</p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kami adalah perusahaan yang bergerak di bidang jasa pengiriman logistik internasional (Freight Forwarding). Dengan tim yang berpengalaman, kami berkomitmen untuk memberikan layanan yang handal, efisien, dan terpercaya untuk memenuhi segala kebutuhan logistik Anda.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Kepercayaan dan kepuasan pelanggan adalah prioritas utama kami. Kami selalu berinovasi untuk memberikan solusi logistik terbaik dengan harga yang kompetitif.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// === Komponen Layanan ===
const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 h-full">
    {icon}
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => (
  <section className="py-16 md:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Layanan Kami</h2>
        <p className="text-gray-600 mt-2">Solusi lengkap untuk kebutuhan logistik Anda.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          icon={<TruckIcon />}
          title="Domestic Freight"
          description="Layanan pengiriman darat yang cepat dan aman ke seluruh penjuru negeri."
        />
        <ServiceCard
          icon={<ShipIcon />}
          title="International Freight Forwarding"
          description="Solusi pengiriman laut dan udara global untuk ekspor dan impor barang Anda."
        />
        <ServiceCard
          icon={<WarehouseIcon />}
          title="Warehouse & Distribution"
          description="Fasilitas pergudangan modern dan sistem distribusi yang efisien."
        />
      </div>
    </div>
  </section>
);

// === Komponen Mengapa Memilih Kami ===
const WhyUs = () => (
  <section className="py-16 md:py-20 bg-gray-800 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold">Mengapa Memilih Kami?</h2>
        <p className="text-gray-400 mt-2">Keunggulan yang kami tawarkan untuk bisnis Anda.</p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="md:w-1/2 order-2 md:order-1">
            <ul className="space-y-4">
                <li className="flex items-start">
                    <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span><strong className="block">Tim Profesional:</strong> Didukung oleh tim yang ahli dan berpengalaman di bidangnya.</span>
                </li>
                <li className="flex items-start">
                    <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span><strong className="block">Jaringan Luas:</strong> Memiliki jaringan global yang memungkinkan pengiriman ke seluruh dunia.</span>
                </li>
                 <li className="flex items-start">
                    <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span><strong className="block">Harga Kompetitif:</strong> Menawarkan tarif terbaik tanpa mengurangi kualitas layanan.</span>
                </li>
            </ul>
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
            <img 
              src="https://placehold.co/600x400/374151/FFFFFF?text=Layanan+Handal"
              alt="Layanan Logistik Handal"
              className="rounded-lg shadow-2xl w-full"
            />
        </div>
      </div>
    </div>
  </section>
);


// === Komponen Footer ===
const Footer = () => (
  <footer className="bg-gray-900 text-gray-300">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-bold text-white mb-4">AdviantLogistics</h3>
          <p className="text-sm max-w-xs">
            PT. Adviant Berkat Bersama adalah solusi terpadu untuk kebutuhan logistik dan pergudangan Anda.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Tautan Cepat</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-white">Layanan</a></li>
            <li><a href="#" className="hover:text-white">Hubungi Kami</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Kontak</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: info@adviantlogistics.com</li>
            <li>Telepon: (021) 123-4567</li>
            <li>Alamat: Jl. Logistik Raya No. 1, Jakarta, Indonesia</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Ikuti Kami</h3>
          <div className="flex justify-center sm:justify-start space-x-4">
              <a href="#" className="hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
              </a>
              <a href="#" className="hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.295 1.634 4.208 3.803 4.649-.6.164-1.24.238-1.9.238-.3 0-.6-.028-.9-.085.63 1.953 2.448 3.377 4.604 3.417-1.733 1.35-3.922 2.162-6.32 2.162-.41 0-.814-.024-1.215-.07 2.23 1.434 4.872 2.27 7.734 2.27 9.284 0 14.376-7.79 14.02-14.685.982-.702 1.833-1.58 2.51-2.603z"/></svg>
              </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
        <p>&copy; 2024 PT. Adviant Berkat Bersama. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

// === Komponen Floating WhatsApp Button ===
const WhatsAppButton = () => (
    <a href="#" className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center transition-transform transform hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.905 6.314l-.992 3.622 3.624-.954zm.005-6.012c-.318-.159-.882-.44-1.018-.49a.77.77 0 0 0-.701.04c-.228.198-.381.44-.461.524-.082.082-.163.185-.244.277-.082.093-.164.194-.184.225-.021.031-.041.06-.062.092-.02.032-.04.063-.06.094s-.04.062-.06.094c-.02.031-.04.062-.06.093-.02.031-.04.062-.06.093s-.04.061-.06.093c-.02.031-.04.062-.06.093s-.04.061-.06.093c-.02.031-.04.062-.06.093s-.04.062-.06.093a.412.412 0 0 0-.05.082c-.01.01-.02.02-.03.03-.02.02-.03.04-.05.06a.858.858 0 0 0-.04.05c-.01.01-.02.02-.03.03s-.02.02-.03.03c-.01.01-.02.02-.02.03s-.02.02-.03.03a.58.58 0 0 0-.02.02c-.01.01-.01.02-.02.02s-.02.02-.02.03a.35.35 0 0 0-.01.01c-.01.01-.01.02-.02.02l-.02.02c-.01.01-.01.01-.01.02a.48.48 0 0 0 .139.669c.04.03.08.06.12.09.21.15.46.3.75.42.33.13.68.21 1.04.26 1.42.21 2.84-.28 3.84-1.12.23-.19.4-.43.52-.71.04-.1.08-.2.12-.31l.13-1.04c-.03-.02-.07-.04-.1-.06-.03-.02-.07-.04-.1-.06-.03-.02-.07-.04-.1-.06-.03-.02-.07-.04-.1-.06l-.11-.06c-.03-.02-.07-.04-.1-.06s-.07-.04-.1-.06l-.11-.06c-.03-.02-.07-.04-.1-.06s-.07-.04-.1-.06l-.11-.06c-.03-.02-.07-.04-.1-.06s-.07-.04-.1-.06l-.11-.06c-.03-.02-.07-.04-.1-.06l-.07-.04c-.03-.02-.07-.04-.1-.06l-.07-.04c-.03-.02-.07-.04-.1-.06l-.07-.04c-.03-.02-.07-.04-.1-.06l-.07-.04c-.03-.02-.07-.04-.1-.06l-.07-.04c-.03-.02-.07-.04-.1-.06l-.07-.04c-.03-.02-.07-.04-.1-.06l-.07-.04c-.03-.02-.07-.04-.1-.06l-.07-.04c-.03-.02-.07-.04-.1-.06l-.07-.04c-.03-.02-.07-.04-.1-.06-.31-.16-.31-.16-1.12-.52z"/></svg>
    </a>
);


// === Komponen Utama App ===
function App() {
  return (
    <div className="bg-gray-100 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

