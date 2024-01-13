import { useState } from 'react';
import { images } from '../constants';
import { CustomBtn, ParallaxText } from '../components';
import { ArrowDownIcon } from '../constants/icons';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';


const buttonVariants = {
  rest: {
    rotate: -12,
  },
  hover: {
    rotate: 0,
    scale: 1.1,
    transition: {
      scale: { duration: 0.3, repeat: Infinity, repeatType: 'reverse' },
    },
  },
};

// Variants for the scale animation
const textSlideVariants = {
  whileInView: {
    // Animation effect for scale and opacity from 0 to 1
    x: [-100, 0],
    opacity: [0, 1],
    // Animation transition properties
    transition: {
      duration: 1.2, // Animation duration in seconds
      ease: 'easeInOut',
    },
  },
};

const textChildrenVarients = {
  whileInView: {
    x: [-100, 0],
    opacity: [0, 1]
  },
}

// Variants for the scale animation
const scaleVariants = {
  whileInView: {
    // Animation effect for scale and opacity from 0 to 1
    scale: [0, 1],
    opacity: [0, 1],
    // Animation transition properties
    transition: {
      duration: 1.5, // Animation duration in seconds
      ease: 'easeInOut', // Animation easing function
    },
  },
};

const hoverScaleVariants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
    },
  },
};

const Header = () => {

  const professionStrings = [
    'UI/UX Designer...',
    'Project Manager...',
    'Graphics Designer...',
    'Content Writer...'
  ];

  const [downloading, setDownloading] = useState(false);

  // Function to handle the download button click
  const handleDownloadClick = () => {
    // Set the downloading state to true
    setDownloading(true);

    // Replace 'your-file-path.pdf' with the actual path of your PDF file
    const pdfFilePath = '/src/assets/Amelia CV.pdf';

    // Create a temporary link element
    const link = document.createElement('a');

    // Set the href attribute to the file path
    link.href = pdfFilePath;

    // Set the download attribute with the desired file name
    link.download = pdfFilePath.substring(pdfFilePath.lastIndexOf('/') + 1);

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);

    // Reset the downloading state after a short delay (adjust the delay as needed)
    setTimeout(() => {
      setDownloading(false);
    }, 3000);
  };

  return (
    <section id='header' className="w-full min-h-screen pt-16 px-2">
      <div className="bg-midnight-green rounded-lg mb-8">
        <div className="bg-caribbean-current text-tea-green rounded-t-lg p-3 tablet:p-4">
          <ParallaxText baseVelocity={1}>UI/UX DESIGNER + GRAPHICS DESIGNER + PROJECT MANAGER +</ParallaxText>
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4 mt-4 mx-4">
          {/* First Column */}
          <div className="tablet:col-span-1">
            <motion.div
              variants={textSlideVariants}
              whileInView={textSlideVariants.whileInView}
              className="flex flex-col gap-5 text-tea-green"
            >
              <h4 className="text-lg font-normal">👋🏿 Greetings! I am</h4>

              <motion.div
                variants={textChildrenVarients}
                whileInView={textChildrenVarients.whileInView}
                transition={{ delay:1, duration: 1 }}
                className="flex flex-col gap-5"
              >
                <h1 className="text-6xl font-bold">
                  Hi, I'm <span className="text-chartreuse-color capitalize">Amelia Olufowobi</span>
                </h1>
              </motion.div>

              <motion.div
                variants={textChildrenVarients}
                whileInView={textChildrenVarients.whileInView}
                transition={{ delay:1, duration: 1.4 }} 
                className='flex flex-col gap-5'
              >
                <h2 className="flex space-x-2 text-2xl tablet:text-4xl font-bold">
                  <span>a</span>
                  <Typewriter
                    options={{
                      strings: professionStrings,
                      autoStart: true,
                      loop: true,
                      delay: 50, // Optional delay between strings
                      pauseFor: 1000, // Optional pause after each string
                      escapeHtml: false, // Allow HTML in strings
                    }}
                  />
                </h2>
                <p className="text-base leading-6 tracking-wide">
                  Designing Dreams, Managing Realities:
                  Where UI/UX Wizardry, Graphic Alchemy, and Project Prowess Unite
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Second Column */}
          <div className="tablet:col-span-1">
            <motion.div
              whileInView={{ y: [100, 0], opacity: [0, 1] }} // Animation effect for horizontal sliding from left and opacity change from transparent to full
              transition={{ duration: 1.5 }}
              className="flex justify-center items-center"
            >
              <img
                src={images.profile}
                alt="fallback_image"
                className="object-contain z-10 tablet:-mt-14 p-0 w-[350px] h-[350px] tablet:w-[450px] tablet:h-[450px]"
              />
            </motion.div>
          </div>

          {/* Third Column */}
          <div className="tablet:col-span-1">
            <motion.div 
              variants={scaleVariants} // Animation variants for scale effect
              whileInView={scaleVariants.whileInView}
              className='flex tablet:flex-col justify-between items-center 
              tablet:items-start tablet:space-y-12 pb-4 tablet:pb-0 -mt-2 tablet:-mt-0'
            >
              {/* First Circle */}
              <motion.div
                variants={hoverScaleVariants}
                whileHover={hoverScaleVariants.hover}
                //The z-10 is just to prevent the circle from being behind the profile image, so i can hover over it.
                className="w-16 h-16 tablet:w-24 tablet:h-24 -mt-9 tablet:-mt-0 tablet:-ml-14 hearder-icon-circles z-10"
              >
                <img src={images.flutter} alt="Flutter" className="object-cover w-full h-full" />
              </motion.div>

              {/* Second Circle */}
              <motion.div
                variants={hoverScaleVariants}
                whileHover={hoverScaleVariants.hover}
                className="w-20 h-20 tablet:w-28 tablet:h-28 tablet:ml-10 hearder-icon-circles"
              >
                <img src={images.redux} alt="Redux" className="object-cover w-full h-full" />
              </motion.div>

              {/* Third Circle */}
              <motion.div 
                variants={hoverScaleVariants}
                whileHover={hoverScaleVariants.hover}
                className="w-16 h-16 tablet:w-20 tablet:h-20 -mt-10 tablet:-mt-0 tablet:-ml-8 hearder-icon-circles z-10"
              >
                <img src={images.sass} alt="Sass" className="object-cover w-full h-full" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-4">
          <motion.div
            variants={buttonVariants}
            // Apply hover effect only when not downloading. I used rest when downloading or btn wont return to no rotation.
            whileHover={!downloading ? buttonVariants.hover : 'rest'}
            initial="rest" // Optional: Set the initial state
            className='-mt-4 tablet:-mt-14 z-20'
          >
            <CustomBtn
              classProps={`gap-4 px-8 py-2 ${downloading ? 'rotate-12' : ''}`}
              label={downloading ? 'Downloading...' : 'Download CV'} 
              backgroundColor={"bg-chartreuse-color"} 
              borderColor={"border-1 border-midnight-green"} 
              textColor={"text-midnight-green"}
              onClick={handleDownloadClick}
              disabled={downloading}  // Disable the button during download
            >
              <ArrowDownIcon 
                className={`w-[50px] h-[50px] text-chartreuse-color fill-midnight-green 
                ${!downloading ? '-rotate-45' : 'rotate-90 text-midnight-green fill-[#81926D] animate-bounce'}`}
              />
            </CustomBtn>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header;
