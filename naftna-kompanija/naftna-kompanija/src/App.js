
import React from 'react';
import './styles.css';
import Header from './components/Header';
import Slideshow from './components/Slideshow';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GoogleMap from './components/GoogleMap';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="home">
          <h1>Welcome to Our Oil Company</h1>
          <Slideshow />
        </section>
        <About />
        <Services />
        <Team />
        <Contact />
      </main>
      <Footer />
      <GoogleMap />
    </div>
  );
}

export default App;
