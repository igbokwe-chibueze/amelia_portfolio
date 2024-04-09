/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import { urlFor } from "../client";

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

const hoverScaleVariants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.5,
    },
  },
};

const BlogsCard = ({blogs, type}) => {

  const classes = `relative ${type}`;

  return (
    <>
      {blogs.map((blog) => (
        <motion.div
          key={blog.title}
          variants={scaleVariants} // Animation variants for scale effect
          whileInView={scaleVariants.whileInView}
          viewport={window.innerWidth > 639 ? { once: true } : { once: true }}
        >
          <motion.div
            variants={hoverScaleVariants}
            whileHover={hoverScaleVariants.hover}
            className={classes}
          >
            {/* Display the profile image */}
            <img
              className=" w-full h-44 rounded-2xl object-cover wide-desktop:h-80"
              src={urlFor(blog.imgUrl)} alt={blog.title}
            />

            {/* Display the blog published date */}
            <p className="p-text mt-4">{blog.publishedDate}</p>

            {/* Display the profile title */}
            <a href={blog.link} target="_blank" rel="noopener noreferrer">
              <h2 className="title-text mt-2 hover:underline">{blog.title}</h2>
            </a>

            {/* Display the profile description */}
            <p className="p-text mt-2">{blog.description}</p>

            <div className="blog-card-badge">
              <p>{blog.readTime} mins read</p>
            </div>

            <div className="border-t-2 border-gray-100 w-full my-2"/>

            <div className="flex justify-end items-center w-full">
              <div className="w-fit">
                <a href={blog.link} target="_blank" rel="noopener noreferrer">
                  <p className="p-text hover:underline">Read More</p>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </>
  )
}

export default BlogsCard