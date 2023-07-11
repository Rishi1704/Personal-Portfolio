import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { SlideBottom } from './Animations/slide-bottom'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <>
      <motion.div className='sticky top-0 z-[99]'
        variants={{
          hidden: { translateY: "-80px" },
          visible: { translateY: "0px" }
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.5,
          ease: "easeIn"
        }}
      >
        <nav className='pointer-events-auto cursor-auto h-[70px] flex items-center justify-between
          bg-[#12121240] backdrop-blur-md w-full px-2 xs:px-4 sm:px-9 
          shadow-[0_50px_100px_-20px_rgba(250,250,193,0.25),0_30px_60px_-30px_rgba(255,255,255,0.3)]'>
          <div>
            <ul className='h-full grid grid-cols-[repeat(5,1fr)] justify-center items-center'>
              <SlideBottom delay={0.25}>
                <li className='px-2 sm:px-3 text-[15px] sm:text-[20px] hover:scale-125 transition-all duration-300 flex justify-center'>
                  <Link to={"https://www.instagram.com/rishi_agrawal_1704/"} target={'_blank'} rel="noreferrer">
                    <FaInstagram className='hover:text-[#0aff9d] text-[#ebecf3] opacity-50 hover:opacity-100' />
                  </Link>
                </li>
              </SlideBottom>

              <SlideBottom delay={0.5}>
                <li className='px-2 sm:px-3 text-[15px] sm:text-[20px] hover:scale-125 transition-all duration-300 flex justify-center'>
                  <Link to={"https://www.facebook.com/rishi.agrawal.332"} target={'_blank'} rel="noreferrer">
                    <FaFacebook className='hover:text-[#0aff9d] text-[#ebecf3] opacity-50 hover:opacity-100' />
                  </Link>
                </li>
              </SlideBottom>

              <SlideBottom delay={0.75}>
                <li className='px-2 sm:px-3 text-[15px] sm:text-[20px] hover:scale-125 transition-all duration-300 flex justify-center'>
                  <Link to={"https://www.linkedin.com/in/rishi-rakesh-agrawal/"} target={'_blank'} rel="noreferrer">
                    <FaLinkedin className='hover:text-[#0aff9d] text-[#ebecf3] opacity-50 hover:opacity-100' />
                  </Link>
                </li>
              </SlideBottom>

              <SlideBottom delay={1}>
                <li className='px-2 sm:px-3 text-[15px] sm:text-[20px] hover:scale-125 transition-all duration-300 flex justify-center'>
                  <Link to={"https://github.com/Rishi1704"} target={'_blank'} rel="noreferrer">
                    <FaGithub className='hover:text-[#0aff9d] text-[#ebecf3] opacity-50 hover:opacity-100' />
                  </Link>
                </li>
              </SlideBottom>

              <SlideBottom delay={1.25}>
                <li className='px-2 sm:px-3 text-[15px] sm:text-[20px] hover:scale-125 transition-all duration-300 flex justify-center'>
                  <Link to={"mailto:rishira21@iitk.ac.in"} target={'_blank'} rel="noreferrer">
                    <SiGmail className='hover:text-[#0aff9d] text-[#ebecf3] opacity-50 hover:opacity-100' />
                  </Link>
                </li>
              </SlideBottom>
            </ul>
          </div>

          <Link to={"/~rishira21/resume.pdf"}>
            <SlideBottom delay={0.25}>
              <div className='relative overflow-hidden h-full w-full border-solid border-[1px] border-[#0aff9d] rounded text-lg tracking-wider font-normal px-2 xs:px-4 sm:px-8 py-1 flex justify-center items-center transition-all duration-300 text-[#0aff9d] before:absolute before:-z-10 before:h-full before:rounded before:w-full before:right-full before:bottom-full before:bg-[#0aff9d] before:transition-all before:ease-linear before:duration-[200ms] before:delay-0 hover:before:right-0 hover:before:bottom-0 hover:text-white'>
                Resume
              </div>
            </SlideBottom>
          </Link>
        </nav>
      </motion.div>
    </>
  )
}

export default Navbar