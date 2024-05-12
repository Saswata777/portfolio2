
import React, { useEffect } from 'react'
import { useState } from 'react'

const Progressbar = () => {
    const[scrollPercentage, setScrollPercentage]= useState(0);
    useEffect(() => {

        const handleScroll = ()=>{
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;

            const scrollPercent = (scrollY / (documentHeight-windowHeight))*100;
            setScrollPercentage(scrollPercent);
        }

        window.addEventListener("scroll", handleScroll);
        return()=>{
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])
  return (
    <div id='progress-container' style={{height:"65px" , width:"100%", backgroundColor:"#1679AB", position:"fixed", left:0, top:0}}>
        <div className='progress-fill' style={{height:"100%",width:`${scrollPercentage}%`,  backgroundColor:"white"}}></div>
    </div>
  )
}

export default Progressbar