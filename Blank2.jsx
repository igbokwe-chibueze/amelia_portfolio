/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion"
import { ArrowRightIcon, EarthIcon, EyeIcon } from "../constants/icons"

const normalizeTag = (tag) => {
    // Convert to lowercase, remove spaces, and remove special characters
    return tag.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
};

const ProjectsCard = ({ image, title, description, projectLink, liveLink, caseStudy, tags }) => {

    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

  return (
    <motion.div
        whileInView={{opacity: [0, 1] }} // Animate opacity to 1 when the element is in view
        transition={{ opacity: { duration: 1.0, type: 'tween' }}} // Set the animation duration and type
        className="project-card app-flex"
    >
        {/* Render the project image */}
        <div className="project-card-img app-flex">
            <img src={image} alt={title} className='w-full h-full rounded-lg object-cover' />
            
            {window.innerWidth < 1024 && (
                <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileTap={{ scale: 0.3 }}
                    transition={{ duration: 0.25 }}
                    onClick={toggleLinks} // Toggle visibility when clicked
                    className="absolute top-0 right-0 rounded-full bg-midnight-green/60 m-4"
                >
                    <EyeIcon className={'fill-white w-2/4 h-2/4'}/>
                </motion.div>
            )}
            {/* Render hover effects with links to project and code */}
            {(showLinks || window.innerWidth >= 1024) && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={window.innerWidth < 1024 ? { scale: [0, 1], opacity:[0, 1] } : { scale: 1 }}
                    whileHover={window.innerWidth >= 1024 ? { opacity: [0, 1] } : { opacity: [0] }}
                    transition={{ duration: 0.5, ease: 'easeInOut', staggerChildren: 0.5 }}
                    onClick={toggleLinks}
                    className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-black/50 rounded-lg app-flex"
                >
                    <a href={projectLink} target="_blank" rel="noreferrer">
                        <motion.div
                            whileInView={{ scale: [0, 1] }}
                            whileHover={{ scale: [1, 0.90] }}
                            transition={{ duration: 0.25 }}
                            className="project-card-icon app-flex"
                        >
                            <EarthIcon className={'fill-white w-2/4 h-2/4'}/>
                        </motion.div>
                    </a>
                    <a href={liveLink} target="_blank" rel="noreferrer">
                        <motion.div
                            whileInView={{ scale: [0, 1] }}
                            whileHover={{ scale: [1, 0.90] }}
                            transition={{ duration: 0.25 }}
                            className="project-card-icon app-flex"
                        >
                            <EyeIcon className={'fill-white w-2/4 h-2/4'}/>
                        </motion.div>
                    </a>
                </motion.div>
            )}
            {/* <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="project-card-hover app-flex"
            >
                <a href={projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.90] }}
                        transition={{ duration: 0.25 }}
                        className="project-card-icon app-flex"
                    >
                        <EarthIcon className={'fill-white w-2/4 h-2/4'}/>
                    </motion.div>
                </a>
                <a href={liveLink} target="_blank" rel="noreferrer">
                    <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.90] }}
                        transition={{ duration: 0.25 }}
                        className="project-card-icon app-flex"
                    >
                        <EyeIcon className={'fill-white w-2/4 h-2/4'}/>
                    </motion.div>
                </a>
            </motion.div> */}
        </div>

        {/* Render the project content */}
        <div className="project-card-content app-flex">
            <h4 className="title-text mt-4 wide-desktop:mt-12 leading-normal">{title}</h4>
            <p className="p-text" style={{ marginTop: 10 }}>{description}</p>

            {/* Render the case study badge only if there is a case study link */}
            {
                caseStudy && (
                    <a href={caseStudy} target="_blank" rel="noopener noreferrer" className="project-card-badge app-flex group">
                        <p className="p-text">Case Study</p>
                        <div className='tablet:invisible group-hover:visible group-hover:translate-x-1 transition duration-700 ease-in-out'>
                            <ArrowRightIcon className={'w-7 h-7 text-chartreuse-color fill-midnight-green'}/>
                        </div>
                    </a>
                )
            }

            {/* Render all project tags */}
            <div className="project-card-tags">
                {/* Map through each tag in the 'project.tags' array */}
                {tags.map((tag, index) => (
                    <div
                        key={index}
                        className='project-card-tag-item'
                    >
                        {normalizeTag(tag)}
                    </div>
                ))}
            </div>

        </div>
    </motion.div>
  )
}

export default ProjectsCard