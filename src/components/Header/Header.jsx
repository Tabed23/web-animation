import React, { useState } from "react";
import logo from '../../assets/images/NJ.svg';
import './Header.css';
import { Link } from 'react-router-dom'


const Header = (props) => {
  const [work, setwork] = useState(false);
  const [about, setabout] = useState(false);
  const [play, setplay] = useState(false);

  const navlinkEnter = () => props.setCursorVar("navlink");
  const navLinkLeave = () => props.setCursorVar("default");

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
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"  onMouseOver={()=> setwork(true)} onMouseOut={()=> setwork(false)}>
              <a className="nav-link" aria-current="page" href="/#work" onMouseEnter={navlinkEnter} onMouseLeave={navLinkLeave} onClick={()=> setwork(false)}>
                WORK
              </a>
            </li>
            <li className="nav-item" onMouseOver={()=> setabout(true)} onMouseOut={()=> setabout(false)}>
              <Link className="nav-link" to={"/about"} onMouseEnter={navlinkEnter} onMouseLeave={navLinkLeave} onClick={()=> setabout(false)}>
                ABOUT
              </Link>
            </li>
            <li className="nav-item " onMouseOver={()=> setplay(true)} onMouseOut={()=> setplay(false)}>
              <Link className="nav-link" to={"/play"} onMouseEnter={navlinkEnter} onMouseLeave={navLinkLeave} onClick={()=> setplay(false)}>
                PLAY
              </Link>
            </li>
          </ul>
        </div>
        
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
