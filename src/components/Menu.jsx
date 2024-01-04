import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { HamburgerIcon, CloseIcon } from '../constants/icons';
import { navLinks } from '../constants/data';
import ThemeSwitcher from './ThemeSwitcher';



//Slides the menu in from the side of the screen and exist in reverse order.
const menuVariant = {
  hidden: {
    x: '100vw'
  },
  visible: {
    x: 0,
    transition: {
      type: 'tween', 
      duration: 0.5,
      staggerChildren: 0.15, delayChildren: 0.4
    }
  },
  exit: {
    x: '100vw',
    transition: {
      delay: 0.6,
      type: 'tween',
      duration: 1,
      staggerChildren: 0.15, staggerDirection: -1 
    },
  }
};

//Controls how individual cards slides into view
const childrenVarients = {
  hidden: {
    x: 50,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  },
  exit: {
    x: -50,
    opacity: 0
  }
}

const Menu = () => {
    
    // Define a state variable 'menuToggle' and a function 'setMenuToggle' to manage the toggle state.
    const [menuToggle, setMenuToggle] = useState(false);

    // This "useEffect" is just so i can close the overlay using "Escape" key on keyboard.
    // Use the 'useEffect' hook to add an event listener for the "Escape" key press.
    useEffect(() => {
        // Define a function 'handleKeyPress' to handle the key press event.
        const handleKeyPress = (e) => {
            if (e.key === "Escape") {
                // If the "Escape" key is pressed, set 'menuToggle' to 'false' to close the menu list.
                setMenuToggle(false);
            }
        };

        // Add the event listener to the window object to listen for keydown events.
        window.addEventListener("keydown", handleKeyPress);

        // Clean up the event listener when the component is unmounted.
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []); // The empty dependency array ensures this effect only runs once when the component is mounted.

  return (
    <div className="">
      {/* Hamburger */}
      <div className='lg:hidden'>
        <button type="button"
          onClick={() => setMenuToggle(!menuToggle)}  // Toggle the 'toggle' state when the icon is clicked.
          className="relative z-40 hamburgerBtn"
        >
          {/* Hamburger svg & close svg*/}
          {menuToggle ? (
          // Render the first path(close) when toggle is true
          <CloseIcon className={"w-4 h-4"}/>
          ) : (
          // Render the second path(Hamburger) when toggle is false
          <HamburgerIcon className={"w-4 h-4"}/>
          )}
        </button>
      </div>

      {/* OverlayBtn: Closes the menu list when clicking outside of the list. */}
      <div 
        className={`${
            !menuToggle ? "hidden" : "block"  // Conditionally display the menu based on 'toggle' state.
        } `}
      >
        <button type="button"
            onClick={() => setMenuToggle(false)}
            tabIndex={-1} // Ensures this button is not accessible by keyboard
            className="fixed inset-0 z-20 bg-transparent h-screen w-screen cursor-default"
        >
        </button> 
      </div>

      {/* Menu List area */}
      <AnimatePresence>
      {menuToggle && (
        <motion.div
          key="menu"
          variants={menuVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`${
                !menuToggle ? "hidden" : "block"  // Conditionally display the menu based on 'toggle' state.
            } absolute right-0 top-0 mt-0 w-4/5 tablet:w-1/2 h-screen pt-2 pb-4 z-20 bg-chartreuse-color opacity-95 shadow-lg`}
        >
          <motion.ul 
            className="py-2 mt-8">
            {navLinks.map((link) => (
              <li key={link.text} className="menu-links">
                <motion.div
                  variants={childrenVarients}
                  whileHover={{scale: 1.1, originX: 1}}
                  whileTap={{ scale: 0.7 }}
                  transition={{type: 'spring', stiffness: 90}}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuToggle(false)}
                    className="flex justify-end leading-normal"
                  >
                    <span>{link.text}</span>
                  </a>
                </motion.div>
              </li>
            ))}

          </motion.ul>
          
          <div className=" border-t border-caribbean-current ">
            <motion.div
                variants={childrenVarients}
                whileHover={{scale: 1.1}}
                className="flex justify-end py-2 px-8"
            >
              <ThemeSwitcher/>
            </motion.div>
          </div>
        </motion.div>
      )}  
      </AnimatePresence>   
    </div>
  )
}

export default Menu