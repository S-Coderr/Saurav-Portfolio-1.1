import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Main';
import Social from './components/SocialLinks/Social';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Certificate from './components/Certificate/Certificate';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Social />
      <About />
      <Skills />
      <Experience />
      <Certificate />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
