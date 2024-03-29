"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Constants from "../_constants";
import Image from "next/image";
import Title from "@/app/_components/Title";

const EducationSection = () => {
  return (
    <>
      <Title content="Education" />
      <div className="m-3">
        <VerticalTimeline
          lineColor="#9DA6B7"
          animate={true}
          layout="1-column-left"
          className="!ml-0"
        >
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
                <h2 className="vertical-timeline-element-subtitle">
                  {data.department}
                </h2>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default EducationSection;
