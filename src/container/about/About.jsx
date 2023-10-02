import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PagesHeader from "../../component/pageHeaderContent/PagesHeader";
import { Animate } from "react-simple-animate";
import "./About.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Ankit Kumar Pandey",
  },
  {
    label: "Age",
    value: "18",
  },
  {
    label: "Address",
    value: "Garhwa,Jh,India",
  },
  {
    label: "Email",
    value: "ankitpandey62042@gmail.com",
  },
  {
    label: "Contact No",
    value:"6204265733",
  },
];

const jobSummary =
"As a front-end developer, I am responsible for building the user interface of websites and web applications. This includes everything that users see and interact with, from the layout and design to the animations and effects. I use a variety of programming languages and tools to create user-friendly and visually appealing interfaces.";

const About = () => {
  return (
    <section id="about" className="about">
      <PagesHeader
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;