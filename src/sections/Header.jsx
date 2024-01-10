import { images } from '../constants';
import { CustomBtn } from '../components';
import { ArrowRightIcon } from '../constants/icons';
import { motion } from 'framer-motion';


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

const Header = () => {
  return (
    <section id='header' className="w-full min-h-screen pt-16 px-2">
      <div className="bg-midnight-green rounded-lg mb-8">
        <div className="bg-caribbean-current text-tea-green rounded-t-lg p-3 tablet:p-4">
          <div className="parallax">
            <div className="scroller">
              <span className="flex overflow-hidden tracking-tight leading-none whitespace-nowrap flex-nowrap">
                UI/UX DESIGNER + GRAPHICS DESIGNER + PROJECT MANAGER
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4 mt-4 mx-4">
          {/* First Column */}
          <div className="tablet:col-span-1">
            <div className="flex flex-col gap-5 text-tea-green">
              <h4 className="text-lg font-normal">👋🏿 Greetings! I am</h4>
              <h1 className="text-6xl font-bold">
                Hi, I'm <span className="text-chartreuse-color capitalize">Amelia Olufowobi</span>
              </h1>
              <h2 className="text-4xl font-bold">
                a <span>UI Designer.</span>
              </h2>
              <p className="text-base leading-6 tracking-wide">
                Designing Dreams, Managing Realities:
                Where UI/UX Wizardry, Graphic Alchemy, and Project Prowess Unite
              </p>
            </div>
          </div>

          {/* Second Column */}
          <div className="tablet:col-span-1">
            <div className="flex justify-center items-center">
              <img
                src={images.profile}
                alt="fallback_image"
                className="object-contain z-10 tablet:-mt-14 p-0 w-[350px] h-[350px] tablet:w-[450px] tablet:h-[450px]"
              />
            </div>
          </div>

          {/* Third Column */}
          <div className="tablet:col-span-1">
            <div className='flex tablet:flex-col justify-between items-center 
              tablet:items-start tablet:space-y-12 pb-4 tablet:pb-0 -mt-2 tablet:-mt-0'
            >
              {/* First Circle */}
              <div className="w-16 h-16 tablet:w-24 tablet:h-24 -mt-9 tablet:-mt-0 tablet:-ml-14 hearder-icon-circles">
                <img src={images.flutter} alt="Flutter" className="object-cover w-full h-full" />
              </div>

              {/* Second Circle */}
              <div className="w-20 h-20 tablet:w-28 tablet:h-28 tablet:ml-10 hearder-icon-circles">
                <img src={images.redux} alt="Redux" className="object-cover w-full h-full" />
              </div>

              {/* Third Circle */}
              <div className="w-16 h-16 tablet:w-20 tablet:h-20 -mt-10 tablet:-mt-0 tablet:-ml-8 hearder-icon-circles">
                <img src={images.sass} alt="Sass" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-4">
          <motion.button
            type="button"
            variants={buttonVariants}
            whileHover="hover"
            className="flex justify-center items-center bg-chartreuse-color gap-1 tablet:gap-4 p-2 rounded-full 
            w-52 h-14 tablet:w-80 tablet:h-16 z-20 -mt-4 tablet:-mt-12 -rotate-12 hover:rotate-0"
          >
            <p className='text-caribbean-current text-lg tablet:text-2xl font-bold leading-none'>Download CV</p>
            <ArrowRightIcon className={"w-14 h-12 text-chartreuse-color fill-midnight-green rotate-45"}/>
          </motion.button>
          {/* <CustomBtn
            label="Download CV" 
            backgroundColor={"bg-chartreuse-color"} 
            borderColor={"border-1 border-gray-500"} 
            textColor={"text-caribbean-current"}
            onClick=""
          >
            <ArrowRightIcon className={"w-8 h-8 fill-white"}/>
          </CustomBtn> */}
        </div>
      </div>
    </section>
  );
};

export default Header;
