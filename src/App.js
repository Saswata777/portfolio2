
import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom'
import NavBar from './components/navbar';
import About from './pages/About/About';
import Contact from './pages/contact/contact';
import Skill from './pages/skill/Skill';
import Home from './pages/Home/home';
import Project from './pages/projects/projects';




function App() {
  
  return (
    <>

      <HashRouter>
            <NavBar/>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="skill" element={<Skill />} />
            <Route path="project" element={<Project />} />
            </Routes>
      </HashRouter>
    </>
  );
}

export default App;
