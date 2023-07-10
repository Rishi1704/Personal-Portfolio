import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { Reveal } from './Animations/reveal'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <Reveal delay={0.25 * index}>
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </Reveal>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <Reveal>
          <p className={`${styles.sectionSubText}`}>Introduction</p>
        </Reveal>
        <Reveal>
          <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
        </Reveal>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <Reveal>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae perspiciatis earum, quas ea obcaecati eligendi asperiores ipsa placeat non molestiae corporis minima modi! Quod, odit. Ea harum ipsam sed sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic autem modi odit ea accusantium quos sunt rerum tempora recusandae voluptate maxime incidunt at placeat harum vitae tempore quibusdam, similique soluta.
        </Reveal>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");