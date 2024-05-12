import React from 'react'
import './skill.css'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { SiCanva } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { TbBrandCpp } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Progressbar from '../../components/progressbar';





const frontend = [
  {
    name:"HTML",
    icon: < FaHtml5/>
  },
  {
    name:"CSS",
    icon:<FaCss3Alt />
  },
  {
    name:"JavaScript",
    icon:<SiJavascript />
  },
  {
    name:"Bootsrap",
    icon:<FaBootstrap />
  },
  {
    name:"React Js",
    icon:<GrReactjs />
  },
  {
    name:"Tailwind css",
    icon:<SiTailwindcss />
  },
  {
    name:"Next Js",
    icon:<SiNextdotjs />
  },
]

const backend = [
  {
    name:"Node Js",
    icon:<FaNodeJs />
  },
  {
    name:"Express Js",
    icon:<SiExpress />
  },
  {
    name:"Mongo Db",
    icon:<SiMongodb />
  },
  {
    name:"Post man",
    icon:<SiPostman />
  }
]

const design = [
  {
    name:"Figma",
    icon:<FiFigma />
  },
  {
    name:"Canva",
    icon:<SiCanva />
  }
]

const others = [
  {
    name:"Python",
    icon:<FaPython />
  },
  {
    name:"SQL",
    icon:<GrMysql />
  },
  {
    name:"C++",
    icon:<TbBrandCpp />
  },
  {
    name:"Git",
    icon:<FaGitAlt />
  },
  {
    name:"Git Hub",
    icon:<FaGithub />
  }
]






const Skill = () => {
  return (
    <>
    <Progressbar />
    <div className='skillContainer' style={{marginTop:"65px"}}>
        <div className='frontend' data-aos="zoom-in">
          <div className='frontendHeading'>Front-End</div>
          <div className='flex flex-wrap frontendItemContainer'>
            {frontend.map((item, index) => (
              <div key={index} className='frontendItem'>
                {item.icon}
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='backend' data-aos="zoom-in">
          <div className='backendHeading'>Backend-End</div>
          <div className='flex flex-wrap backendItemContainer'>
            {backend.map((item, index) => (
              <div key={index} className='backendItem'>
                {item.icon}
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='design' data-aos="zoom-in">
          <div className='designHeading'>Design</div>
          <div className='flex flex-wrap designItemContainer'>
            {design.map((item, index) => (
              <div key={index} className='designItem'>
                {item.icon}
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='others' data-aos="zoom-in">
          <div className='othersHeading'>Others</div>
          <div className='flex flex-wrap othersItemContainer'>
            {others.map((item, index) => (
              <div key={index} className='othersItem'>
                {item.icon}
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
    </div>
    </>
  )
}

export default Skill