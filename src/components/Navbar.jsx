import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { SlideBottom } from './slide-bottom'
import { motion } from 'framer-motion'
// import { GiHamburgerMenu } from 'react-icons/gi'


const Navbar = () => {
  // const [showMenuLinks, setShowMenuLinks] = useState(false);

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
        {/* <SlideBottom delay={0}> */}
        <nav className='pointer-events-auto cursor-auto h-[70px] flex items-center justify-between
          bg-[#12121240] backdrop-blur-md w-full px-2 xs:px-4 sm:px-9 
          shadow-[0_50px_100px_-20px_rgba(250,250,193,0.25),0_30px_60px_-30px_rgba(255,255,255,0.3)]'>
          {/* <div className='grid col-start-2 justify-start items-center'>
            <Link to={'/'}>
              <img className='h-[60px]' src='./Gamedev.png' alt="Studio Centauri" />
            </Link>
          </div> */}

          {/* <div className='col-start-3 hidden lg:block'>
            <ul className='h-full flex justify-around items-center'>
              <li className='text-[20px] hover:scale-125 hover:font-semibold transition-all duration-300'>
                <Link className='text-[rgba(255,255,255,0.8)]' to={'/'}>Home</Link>
              </li>
              <li className='text-[20px] hover:scale-125 hover:font-semibold transition-all duration-300'>
                <Link className='text-[rgba(255,255,255,0.8)]' to={'/learn'}>Learn</Link>
              </li>
              <li className='text-[20px] hover:scale-125 hover:font-semibold transition-all duration-300'>
                <Link className='text-[rgba(255,255,255,0.8)]' target={'_blank'} to={'https://studiocentauri.itch.io/'} rel="noreferrer">
                  Play
                </Link>
              </li>
              <li className='text-[20px] hover:scale-125 hover:font-semibold transition-all duration-300'>
                <Link className='text-[rgba(255,255,255,0.8)]' to={'/blogs'}>Blogs</Link>
              </li>
              <li className='text-[20px] hover:scale-125 hover:font-semibold transition-all duration-300'>
                <Link className='text-[rgba(255,255,255,0.8)]' to={'/contact'}>Contact Us</Link>
              </li>
            </ul>
          </div> */}

          <div>
            <ul className='h-full grid grid-cols-[repeat(5,1fr)] justify-center items-center'>
              <SlideBottom delay={0.25}>
                <li className='px-2 sm:px-3 text-[15px] sm:text-[20px] hover:scale-125 transition-all duration-300 flex justify-center'>
                  <Link to={"https://www.instagram.com/gamedev_iitk/"} target={'_blank'} rel="noreferrer">
                    <FaInstagram className='hover:text-[#0aff9d] text-[#ebecf3] opacity-50 hover:opacity-100' />
                  </Link>
                </li>
              </SlideBottom>

              <SlideBottom delay={0.5}>
                <li className='px-2 sm:px-3 text-[15px] sm:text-[20px] hover:scale-125 transition-all duration-300 flex justify-center'>
                  <Link to={"https://www.facebook.com/gamedev.iitk"} target={'_blank'} rel="noreferrer">
                    <FaFacebook className='hover:text-[#0aff9d] text-[#ebecf3] opacity-50 hover:opacity-100' />
                  </Link>
                </li>
              </SlideBottom>

              <SlideBottom delay={0.75}>
                <li className='px-2 sm:px-3 text-[15px] sm:text-[20px] hover:scale-125 transition-all duration-300 flex justify-center'>
                  <Link to={"https://www.linkedin.com/company/studio-centauri/"} target={'_blank'} rel="noreferrer">
                    <FaLinkedin className='hover:text-[#0aff9d] text-[#ebecf3] opacity-50 hover:opacity-100' />
                  </Link>
                </li>
              </SlideBottom>

              <SlideBottom delay={1}>
                <li className='px-2 sm:px-3 text-[15px] sm:text-[20px] hover:scale-125 transition-all duration-300 flex justify-center'>
                  <Link to={"https://github.com/studiocentauri"} target={'_blank'} rel="noreferrer">
                    <FaGithub className='hover:text-[#0aff9d] text-[#ebecf3] opacity-50 hover:opacity-100' />
                  </Link>
                </li>
              </SlideBottom>

              <SlideBottom delay={1.25}>
                <li className='px-2 sm:px-3 text-[15px] sm:text-[20px] hover:scale-125 transition-all duration-300 flex justify-center'>
                  <Link to={"mailto:gamedeviitk@gmail.com"} target={'_blank'} rel="noreferrer">
                    <SiGmail className='hover:text-[#0aff9d] text-[#ebecf3] opacity-50 hover:opacity-100' />
                  </Link>
                </li>
              </SlideBottom>
            </ul>
          </div>

          <Link to={"/resume.pdf"}>
            <SlideBottom delay={0.25}>
              <div className='relative overflow-hidden h-full w-full border-solid border-[1px] border-[#0aff9d] rounded text-lg tracking-wider font-normal px-2 xs:px-4 sm:px-8 py-1 flex justify-center items-center transition-all duration-300 text-[#0aff9d] before:absolute before:-z-10 before:h-full before:rounded before:w-full before:right-full before:bottom-full before:bg-[#0aff9d] before:transition-all before:ease-linear before:duration-[200ms] before:delay-0 hover:before:right-0 hover:before:bottom-0 hover:text-white'>
                Resume
              </div>
            </SlideBottom>
          </Link>
        </nav>

        {/* <div className={showMenuLinks ? 'flex justify-center' : 'hidden'}>
          <div className='pointer-events-auto cursor-auto lg:hidden block bg-[#1c1c1c] absolute w-[95%] origin-top z-[999] h-[200px] px-[30px]   
          shadow-[0_50px_100px_-20px_rgba(250,250,193,0.25),0_30px_60px_-30px_rgba(255,255,255,0.3)]'>
            <ul className='h-[200px] flex flex-col justify-around items-start'>
              <li className='text-[17px] hover:scale-125 hover:font-semibold transition-all duration-300'>
                <Link className='text-[rgba(255,255,255,0.8)]' to={'/'} 
                onClick={() => setShowMenuLinks(!showMenuLinks)}>Home</Link>
              </li>
              <li className='text-[17px] hover:scale-125 hover:font-semibold transition-all duration-300'>
                <Link className='text-[rgba(255,255,255,0.8)]' to={'/learn'} 
                onClick={() => setShowMenuLinks(!showMenuLinks)}>Learn</Link>
              </li>
              <li className='text-[17px] hover:scale-125 hover:font-semibold transition-all duration-300'>
                <Link className='text-[rgba(255,255,255,0.8)]' to={'https://studiocentauri.itch.io/'} 
                onClick={() => setShowMenuLinks(!showMenuLinks)}>Play</Link>
              </li>
              <li className='text-[17px] hover:scale-125 hover:font-semibold transition-all duration-300'>
                <Link className='text-[rgba(255,255,255,0.8)]' to={'/blogs'} 
                onClick={() => setShowMenuLinks(!showMenuLinks)}>Blogs</Link>
              </li>
              <li className='text-[17px] hover:scale-125 hover:font-semibold transition-all duration-300'>
                <Link className='text-[rgba(255,255,255,0.8)]' to={'/contact'} 
                onClick={() => setShowMenuLinks(!showMenuLinks)}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div> */}
        {/* </SlideBottom> */}
      </motion.div>
    </>
  )
}

export default Navbar