/* eslint-disable react/prop-types */
import { FetchData, SkeletonGraphicsDesignDetails, TransitionEffect } from "../components";
import { motion } from "framer-motion";
import { urlFor } from "../client";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

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

const AllGraphicsDesigns = () => {
    const { id, title } = useParams();

    // Extract title from the URL
    const decodedTitle = decodeURIComponent(title);

    const { error, isPending, data: graphicsDesigns } = FetchData(`*[ _type == "graphicsDesigns" && _id == "${id}" && title == "${decodedTitle}" ]`);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='w-full min-h-screen px-4 tablet:px-20 pb-8'>
            <h2 className="head-text">
                All My Graphics Design: <span className="text-electric-indigo">Explore What I Offer.</span>
            </h2>

            <div className="flex flex-col justify-center items-center tablet:px-16">
                {error && <div>{error}</div>}
                {isPending && <SkeletonGraphicsDesignDetails count={1}/>}
                {graphicsDesigns && (
                    <motion.div
                        variants={scaleVariants}
                        whileInView={scaleVariants.whileInView}
                        viewport={window.innerWidth > 639 ? { once: true } : { once: true }}
                        className="bg-white rounded-lg shadow-2xl p-4 mt-4"
                    >
                        {graphicsDesigns.map(({ title, description, mainImage, images }, index) => (
                            <div key={index}>
                                <h2 className="title-text">{title}</h2>
                                <div className="overflow-hidden mt-4 space-y-4">
                                    <p className="p-text">{description}</p>
                                    <img
                                        className="object-cover rounded-xl"
                                        src={urlFor(mainImage)}
                                        alt={title}
                                    />
                                </div>
                                {images && images.length > 0 && (
                                    <div className="space-y-4 mt-4 tablet:mt-12 overflow-hidden">
                                        <div className="flex flex-col justify-center items-center space-y-4 tablet:space-y-0 tablet:grid tablet:grid-cols-2 tablet:gap-4">
                                            {images.map((image, index) => (
                                                <img
                                                    key={index}
                                                    src={urlFor(image).url()}
                                                    alt={`Image ${index}`}
                                                    className="object-cover rounded-2xl"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                )}
            </div>

            <TransitionEffect />
        </div>
    );
};

export default AllGraphicsDesigns;
