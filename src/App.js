import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Precios from './pages/precios';
import Portafolio from './pages/portafolio';
import Nosotros from './pages/nosotros';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="App">
      <Header />
      <WhatsAppButton/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/precios" element={<Precios />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
