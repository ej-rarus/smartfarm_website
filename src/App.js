import { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import FarmsterIntro from './pages/FarmsterIntro';
import Project from './pages/Project';
import SmartFarm from './pages/SmartFarm';
import OfficeFarm from './pages/OfficeFarm';
import MossFarm from './pages/MossFarm';
import HomeDevice from './pages/HomeDevice';

// components
import Nav from './components/Nav';
import Menu from './components/Menu';
import Weather from './components/Weather';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function App() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className='App'>
      <BrowserRouter>
        <div className="nav-fixed-container">
          <Nav ison={isOn} setIsOn={setIsOn} />
        </div>
        <Menu ison={isOn} setIsOn={setIsOn} />
        <div className='App-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus/1" element={<FarmsterIntro />} />
            <Route path="/aboutus/2" element={<Project />} />
            <Route path="/aboutus/3" element={<Contact />} />
            <Route path="/smartfarm/" element={<SmartFarm />} />
            <Route path="/smartfarm/officefarm" element={<OfficeFarm />} />
            <Route path="/smartfarm/mossfarm" element={<MossFarm />} />
            <Route path="/smartfarm/homedevice" element={<HomeDevice />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
