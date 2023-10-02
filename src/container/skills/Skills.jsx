import React from "react";
import PagesHeader from "../../component/pageHeaderContent/PagesHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { skillsData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./Skill.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PagesHeader headerText="Skills" icon={<BsInfoCircleFill size={40} />} />

      <div className="skills_wrapper">
        {skillsData.map((item, i) => {
          return (
            <div key={i} className="skills_wrapper_inner_content">
              <Animate
                play
                duration={1}
                delay={0.3}
                start={{
                  transform: "translateX(-200px)",
                }}
                end={{
                  transform: "translateX(0px)",
                }}
              >
                <h3 className="skills_wrapper_inner_content_category_text">
                  {item.label}
                </h3>
                <div className="skills_wrapper_inner_content_progressbar">
                  {item.data.map((skillsItem, j) => {
                    return (
                      <AnimateKeyframes
                        play
                        duration={1}
                        keyframes={["opacity:1", "opacity:0"]}
                        iterationCount="1"
                      >
                        <div key={j} className="progres_bar_wrapper">
                          <p>{skillsItem.skillsName}</p>
                          <Line
                            percent={skillsItem.percentage}
                            strokeWidth={2}
                            strokeColor="var(--yellow-theme-main-color)"
                            trailWidth={2}
                            strokeLinecap="square"
                          />
                        </div>
                      </AnimateKeyframes>
                    );
                  })}
                </div>
              </Animate>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
