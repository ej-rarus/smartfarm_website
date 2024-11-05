import { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Mypage from './pages/Mypage';

//component
import Nav from './components/Nav';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>

        <Routes>
          <Route path="/" element={<Home />} /> {/* Home으로 이동 */}
          <Route path="/about" element={<About />}/> {/* localhost.3000/About 으로 이동 */}
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Mypage" element={<Mypage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
