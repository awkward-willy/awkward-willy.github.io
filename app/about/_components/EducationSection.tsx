"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Constants from "../_constants";
import Image from "next/image";

const EducationSection = () => {
  return (
    <>
      <h1 className="font-extrabold text-2xl sm:text-3xl">Education</h1>
      <div className="m-3">
        <VerticalTimeline lineColor="#9DA6B7" animate={true}>
          {Constants.education.map((data, index) => {
            return (
              <VerticalTimelineElement
                key={index}
                visible={true}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#C1CADA", color: "#000" }}
                contentArrowStyle={{
                  borderRight: "7px solid #C1CADA",
                }}
                date={data.time}
                iconStyle={{
                  background: "#C1CADA",
                  color: "#000",
                }}
                textClassName="text-black"
                icon={
                  <Image
                    src={data.icon}
                    alt="icon"
                    width={45}
                    height={45}
                    className="rounded-xl select-none"
                  />
                }
                iconClassName="flex items-center justify-center"
              >
                <h1 className="vertical-timeline-element-title text-xl font-medium">
                  {data.school}
                </h1>
                <h3 className="vertical-timeline-element-subtitle">
                  {data.department}
                </h3>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default EducationSection;
