import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../style'
import { ComputersCanvas } from './canvas'
import { Reveal } from './Animations/reveal'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto translate-y-[-70px] bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-auto items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#0aff9d]' />
          <div className='w-1 sm:h-80 h-40 neon-green-gradient' />
        </div>

        <div>
          <Reveal>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#0aff9d]'>Rishi</span>.</h1>
          </Reveal>
          <Reveal>
            <p className={`${styles.heroSubText} mt-2 text-while-100`}>I a Full Stack Game Developer, a Programmer,
              <br className='sm:block hidden' />a Frontend Web Developer and a Hockey Player</p>
          </Reveal>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-24 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero