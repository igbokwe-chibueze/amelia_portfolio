import { useEffect, useState } from "react"
import { Link } from 'react-scroll';
import ProgressCircle from "./ProgressCircle";
import { AnimatePresence, motion } from "framer-motion";

const svgPop = {
  hidden: { y: '100vh', scale: 0 },
  visible: { 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.9,
      scale: { duration: 1.5 },
    }
  },
  exit: {
    y: '100vh',
    scale: 0,
    transition: {
        duration: 20,
        scale: { duration: 1.5 },
    }
  }
}



const BackToTop = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
    // Check if the user has scrolled beyond a certain threshold (e.g., 70 pixels)
    const isScrolling = window.scrollY > 70;
    setScrolling(isScrolling);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
    window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {scrolling && (
        <div className="z-30 fixed right-7 tablet:right-10 bottom-5 tablet:bottom-10">
          <AnimatePresence>
            <motion.div
              variants={svgPop}
              initial= "hidden"
              animate="visible"
              exit="exit"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.7 }}
            >
              <Link
                to={'header'}
                smooth={true}
                duration={500}
                offset={0} // Adjust this offset based on your layout
                spy={true}
                className="cursor-pointer"
              >
                <ProgressCircle/>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </>
  )
}

export default BackToTop