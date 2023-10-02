import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
const Home = () => {
const navigate = useNavigate();
  const contactMePages = () =>{
     navigate('/contact')
  }
 const ResumeMePages = ()=>{
  navigate('/resume')
 }
  return (
    <section id="home" className="home">
      <div className="home_text-wrapper">
        <h1>
          Hello, I'm Ankit Pandey
          <br />
          React Js Developer
        </h1>
        <div className="home_contact_me">
        <button onClick={contactMePages}>HireMe</button>
        <button className="home_contact_me_btn-1" onClick={ResumeMePages}>Resume</button>
      </div>
      </div>
      <Animate
      play
      duration={1.5}
      delay={1}
      start={{
        transform:"translateY(550px)"
      }}
      end={{
        transform:'translateX(0px)'
      }}
      >
      
      </Animate>
    </section>
  );
}

export default Home;
