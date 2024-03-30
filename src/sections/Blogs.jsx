import { useState } from "react";
import { AppWrap, MotionWrap } from "../wrapper";
import { useEffect } from "react";
import { client } from "../client";
import { BlogsCard, CustomBtn } from "../components";
import { ArrowRightIcon } from "../constants/icons";
import { motion } from "framer-motion";

const scaleVariants = {
  whileInView: {
    // Animation effect for scale and opacity from 0 to 1
    scale: [0, 1],
    opacity: [0, 1],
    // Animation transition properties
    transition: {
      duration: 1.0, // Animation duration in seconds
      ease: 'easeInOut', // Animation easing function
    },
  },
};

const Blogs = MotionWrap(AppWrap(() => {

  const [favoriteBlogs, setFavoriteBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);

  // Use the 'useEffect' hook to fetch data from the backend on component mount
  useEffect(() => {
    const query = '*[_type == "blogs"]'; // Define a query to fetch 'all blogs' data from the backend
    const favouriteQuery = '*[_type == "blogs" && favourite == true]'; // Define a query to fetch 'favourite blogs' data from the backend

    // Fetch data using the 'client' and update the 'services' state with the fetched data
    client.fetch(query).then((data) => {
      setAllBlogs(data);
    });
    // Fetch data using the 'client' and update the 'services' state with the fetched data
    client.fetch(favouriteQuery).then((data) => {
      setFavoriteBlogs(data);
    });
  }, []);


  return (
    <section className='w-full min-h-screen'>
      {/* Heading for the Services section */}
      <h2 className="head-text w-72 tablet:w-full">
        Crafting Excellence: <span className="text-[#7700ff]">Words Can Change The World.</span>
      </h2>

      <motion.div 
        variants={scaleVariants} // Animation variants for scale effect
        whileInView={scaleVariants.whileInView}
        viewport={window.innerWidth > 639 ? { once: true } : { once: true }}
        className="mt-4 flex justify-center items-center w-full"
      >
        <CustomBtn
          classProps={"px-8 py-2"}
          btnType="button"
          onBtnClick={''}
        >
          <ArrowRightIcon
            className="w-[50px] h-[30px] text-chartreuse-color fill-midnight-green"
          />
        </CustomBtn>
      </motion.div>

      {/* Render a list of the first four services using 'map' function */}
      <div className="flex justify-center tablet:justify-start items-start flex-wrap mt-4">
        <BlogsCard favoriteBlogs={favoriteBlogs} />
      </div>

    </section>
  )
}, 'blogs'));

export default Blogs