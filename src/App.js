import './App.css';
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { Routes , Route} from 'react-router-dom'
import About from './pages/About/About';
import Play from './pages/Play/Play';
import Govenda from './pages/Govenda/Govenda';
import Gpt from './pages/Gpt/Gpt';
import Davis from './pages/Davis/Davis';
import Footer from './components/Footer/Footer';

import { motion } from "framer-motion"

function App() {
  const [mousePos, setMousepos] = useState({
    x: 0,
    y: 0
  })
  
  const [cursorVar, setCursorVar] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
        setMousepos({
          x: e.clientX,
          y: e.clientY
        })
    }
    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)

    }
  },[])

  const variant ={
    default: {
      x: mousePos.x - 16,
      y: mousePos.y - 16
    },
    navlink: {
      x: mousePos.x - 32,
      y: mousePos.y - 32,
      width: 64,
      height:64,
      backgroundColor: 'white'
    },
    homeimg: {
      x: mousePos.x - 32,
      y: mousePos.y - 16,
      width: 50,
      height:'auto',
      fontSize: '16px',
      borderRadius: '16px'
    }
  }

  return (
    
      <>
        <motion.div animate={cursorVar} variants={variant} className="cursor">view</motion.div>

          <Header setCursorVar={setCursorVar}/>
          <Routes>
            <Route exact path='/' element={<Home setCursorVar={setCursorVar}/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/play' element={<Play/>} />
            <Route exact path='/govenda' element={<Govenda/>} />
            <Route exact path='/gpt' element={<Gpt />} />
            <Route exact path='/davis' element={<Davis />} />

          </Routes>
          <Footer />
      </>
  );
}

export default App;
