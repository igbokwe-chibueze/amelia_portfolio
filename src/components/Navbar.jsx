import { navLinks } from "../constants/data";
import { Menu, ProgressBar, ThemeSwitcher} from "../components";
import { images } from "../constants";
import { motion } from 'framer-motion';

const linksVariants = {
    hidden: { y: '2vh', opacity: 0},
    visible: { 
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5,
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
        duration: 0.5,
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

    // Split the navLinks into two halves
    const halfIndex = Math.ceil(navLinks.length / 2);
    const firstHalf = navLinks.slice(0, halfIndex);
    const secondHalf = navLinks.slice(halfIndex);

  return (
    <nav className='navbar'>
        {/* Mobile Screen Container: Shows on Small screens only, hide on laptop screen upwards */}
        <div className="navbar-container laptop:hidden">
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
        <div className="hidden laptop:flex navbar-container">
            {/* Render the first half of navLinks */}
            <motion.ul 
                className='flex-1 flex justify-center items-center gap-16'
                variants={linksVariants}
                initial= "hidden"
                animate="visible"
            >
                {firstHalf.map((link) => (
                    <li key={link.text}>
                    <a
                        href={link.href}
                        className='nav-links relative group'
                    >
                        {link.text}
                        <span className='nav-links-hover'>
                            &nbsp;
                        </span>
                    </a>
                    </li>
                ))}
            </motion.ul>

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
            <motion.ul 
                className='flex-1 flex justify-center items-center gap-16'
                variants={linksVariants}
                initial= "hidden"
                animate="visible"
            >
                {secondHalf.map((link, index) => (
                    <li key={link.index}>
                        <a
                            href={link.href}
                            className={`nav-links relative group ${index === secondHalf.length - 1 ? 'rounded-full bg-chartreuse-color px-2' : ''}`}  //styles the last link of the second batch of links.
                        >
                            {link.text}
                            <span className='nav-links-hover'>
                                &nbsp;
                            </span>
                        </a>
                    </li>
                ))}
            </motion.ul>

            <ThemeSwitcher/>
            <ProgressBar/>
        </div>

    </nav>
  )
}

export default Navbar