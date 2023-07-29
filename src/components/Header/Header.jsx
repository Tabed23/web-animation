import React, { useState } from "react";
import logo from '../../assets/images/NJ.svg';
import './Header.css';
import Cursor from "react-special-cursor";
import { Link } from 'react-router-dom'

const Header = () => {
  const [work, setwork] = useState(false);
  const [about, setabout] = useState(false);
  const [play, setplay] = useState(false);

    

  return (
    <>
    
      <nav className="navbar navbar-expand-lg" id="nav">
      <div className="container-fluid">
        <Link className="navbar-brand" to={'/'}>
          <img src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Cursor color="orange" hoverClasses={[
            { classNameOfTargetElement: "head", classNameOfStyle: "head-hover" }
          ]}>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item " onMouseOver={()=> setwork(!work)} onMouseOut={()=> setwork(!work)}>
              <a className="nav-link head" aria-current="page" href="#">
                WORK
              </a>
            </li>
            <li className="nav-item " onMouseOver={()=> setabout(!about)} onMouseOut={()=> setabout(!about)}>
              <Link className="nav-link head" to={"/about"}>
                ABOUT
              </Link>
            </li>
            <li className="nav-item " onMouseOver={()=> setplay(!play)} onMouseOut={()=> setplay(!play)}>
              <Link className="nav-link head" to={"/play"}>
                PLAY
              </Link>
            </li>
          </ul>
        </div>
        </Cursor>
      </div>
      </nav>
      
      {
        work ? 
        <div class="marquee home-marquee" >
          <span>WORK&nbsp;</span>
          <span>WORK&nbsp;</span>
          <span>WORK&nbsp;</span>
          <span>WORK&nbsp;</span>
          <span>WORK&nbsp;</span>
          <span>WORK&nbsp;</span>
          <span>WORK&nbsp;</span>
          <span>WORK&nbsp;</span>
          <span>WORK&nbsp;</span>
        </div> : ''
      }
       {
        about ?<div class="marquee about-marquee">
          <span>About&nbsp;</span>
          <span>About&nbsp;</span>
          <span>About&nbsp;</span>
          <span>About&nbsp;</span>
          <span>About&nbsp;</span>
          <span>About&nbsp;</span>
          <span>About&nbsp;</span>
          <span>About&nbsp;</span>
          <span>About&nbsp;</span>
        </div>  : ''
       }
        {
          play ? <div class="marquee play-marquee">
          <span>Play&nbsp;</span>
          <span>Play&nbsp;</span>
          <span>Play&nbsp;</span>
          <span>Play&nbsp;</span>
          <span>Play&nbsp;</span>
          <span>Play&nbsp;</span>
          <span>Play&nbsp;</span>
          <span>Play&nbsp;</span>
          <span>Play&nbsp;</span>
        </div>:''
        }
       
    </>
    
  );
};

export default Header;
