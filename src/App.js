import { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Mypage from './pages/Mypage';

// components
import Nav from './components/Nav';
import Menu from './components/Menu';
import Weather from './components/Weather';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function App() {
  const [isOn, setIsOn] = useState(false); // 메뉴 열림 상태를 boolean으로 설정

  return (
    <div className='App'>
      <BrowserRouter>
        <Nav ison={isOn} setIsOn={setIsOn} />
        <Menu ison={isOn} setIsOn={setIsOn} /> {/* 메뉴 컴포넌트에 상태 전달 */}
        <div className='App-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Mypage" element={<Mypage />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
