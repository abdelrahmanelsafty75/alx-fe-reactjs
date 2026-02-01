import './App.css'
import React from "react";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App
