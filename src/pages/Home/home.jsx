import React from 'react'
import './home.css'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Image from 'next/image';
import portfolioimg from './portfolio_image.png'
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { motion } from "framer-motion";



const pdf_file_url = "https://Saswata777.github.io/Portfolio2/Frontend_Intern.pdf";


const Home = () => {
 
  

  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
  
    // Add event listener for error handling
    aTag.addEventListener('error', () => {
      console.error('Error downloading file:', url);
    });
  
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  

  return (
    <div className='home w-full bg-slate-300 flex mt-10' >
      <div className='bio w-1/2 ps-10' style={{background:"#1679AB"}}>
        {/* Basic Bio */}
        <div className='w-3/4 h-2/4 bg-green-200 mt-10 rounded-lg'>
              <motion.div 
                initial={{opacity:0,x:-10}}
                animate={{opacity:1, x:0}}
                transition={{duration:1}}
              className='hey ps-3' style={{fontSize:"2vmax", color:"#074173"}} >Hey</motion.div>
              <motion.div
                initial={{opacity:0,x:-10}}
                animate={{opacity:1, x:0}}
                transition={{duration:1}}
                 className='saswata ps-3' style={{fontSize:"4vmax", color:"#074173"}}>I am Saswata</motion.div>
              <motion.div 
                initial={{opacity:0,x:-10}}
                animate={{opacity:1, x:0}}
                transition={{duration:1}}
              className=' ps-3'> <span style={{fontSize:"3vmax", color:"#074173"}}>MERN</span> Stck Developer</motion.div>
              <motion.p
                initial={{opacity:0,x:-10}}
                animate={{opacity:1, x:0}}
                transition={{duration:1}}
              className=' ps-3 pe-3' style={{color:"#074173"}}>I am a developer who is Passionate and curious about the Modern World Technology. Web and Machine Learning is my field of Interest. </motion.p>
        </div>
        <button className='mt-4 ps-2 pe-2 pt-1 pb-1 bg-[#C5FF95] rounded-xl flex' onClick={()=>{downloadFileAtURL(pdf_file_url)}}>Dounload CV <MdOutlineDownloadForOffline style={{marginLeft:"1vmax", marginRight:"1vmax",transform:"scale(1.5)" }} color='black'/></button>
      </div>

      <div  className='image w-1/2 bg-slate-50 flex justify-center'>
        <motion.div 
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{
           duration: 0.3,
           ease: [0, 0.71, 0.2, 1.01],
           scale: {
             type: "spring",
             damping: 5,
             stiffness: 100,
             restDelta: 0.001
           }
         }}
        className="w-1/2 h-4/6 mt-10">
            <img  src={portfolioimg} alt="Portfolio"  layout="responsive" style={{borderRadius:"30%"}}/>
        </motion.div>
      </div>
    </div>
  )
}

export default Home



    
