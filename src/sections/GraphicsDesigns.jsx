import { useState, useEffect } from "react";
import { CustomBtn, GraphicsDesignCard, ParallaxText } from "../components";
import { AppWrap, MotionWrap } from "../wrapper";
import { client } from '../client';
import { motion } from "framer-motion";
import { ArrowRightIcon } from "../constants/icons";

const buttonVariants = {
  rest: {
    rotate: 12,
  },
  hover: {
    rotate: 0,
    scale: 1.1,
    transition: {
      scale: { duration: 0.3, repeat: Infinity, repeatType: 'reverse' },
    },
  },
};

const GraphicsDesigns = MotionWrap(AppWrap(() => {

  const [header, setHeader] = useState([]);
  const [graphicsDesigns, setGraphicsDesign] = useState([]);
  

  // Fetch header data using the 'client' object on component mount
  useEffect(() => {
    // Define queries to fetch data from the 'graphics design' and 'header' from Sanity
    const graphicsDesignQuery = '*[_type == "graphicsDesigns" && favourite == true]';
    const headerQuery = '*[_type == "header"][0]'; // Fetch the first header object.

    // Fetch testimonial data
    client.fetch(graphicsDesignQuery).then((data) => {
      setGraphicsDesign(data);
    });

    // Fetch header data
    client.fetch(headerQuery).then((data) => {
      setHeader(data);
    });

  }, []);

  return (
    <section className='w-full tablet:max-w-[1120px] min-h-screen px-2 tablet:px-4'>
      <h2 className="head-text">
        Graphics Desings: <span className="text-[#7700ff]">Out of this world.</span>
      </h2>

      <div className="bg-midnight-green rounded-lg mt-10 tablet:mt-12 mb-8">
        <div className="flex justify-center items-center">
          <motion.div
            variants={buttonVariants}
            whileHover={buttonVariants.hover}
            initial="rest" // Optional: Set the initial state
            className='-mt-4 tablet:-mt-4'
          >
            <CustomBtn
              classProps={"px-8 py-2"}
              btnType="button"
              onBtnClick={''}
            >
              <ArrowRightIcon
                className="w-[50px] h-[50px] text-chartreuse-color fill-midnight-green"
              />
            </CustomBtn>

          </motion.div>
        </div>

        <div className='py-8 flex justify-center items-center'>
          {/* Check if GraphicsDesign data is available */}
          {graphicsDesigns.length && (
            <GraphicsDesignCard graphicsDesigns={graphicsDesigns}/>
          )}
        </div>
        
        <div className="bg-caribbean-current text-tea-green rounded-b-lg p-3 tablet:p-4 mt-4">
          <ParallaxText baseVelocity={2} clamp={true}>{header.parallaxText}</ParallaxText>
        </div>
      </div>

    </section>
  )
}, 'graphicsDesigns'));

export default GraphicsDesigns