import { useEffect, useState } from 'react';
import { navLinks } from "../constants/data";
import { Menu, ProgressBar, ThemeSwitcher} from "../components";
import { images } from "../constants";
import { motion } from 'framer-motion';
import { Link } from "react-scroll";

const linksVariants = {
    hidden: { y: '2vh', opacity: 0},
    visible: { 
      y: 0,
      opacity: 1,
      transition: { 
        duration: 1,
      }
    },
    exit: {
      y: '-2vh',
      opacity: 0,
      transition: {
          duration: 0.2,
      }
    }
  }
  const logoPopVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { 
        duration: 0.8,
      }
    },
    exit: {
      scale: 0,
      transition: {
        delay: 0.2,
        duration: 1,
      }
    }
  }

const Navbar = () => {

    //Make is scrolling a component so that it is reusable for sections and pages.
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

    // Split the navLinks into two halves
    const halfIndex = Math.ceil(navLinks.length / 2);
    const firstHalf = navLinks.slice(0, halfIndex);
    const secondHalf = navLinks.slice(halfIndex);

  return (
    <nav 
        //className='navbar shadow-lg backdrop-blur-xl bg-white/30'
        className={`navbar ${scrolling ? 'shadow-lg backdrop-blur-xl bg-white/30' : ''}`}
    >
        <div className="navbar-container">
            {/* Mobile Screen Container: Shows on Small screens only, hide on laptop screen upwards */}
            <div className="navbar-items laptop:hidden">
                {/* Logo */}
                <a href='/'>
                <img
                    src={images.logo}
                    alt='logo'
                    width={90}
                    height={20}
                />
                </a>
                
                {/* Menu */}
                <div>
                    <Menu />
                </div>
            </div>

            {/* Large Screen Container: Hidden on mobile and tablets, Shows on laptop screen upwards */}
            <div className="hidden laptop:flex navbar-items">
                {/* Render the first half of navLinks */}
                <motion.dv 
                    className='flex-1 flex justify-center items-center gap-16'
                    variants={linksVariants}
                    initial= "hidden"
                    animate="visible"
                >
                    {firstHalf.map((link, index) => (
                        <Link
                            key={index}
                            to={link.href}
                            smooth={true}
                            duration={500}
                            offset={-90} // Scroll additional px ( like padding )Adjust based on your layout, Should be preferable zero
                            spy={true} //Make Link selected when scroll is at its targets position
                            activeClass="border-b border-midnight-green" //class applied when element is reached
                            className="cursor-pointer nav-links relative group"
                        >
                            <div>{link.text}</div>
                            <span 
                                className='nav-links-hover'
                            >
                                &nbsp;
                            </span>
                        </Link>
                    ))}
                </motion.dv>

                {/* Logo */}
                <motion.a 
                    href='/'
                    variants={logoPopVariants}
                    initial= "hidden"
                    animate="visible"
                >
                    <img
                        src={images.logo}
                        alt='logo'
                        width={90}
                        height={20}
                    />
                </motion.a>

                {/* Render the second half of navLinks */}
                <motion.div 
                    className='flex-1 flex justify-center items-center gap-16'
                    variants={linksVariants}
                    initial= "hidden"
                    animate="visible"
                >
                    {secondHalf.map((link, index) => (
                        <Link
                            key={index}
                            to={link.href}
                            smooth={true}
                            duration={500}
                            offset={-90} // Scroll additional px ( like padding )Adjust based on your layout, Should be preferable zero
                            spy={true} //Make Link selected when scroll is at its targets position
                            activeClass="border-b border-midnight-green" //class applied when element is reached
                            className={`cursor-pointer nav-links relative group ${index === secondHalf.length - 1 ? 'rounded-full bg-chartreuse-color hover:bg-[#6BC800] hover:scale-105 px-8 py-1' : ''}`}  //styles the last link of the second batch of links.
                        >
                            <div>{link.text}</div>
                            {/* Conditionally apply the nav-links-hover class */}
                            {index !== secondHalf.length - 1 && (
                                <span className='nav-links-hover'>&nbsp;</span>
                            )}
                        </Link>
                    ))}
                </motion.div>

                <ThemeSwitcher/>
            </div>
        </div>
        
        <ProgressBar/>
    </nav>
  )
}

export default Navbar