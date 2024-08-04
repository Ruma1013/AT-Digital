import React from 'react'
import Hero from '../Components/Hero/Hero';
import About from '../Components/AboutUS/About';
import FAQ from '../Components/FAQ/FAQ';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  return (
    <div>
     <section id="hero">
        <Hero />
      </section>
      <section id="aboutus">
        <About />
      </section>
      <section id="FAQ">
        <FAQ />
      </section>
      <Footer />
    </div>
  )
}

export default Home;
