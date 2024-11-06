import { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Mypage from './pages/Mypage';

// components
import Nav from './components/Nav';
import Menu from './components/Menu';
import Weather from './components/Weather';
import Footer from './components/Footer';

function App() {
  const [isOn, setIsOn] = useState(false); // 메뉴 열림 상태를 boolean으로 설정

  return (
    <div className='App'>
      <BrowserRouter>
        <Nav ison={isOn} setIsOn={setIsOn} />
        <Menu ison={isOn} setIsOn={setIsOn} /> {/* 메뉴 컴포넌트에 상태 전달 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Mypage" element={<Mypage />} />
        </Routes>
        <Weather/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
