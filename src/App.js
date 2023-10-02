import React from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './container/home/Home'
 import About from './container/about/About'
import Portfolio from './container/portfolio/Portfolio'
import Resume from './container/resume/Resume'
import Skills from './container/skills/Skills'
import Contact from './container/contact/Contact'
// import Navbar from './component/navbar/Navbar'
import Nav from './component/navbar/Nav'
const App = () => {
  return (
    // particles js
    <div className='App'>
       {/* <Navbar/> */}
       <Nav/>
      <div className='App_main_pages_conatiner'>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/portfolio" element={<Portfolio />} />
  <Route path="/resume" element={<Resume />} />
</Routes>
    
     </div>
    </div>
   
  ) 
}

export default App
