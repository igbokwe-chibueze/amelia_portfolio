/* eslint-disable react/prop-types */
import { motion } from "framer-motion"

const ServiceCard = ({ image, title, description }) => {
  return (
    <motion.div
      //whileInView={{ opacity: 1 }} // Animate opacity to 1 when the element is in view
      whileInView={{opacity: [0, 1] }} // Animate opacity to 1 when the element is in view
      whileHover={{ scale: 1.1 }} // Animate scale to 1.1 on hover
      transition={{ opacity: { duration: 1.5, type: 'tween' }, scale: { duration: 0.5 } }} // Set the animation duration and type
      className="service-card"
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
  )
}

export default ServiceCard