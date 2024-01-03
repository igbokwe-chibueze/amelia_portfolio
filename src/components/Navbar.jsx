import { navLinks } from "../constants/data";
import { Menu, ThemeSwitcher} from "../components";
import { images } from "../constants";


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
            <ul className='flex-1 flex justify-center items-center gap-16'>
                {firstHalf.map((link) => (
                    <li key={link.text}>
                    <a
                        href={link.href}
                        className='nav-links'
                    >
                        {link.text}
                    </a>
                    </li>
                ))}
            </ul>

            {/* Logo */}
            <a href='/'>
            <img
                src={images.logo}
                alt='logo'
                width={90}
                height={20}
            />
            </a>

            {/* Render the second half of navLinks */}
            <ul className='flex-1 flex justify-center items-center gap-16'>
                {secondHalf.map((link) => (
                    <li key={link.text}>
                        <a
                            href={link.href}
                            className='nav-links'
                        >
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>

            <ThemeSwitcher/>
        </div>

    </nav>
  )
}

export default Navbar