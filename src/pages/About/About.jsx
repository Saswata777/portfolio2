import React from 'react'
import './about.css'
import ParticlesComponent from '../../components/particles'
import pic from './self-6.jpg';
import{ useState } from 'react';
import { Radio, Timeline } from 'antd';
import Progressbar from '../../components/progressbar';

const About = () => {
    const [mode, setMode] = useState('left');
  const onChange = (e) => {
    setMode(e.target.value);
  };
  return (
  <>
        <Progressbar />
        <div id="particles-js" className=' flex flex-wrap justify-center' style={{marginTop:"65px"}}>
                    <ParticlesComponent id="particles" />
                    <div className='about w-3/5 mt-10 mb-10 flex flex-wrap' style={{color:"#EEF7FF"}}>
                        <div className='des w-1/2 text-[2vmax]'>
                            Welcome! I'm Saswata Maitra, a dynamic MERN stack developer passionate about crafting immersive user experiences. With expertise in HTML, CSS, JavaScript, React JS, Node Js, Express Js, Mongo DB, Bootstrap, Tailwind CSS, and Python, I bring a comprehensive skill set to every project.

                        </div>
                        <div className='des_pic w-1/2'>
                            <img src={pic} alt="" className=' rounded-lg'/>
                        </div>
                    </div>
                    <div className='about w-3/5 mb-10' style={{color:"#CAF4FF"}}>
                        My journey began with childhood artistry, igniting a love for UI/UX design that continues to drive my work. Alongside mastering technologies, I've honed my problem-solving prowess through LeetCode DSA challenges.

                    </div>

                    <div className='about w-3/5 mb-10' style={{color:"#CAF4FF"}}>
                        My portfolio boasts diverse projects, from captivating games like <ul>
                                                                                                <li>2D Breakout</li>
                                                                                                <li>Memory games</li> 
                                                                                                <li>Rock paper Scissors</li>  
                                                                                                <li>record-keeping systems</li> 
                                                                                                <li>Weather apps</li>
                                                                                                <li>Time managers</li>
                                                                                                <li>E-commerce platforms</li>
                                                                                        </ul>   all developed using cutting-edge JavaScript frameworks like React JS.

                    </div>

                    <div className='about w-3/5 mb-10' style={{color:"#CAF4FF"}}>
                        Currently pursuing a B.Tech in the ECE Department at Heritage Institute of Technology, Kolkata, I blend technical acumen with creative flair, evident in endeavors such as Full Stack Educonnet (HackHeritage Hackathon) and Flil Stack e-commerce solutions in MERN Stack.

                    </div>

                    <div className='about w-3/5 mb-10' style={{color:"#CAF4FF"}}>
                        Join me on a journey where innovation meets seamless functionality, creating digital experiences that resonate.

                    </div>
                    <div className='about_timeline w-3/5 mb-10' style={{backgroundColor:"rgba(0, 183, 255, 0.52)", borderRadius:"40px", color:"white"}}>
                                <div className='mt-4 ms-10'>Time Line of My Career</div>
                                <Radio.Group
                                    className='mt-4 ms-10'
                                    onChange={onChange}
                                    value={mode}
                                    style={{
                                    marginBottom: 20,
                                    color:"white"
                                    }
                                }
                                >
                                    <Radio value="left">Left</Radio>
                                    <Radio value="right">Right</Radio>
                                    <Radio value="alternate">Alternate</Radio>
                                </Radio.Group>
                                <Timeline
                                    mode={mode}
                                    style={{color:"white"}}
                                    items={[
                                    {
                                        label: '2019',
                                        children: '10th Board(WBBSE), Total:89%',
                                    },
                                    {
                                        label: '2021',
                                        children: '12th Board(WBCHSE), Total:92%',
                                    },
                                    {
                                        label: '2021',
                                        children: 'Join Heritage Institute of Technology, ECE',
                                    },
                                    {
                                        children: 'Learning Basic Programming and Academic subjects',
                                    },
                                    {
                                        label: '2022',
                                        children: 'Exploring Different Technology',
                                    },
                                    {
                                        label: '2022, August',
                                        children: 'Start Learning Web development',
                                    },
                                    {
                                        label: '2023',
                                        children: 'Start Buliding Projects on FrontEnd',
                                    },
                                    {
                                        label: '2023, September',
                                        children: 'Participate in Heack Heritage Hackatone, Selected among top 30 teams',
                                    },
                                    {
                                        label: '2023, December',
                                        children: 'Start Learning Backend',
                                    },
                                    {
                                        label: '2024',
                                        children: 'Start Learning Machine Learning',
                                    },
                                    {
                                        label: '2024, February',
                                        children: 'Start building Projects',
                                    },
                                    {
                                        label:'2024',
                                        children:'Taking Final Year Project based on Deep Learing',

                                    },
                                    {
                                        children: 'Topic: Find and  compare methods to identify features for early detection of diabetic retinopathy and glaucoma',
                                    }
                                    ]}
                                />
                    </div>
        </div>
    </>
  )
}

export default About

