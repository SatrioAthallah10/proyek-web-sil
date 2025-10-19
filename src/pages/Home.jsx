import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import InformationSection from '../components/InformationSection';
import ClientTicker from '../components/ClientTicker';
import Destinations from '../components/Destinations';

const Home = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <InformationSection />
      <Destinations />
      <ClientTicker />
    </>
  );
};

export default Home;