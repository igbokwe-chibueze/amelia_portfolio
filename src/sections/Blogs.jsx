import { AppWrap, MotionWrap } from "../wrapper";
import { BlogsCard, FetchData, SkeletonBlogs } from "../components";
import { ArrowRightIcon } from "../constants/icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

  const { error, isPending, data: blogs } = FetchData('*[_type == "blogs" && favourite == true]')

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
        <Link
            to={'blogs'}
            className='z-20 flex justify-center items-center border gap-4 group px-8 py-2
            text-lg tablet:text-2xl font-bold leading-none rounded-full 
            bg-chartreuse-color hover:bg-[#6BC800] text-midnight-green border-midnight-green'
          >
            <p>See More</p>
            <ArrowRightIcon
              className="w-[50px] h-[30px] text-chartreuse-color fill-midnight-green"
            />
          </Link>
      </motion.div>

      {/* Render the blogs */}
      <div className="flex justify-center tablet:justify-start items-start flex-wrap mt-4">
        { error && <div>{ error }</div> }
        { isPending && (
          <SkeletonBlogs count={6} type={"skeleton-wrapper-allblogs"}/>
        )}
        {blogs && 
          (<BlogsCard blogs={blogs} type={"blog-card"} />)
        }
      </div>

    </section>
  )
}, 'blogs'));

export default Blogs