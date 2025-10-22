import React from 'react';
import MutiaraBundaHero from '../components/MutiaraBundaHero';
import MutiaraBundaMarquee from '../components/MutiaraBundaMarquee';
import MutiaraBundaInformationSection from '../components/MutiaraBundaInformationSection';
import MutiaraBundaDestinations from '../components/MutiaraBundaDestinations'; // <-- 1. Impor

const MutiaraBundaHome = () => {
  return (
    <>
      <MutiaraBundaHero />
      <MutiaraBundaMarquee />
      <MutiaraBundaInformationSection />
      <MutiaraBundaDestinations /> {/* <-- 2. Tambahkan di sini */}
    </>
  );
};

export default MutiaraBundaHome;