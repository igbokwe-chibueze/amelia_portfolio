import { useState } from 'react';
import { CustomBtn, FetchData, ParallaxText } from '../components';
import { ArrowDownIcon } from '../constants/icons';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { urlFor, client } from '../client';

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

const textSlideVariants = {
  whileInView: {
    x: [-20, 0],
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
  whileInViewMobile: {
    x: [-20, 0],
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

const iconIndex = {
  0 : 'w-16 h-16 tablet:w-24 tablet:h-24 -mt-9 tablet:-mt-0 tablet:-ml-14',
  1 : 'w-20 h-20 tablet:w-28 tablet:h-28 tablet:ml-10',
  2 : 'w-16 h-16 tablet:w-20 tablet:h-20 -mt-10 tablet:-mt-0 tablet:-ml-8',
  3 : 'w-16 h-16 tablet:w-20 tablet:h-20 -mt-10 tablet:-mt-0 tablet:-ml-8',
};

const Header2 = () => {

  const { error, isPending, data: header } = FetchData('*[_type == "header"][0]')

  const [downloading, setDownloading] = useState(false);

  // Function to handle the download button click
  const handleDownloadClick = async () => {

    // Set the downloading state to true
    setDownloading(true);

    // Resolve the reference to get the file asset
    const fileAsset = await client.getDocument(header.ameliaResume.asset._ref)
    
    // Extract the URL from the file asset
    const resumeUrl = fileAsset.url;

    //window.open(resumeUrl, '_blank'); // Opens the file URL in a new tab

    // Extract the file name from the file asset
    const resumeName = fileAsset.originalFilename;
    
    // Fetch the file as a blob
    const response = await fetch(resumeUrl);
    const blob = await response.blob();

    // Create a temporary anchor element
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = resumeName; // Set the desired file name here
    document.body.appendChild(link);

    // Trigger a click event on the anchor element
    link.click();

    // Remove the temporary anchor element and URL object
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    // Reset the downloading state after a short delay (adjust the delay as needed)
    setTimeout(() => {
      setDownloading(false);
    }, 3000);
  };

  return (
    <section id='header' className="w-full min-h-screen pt-16 px-2">
      {error && <div>{error}</div>}
      {isPending && (<p>Loading......</p>)}
      {!isPending && header && (
        <div className="bg-midnight-green rounded-lg mb-8">
          <div className="bg-caribbean-current text-tea-green rounded-t-lg p-3 tablet:p-4">
            <ParallaxText baseVelocity={2} clamp={true}>{header.parallaxText}</ParallaxText>
          </div>

          <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4 mt-4 mx-4">
            {/* First Column */}
            <div className="tablet:col-span-1">
              <motion.div
                variants={textSlideVariants}
                whileInView={textSlideVariants.whileInView}
                className="flex flex-col gap-5 text-tea-green"
              >
                <h4 className="flex space-x-2 text-lg font-normal">
                  <span>👋🏿</span>
                  <Typewriter
                    options={{
                      strings: header.salutations,
                      autoStart: true,
                      loop: true,
                      delay: 70, // Time to complete each string
                      pauseFor: 6000, // Optional pause after each string
                      escapeHtml: false, // Allow HTML in strings
                      cursor: '..',
                    }}
                  />
                </h4>
                
                <motion.div
                  variants={textChildrenVarients}
                  whileInView={window.innerWidth > 639 ? textChildrenVarients.whileInView : textChildrenVarients.whileInViewMobile }
                  transition={{ delay:1, duration: 1 }}
                  className="flex flex-col gap-5"
                >
                  <h1 className="text-6xl font-bold">
                    Hi, I&apos;m <span className="text-chartreuse-color capitalize">Amelia Olufowobi</span>
                  </h1>
                </motion.div>

                <motion.div
                  variants={textChildrenVarients}
                  whileInView={window.innerWidth > 639 ? textChildrenVarients.whileInView : textChildrenVarients.whileInViewMobile }
                  transition={{ delay:1, duration: 1.4 }} 
                  className='flex flex-col gap-5'
                >
                  <h2 className="flex space-x-2 text-2xl tablet:text-4xl font-bold">
                    <span>a</span>
                    <Typewriter
                      options={{
                        strings: header.professions,
                        autoStart: true,
                        loop: true,
                        delay: 50, // Time to complete each string
                        pauseFor: 1000, // Optional pause after each string
                        escapeHtml: false, // Allow HTML in strings
                      }}
                    />
                  </h2>
                  <p className="text-base leading-6 tracking-wide">
                    {header.remark}
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
                {header.imgurl ? (
                  <img 
                    src={urlFor(header.imgurl)} 
                    alt="profile_bg" 
                    className="object-contain z-10 tablet:-mt-14 p-0 w-[350px] h-[350px] tablet:w-[450px] tablet:h-[450px]"
                  />
                ) : (
                  "" // In the absence of a profile picture, leave the area blank. I can also place a temporal picture here.
                )}
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
                {header.bestTools && header.bestTools.slice(0, 3).map((bestTool, index) => (
                  <motion.div
                      key={index}
                      variants={hoverScaleVariants}
                      whileHover={hoverScaleVariants.hover}
                      className={`hearder-icon-circles header${iconIndex[index]}`}
                  >
                      <img
                          key={index}
                          src={urlFor(bestTool).url()}
                          alt={`Image ${index}`}
                          className="object-cover rounded-2xl w-full h-full"
                      />
                  </motion.div>
                ))}

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
                classProps={`${downloading ? 'rotate-12' : ''} px-8 py-2`}
                label={downloading ? 'Downloading...' : 'Download CV'}
                btnType="button"
                onBtnClick={handleDownloadClick}
                disabled={downloading}  // Disable the button during download
              >
                <ArrowDownIcon 
                  className={`w-[50px] h-[50px] text-chartreuse-color fill-midnight-green 
                  ${!downloading ? '-rotate-45' : 'rotate-90 text-[#81926D] fill-midnight-green animate-bounce'}`}
                />
              </CustomBtn>

            </motion.div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Header2;