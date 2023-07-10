import React from 'react'
import { motion } from 'framer-motion'

export const SlideBottom = ({children, delay}) => {
  return (
    <div className='h-full'>
      <motion.div
        variants={{
            hidden: { translateY: "-80px" },
            visible: { translateY: "0px" }
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
