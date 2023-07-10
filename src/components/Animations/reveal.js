import React, { useEffect, useRef} from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export const Reveal = ({children, width = "fit-content", delay = 0.25 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if(isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls])
  
  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
        <motion.div
          variants={{
            hidden: { translateY: "75px", opacity: 0 },
            visible: { translateY: "0px", opacity: 1 }
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 0.5,
            delay: delay + 0.25
          }}
        >
          {children}
        </motion.div>

        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" }
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ 
            duration: 0.5,
            delay: delay,
            ease: "easeIn"
          }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            zIndex: 20,
            background: '#0aff9d'
          }}
        />
    </div>
  )
}
