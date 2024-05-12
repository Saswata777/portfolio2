import React from 'react'
import { Card } from 'antd';
import weather from './thumbnail/weather.png';
import educonnect from './thumbnail/Educonnect.png';
import portfolio from './thumbnail/portfolio1.0.png';
import todolist from './thumbnail/todo list.png';
import pomodoro from './thumbnail/pomodoro thumb.png';
import ecomm from './thumbnail/ecomm.png'
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Progressbar from '../../components/progressbar';



const { Meta } = Card;

const projects = [
        {
          Name: "Weather App",
          Thubnail: weather,
          Description: "TechStack: React.js, API utilization: OpenWeatherMap API, Functionality: Real-time weather data, temperature, location, current date and time, weather conditions, humidity, pressure, wind speed, and cloudiness.",
          Link: "https://saswata777.github.io/Weather-App/",
          Github: "https://github.com/Saswata777/Weather-App"
        },
        {
            Name:"EduConnect",
            Thubnail: educonnect,
            Description:"It is a Project Management Web App. Here Students can upload Projects as well as view others Project.It has Student Dashboard as well as college Dashboard",
            Link:"https://edu-connect-jade.vercel.app/",
            Github:"https://github.com/Saswata777/EduConnect"
        },
        {
            Name:"Time Manager",
            Thubnail: pomodoro,
            Description:"This is a Time Management Web App built using React JS. It offers three main sections to help you manage your time effectively. It has Pomodoro clock, Timer clock, StopWatch",
            Link:"https://saswata777.github.io/Time-Manager/",
            Github:"https://github.com/Saswata777/Time-Manager"
        },
        {
            Name:"Todo List",
            Thubnail: todolist,
            Description:"This Web App built using React JS.",
            Link:"https://saswata777.github.io/To-Do-List/",
            Github:"https://github.com/Saswata777/To-Do-List/"
        },
        {
            Name:"Ecommerce",
            Thubnail: ecomm,
            Description:"This Web App built using React JS. It has features: Filter products,Search option, Add to Cart Operation",
            Link:"https://saswata777.github.io/Ecommerce-2/",
            Github:"https://github.com/Saswata777/Ecommerce-2/"
        },
        {
            Name:"Portfolio 1.0",
            Thubnail: portfolio,
            Description:"I built this Protfolio website in the begining of my webdevelopment Journey using React. ",
            Link:"https://saswata-portfolio.onrender.com/",
            Github:"https://github.com/Saswata777/Portfolio"
        },


]

const Project = () => {
  return (
    <>
    <Progressbar />
    <div className='mt-10' style={{backgroundColor:"#1679AB"}}>
        <div className=' w-11/12' >
          <div className='flex flex-wrap justify-center' >
            {projects.map((item, index) => (
            <>
              <div key={index} className='ms-10 mt-10 mb-5' style={{zIndex:"0"}}>
                    <Card
                        hoverable
                        style={{
                        width: "30vmax",
                        }}
                        cover={<img alt="example" src={item.Thubnail} />}
                    >
                        <Meta title={item.Name} description={item.Description} />
                        <div className=' rounded-lg flex p-4'>
                           <a href={item.Link}> <FaLink className='me-3' /></a>
                           <a href={item.Github}><FaGithub className='me-3'/></a>
                        </div>
                    </Card>
              </div>

            </>

            ))}
          </div>
        </div>
    </div>
    </>
  )
}

export default Project;

// import ReactDOM from 'react-dom';



// ReactDOM.createRoot(mountNode).render(<ComponentDemo />);

