import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Recognition from '../components/Recognition';
import Vision from '../components/Vision';
import FocusAreas from '../components/FocusAreas';
import Ecosystem from '../components/Ecosystem';
import Leadership from '../components/Leadership';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Recognition />
      <Vision />
      <FocusAreas />
      <Ecosystem />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
