import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { Reveal } from "./Animations/reveal";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <Reveal><h3 className='text-white text-[24px] font-bold'>{experience.title}</h3></Reveal>
        <Reveal>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </Reveal>
      </div>

      <Reveal>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </Reveal>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div 
        variants={textVariant()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.5 }}
        className="flex items-center flex-col"
      >
        <Reveal>
          <p className={`${styles.sectionSubText} text-center`}>
            What I have done so far
          </p>
        </Reveal>
        <Reveal>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Work Experience.
          </h2>
        </Reveal>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
