
import React from "react";
// import { BsMoonStars } from "react-icons/bs";

import {Link, NavLink } from 'react-router-dom'
import './nav.css'
import { useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


  


const NavBar = () => {

 

  const [toggle, setToggle] = useState(0);
  // const [transition, setTransition] = useState(false);
  const handleToggle = ()=>{
      if(toggle === 0){
        setToggle(150);
      }
      else{
        setToggle(0);
      }
  }

  const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
  return (
    <>
      <nav className="flex navbar" style={{backgroundColor:"#074173", height:"60px"}} >
        <div className="logo flex items-center flex-shrink-0 text-white">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            color="#C5FF95"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <Link className="logo_name" to="/" style={{textDecoration:"none"}}>
            <span className="font-semibold text-xl tracking-tight" style={{color:"#C5FF95"}} >Saswata</span>
          </Link>
        </div>
        <div className="nav_menu">
          <div className="menu  mt-3 mb-3" style={{backgroundColor:"#1679AB", height:`${toggle}px`}}>
              <NavLink to="/about"  className="text-slate-50 hover:text-[#2DCCB8] mr-10 p-1 no-underline" onClick={() => handleLinkClick('about')} style={{ color: activeLink === 'about' ? '#2DCCB8' : '' }}>About</NavLink>
              <NavLink to="/skill"  className="text-slate-50 hover:text-[#2DCCB8] mr-10 p-1 no-underline" onClick={() => handleLinkClick('skill')} style={{ color: activeLink === 'skill' ? '#2DCCB8' : '' }}> Skill</NavLink>
              <NavLink to="/project"  className="text-slate-50 hover:text-[#2DCCB8] mr-10 p-1 no-underline" onClick={() => handleLinkClick('project')} style={{ color: activeLink === 'project' ? '#2DCCB8' : '' }}>Projects</NavLink>
              <NavLink to="/contact" className="text-slate-50 hover:text-[#2DCCB8] mr-10 p-1 no-underline" onClick={() => handleLinkClick('contact')} style={{ color: activeLink === 'contact' ? '#2DCCB8' : '' }}>Contact</NavLink>
          </div>
                <div className="menu_sm">
                  <button className="menu_button flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" onClick={()=>{handleToggle()}}>
                    <svg
                      className="fill-current h-3 w-3"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Menu</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                  </button>
                </div>
        </div>
          <div className="mode flex">
                <a href="https://github.com/Saswata777"> <IoLogoGithub  className="mode_i text-2xl ml-4 text-slate-50 mt-4 hover:text-[#2DCCB8]"/> </a> 
                <a href="https://www.linkedin.com/in/saswata-maitra/"> <FaLinkedin  className="mode_i ml-4 text-2xl text-slate-50 mt-4 hover:text-[#2DCCB8]"/></a>
                <a href="https://www.instagram.com/saswata_mac/"> <FaInstagram  className="mode_i ml-4 text-2xl text-slate-50 mt-4 hover:text-[#2DCCB8]"/></a>
          </div>
      </nav>
      

    </>
  );
};

export default NavBar;


