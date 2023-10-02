import React from "react";
import PagesHeader from "../../component/pageHeaderContent/PagesHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "./utils";
import "./Resume.scss";
import { MdWork } from "react-icons/md";
const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PagesHeader headerText="Resume" icon={<BsInfoCircleFill size={40} />} />

      <div className="timeline">
        <div className="timeline_education">
          <h3 className="timeline_education_header_text">Education</h3>
          <VerticalTimeline layout="1-column" lineColor="yellow">
            {data.education.map((item, i) => {
              return (
                <VerticalTimelineElement
                  key={i}
                  className="timeline_education_vertical_timeline_element"
                  contentStyle={{
                    background: "none",
                    color: "var(--yellow-theme-sub-text-color)",
                    border: "1.5px solid var(--yellow-theme-main-color)",
                  }}
                  icon={<MdWork />}
                  iconStyle={{
                    background: "#181818",
                    color: "var(--yellow-theme-main-color)",
                  }}
                >
                  <div className="vertical_timeline_element_title_wrapper">
                    <h3>{item.title}</h3>
                    <h4>{item.subTitle}</h4>
                  </div>
                  <p>{item.desc}</p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
        {/* <div className="timeline_education">
          <h3 className="timeline_education_header_text">Education</h3>
          <VerticalTimeline layout="1-column" lineColor="yellow">
            {data.education.map((item, i) => {
              return (
                <VerticalTimelineElement
                  key={i}
                  className="timeline_education_vertical_timeline_element"
                  contentStyle={{
                    background: "none",
                    color: "var(--yellow-theme-sub-text-color)",
                    border: "1.5px solid var(--yellow-theme-main-color)",
                  }}
                  icon={<MdWork />}
                  iconStyle={{
                    background: "#181818",
                    color: "var(--yellow-theme-main-color)",
                  }}
                >
                  <div className="vertical_timeline_element_title_wrapper">
                    <h3>{item.title}</h3>
                    <h4>{item.subTitle}</h4>
                  </div>
                  <p>{item.desc}</p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div> */}
      </div>
    </section>
  );
};

export default Resume;
