/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import { urlFor } from "../client";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "../constants/icons";
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

const AllGraphicsDesignCard = ({graphicsDesigns}) => {
  return (
    <>
        {graphicsDesigns.map((graphics, index) => (
            <motion.div
                key={index}
                variants={scaleVariants} // Animation variants for scale effect
                whileInView={scaleVariants.whileInView}
                viewport={window.innerWidth > 639 ? { once: true } : { once: true }}
                className="flex flex-col space-y-4 tablet:w-3/4 h-96 my-6 p-4 rounded-lg bg-white shadow-2xl"
            >
                {/* Display the title */}
                <h2 className="title-text">{graphics.title}</h2>

                <div
                    //to={`/graphicsDesignDetails/${graphics._id}`}
                    className="relative w-full h-full rounded-2xl overflow-hidden group"
                >
                    {/* Display the main image */}
                    <img
                        className="w-full h-full object-cover"
                        src={urlFor(graphics.mainImage)} alt={graphics.title}
                    />
                    {/* Display the description */}
                    <Link
                        to={`/graphicsDesignDetails/${graphics._id}/${encodeURIComponent(graphics.title)}`}

                        //translate-y-full class initially translates the description div to completely hide it below the parent div.
                        className="absolute inset-x-0 bottom-0 right-0 w-full h-1/2 rounded-lg text-white
                        duration-700 ease-in-out transition translate-y-full group-hover:translate-y-0 group-hover:bg-black/70 p-4"
                    >
                        <ArrowUpRightIcon className={"float-right"} />
                        <p className="p-text text-white truncate-overflow">{graphics.description}</p>
                    </Link>
                </div>
            </motion.div>
        ))}
    </>
  )
}

export default AllGraphicsDesignCard