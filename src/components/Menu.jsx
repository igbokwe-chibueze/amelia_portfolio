import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { HamburgerIcon, CloseIcon, TwitterIcon, InstagramIcon } from '../constants/icons';
import { navLinks } from '../constants/data';
import ThemeSwitcher from './ThemeSwitcher';
import { Link } from "react-scroll";
import ContactBtn from './ContactBtn';



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

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: 'reverse'
    }
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
    <div>
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
            } absolute right-0 top-0 mt-0 w-4/5 tablet:w-1/2 h-screen pt-2 pb-4 z-20 backdrop-blur-xl bg-caribbean-current/90 shadow-lg`}
        >
          <motion.div 
            className='flex-1 flex-col justify-center items-center w-5/6 mt-12 ml-16'
          >
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                smooth={true}
                duration={500}
                offset={-90} // Scroll additional px ( like padding )Adjust based on your layout, Should be preferable zero
                spy={true} //Make Link selected when scroll is at its targets position
                activeClass="text-chartreuse-color" //class applied when element is reached//class applied when element is reached
                className="cursor-pointer menu-links"
                onClick={() => setMenuToggle(false)}
              >
                <motion.div 
                  variants={childrenVarients}
                  whileHover={{scale: 1.1}}
                  whileTap={{ scale: 0.7 }}
                  transition={{type: 'spring', stiffness: 90}}
                  className={`menu-links-div ${index === navLinks.length - 1 ? 'bg-gray-500' : ''}`}
                >
                  {link.text}
                </motion.div>
              </Link>
            ))}
          </motion.div>
          
          
          <div className="mt-4 border-t border-chartreuse-color">
            <motion.div
                variants={childrenVarients}
                className="flex-col flex justify-end items-end py-2 pr-8"
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                className='pb-4'
              >
                <ThemeSwitcher/>
              </motion.div>

              <div className="flex items-center gap-2">
                <ContactBtn 
                  text="Twitter" 
                  backgroundColor={"bg-blue-700"} 
                  borderColor={"border-1 border-gray-500"} 
                  textColor={"text-black"}
                  onClick={() => {setMenuToggle(false); window.open("https://twitter.com/Amelia_olu")}}
                >
                  <TwitterIcon className={"w-5 p-0.5"}/>
                </ContactBtn>

                <ContactBtn 
                  text="Instagram" 
                  backgroundColor={"bg-rose-700"} 
                  borderColor={"border-1 border-gray-500"} 
                  textColor={"text-black"}
                  onClick={() => {setMenuToggle(false); window.open("https://www.instagram.com/amelia_olufowobi/")}}
                >
                  <InstagramIcon className={"w-5 p-0.5"}/>
                </ContactBtn>

                <ContactBtn 
                  text="Twitter" 
                  backgroundColor={"bg-blue-700"} 
                  borderColor={"border-1 border-gray-500"} 
                  textColor={"text-black"}
                  onClick={() => {setMenuToggle(false); window.open("https://twitter.com/Amelia_olu")}}
                >
                  <TwitterIcon className={"w-5 p-0.5"}/>
                </ContactBtn>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}  
      </AnimatePresence>   
    </div>
  )
}

export default Menu