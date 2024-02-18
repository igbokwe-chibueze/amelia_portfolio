/* eslint-disable react/prop-types */
import { motion } from "framer-motion"

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
      duration: 0.5,
    },
  },
};

const ServiceCard = ({ image, title, description }) => {
  return (
    <motion.div
      variants={scaleVariants} // Animation variants for scale effect
      whileInView={scaleVariants.whileInView}
      className="service-card"
    >
      <motion.div
        variants={hoverScaleVariants}
        whileHover={hoverScaleVariants.hover}
      >
        {/* Display the profile image */}
        <img
          className="w-full h-44 rounded-2xl object-cover wide-desktop:h-80"
          src={image} alt={title}
        />

        {/* Display the profile title */}
        <h2 className="title-text" style={{ marginTop: 20 }}>{title}</h2>

        {/* Display the profile description */}
        <p className="p-text" style={{ marginTop: 10 }}>{description}</p>
      </motion.div>
    </motion.div>
  )
}

export default ServiceCard