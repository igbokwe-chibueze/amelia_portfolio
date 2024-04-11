import { pages } from "../constants/data";
import { PagesMenu, ProgressBar, ThemeSwitcher} from "../components";
import { images } from "../constants";
import { motion } from 'framer-motion';
import { NavLink } from "react-router-dom";

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

const PagesNavbar = () => {

    // Split the navLinks into two halves
    const halfIndex = Math.ceil(pages.length / 2);
    const firstHalf = pages.slice(0, halfIndex);
    const secondHalf = pages.slice(halfIndex);

  return (
    <nav 
        className='navbar shadow-lg backdrop-blur-xl bg-white/30'
    >
        <div className="navbar-container">
            {/* Mobile Screen Container: Shows on Small screens only, hide on laptop screen upwards */}
            <div className="navbar-items laptop:hidden">
                {/* Logo */}
                <NavLink 
                    to={'/'}
                    exact={true}
                >
                    <img
                        src={images.ameliaLogo2}
                        alt='logo'
                        width={120}
                        height={60}
                    />
                </NavLink>
                
                {/* Menu */}
                <div>
                    <PagesMenu />
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
                        <NavLink
                            key={index}
                            to={link.to}
                            // Add custom styles based on isActive state
                            className={({ isActive }) => `${isActive ? 'border-b border-midnight-green' : ''} nav-links relative group`}
                            // Ensure exact matching for the home link
                            exact={link.exact}
                            activeClass="border-b border-midnight-green" //class applied when element is reached
                        >
                            <div>{link.text}</div>
                            <span 
                                className='nav-links-hover'
                            >
                                &nbsp;
                            </span>
                        </NavLink>
                    ))}
                </motion.dv>

                {/* Logo */}
                <motion.div 
                    variants={logoPopVariants}
                    initial= "hidden"
                    animate="visible"
                >
                    <NavLink
                        to={'/'}
                        exact={true}
                    >
                        <motion.img
                            whileHover={{scale: 1.1}}
                            src={images.ameliaLogo2}
                            alt='logo'
                            width={120}
                            height={60}
                        />
                    </NavLink>
                </motion.div>

                {/* Render the second half of navLinks */}
                <motion.div 
                    className='flex-1 flex justify-center items-center gap-16'
                    variants={linksVariants}
                    initial= "hidden"
                    animate="visible"
                >
                    {secondHalf.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.to}
                            // Add custom styles based on isActive state
                            className={({ isActive }) => `${isActive ? 'border-b border-midnight-green' : ''} ${index === secondHalf.length - 1 ? 'nav-last-link' : ''} nav-links relative group`}
                            // Ensure exact matching for the home link
                            exact={link.exact}
                            activeClass="border-b border-midnight-green" //class applied when element is reached
                        >
                            <div>{link.text}</div>
                            <span 
                                className='nav-links-hover'
                            >
                                &nbsp;
                            </span>
                        </NavLink>
                    ))}
                </motion.div>

                <ThemeSwitcher/>
            </div>
        </div>
        
        <ProgressBar/>
    </nav>
  )
}

export default PagesNavbar