import React from 'react'
import { motion } from 'framer-motion'

export const SlideRight = ({children, delay}) => {
  return (
    <div className='w-full'>
      <motion.div
        variants={{
            hidden: { translateX: "-70px" },
            visible: { translateX: "0px" }
          }}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5,
            delay: delay,
            ease: "easeIn"
          }}
      >
        {children}
      </motion.div>
    </div>
  )
}
