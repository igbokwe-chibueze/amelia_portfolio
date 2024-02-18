/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import { ArrowRightIcon, EarthIcon, EyeIcon } from "../constants/icons"

const normalizeTag = (tag) => {
    // Convert to lowercase, remove spaces, and remove special characters
    return tag.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
};

const ProjectsCard = ({ image, title, description, projectLink, liveLink, caseStudy, tag }) => {

  return (
    <motion.div
        whileInView={{opacity: [0, 1] }} // Animate opacity to 1 when the element is in view
        transition={{ opacity: { duration: 1.0, type: 'tween' }}} // Set the animation duration and type
        className="project-card app-flex"
    >
        {/* Render the project image */}
        <div className="project-card-img app-flex">
            <img src={image} alt={title} className='w-full h-full rounded-lg object-cover' />

            {/* Render hover effects with links to project and code */}
            <motion.div
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
            </motion.div>
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
                        <div className='invisible group-hover:visible group-hover:translate-x-1 transition duration-700 ease-in-out'>
                            <ArrowRightIcon className={'w-7 h-7 text-chartreuse-color fill-midnight-green'}/>
                        </div>
                    </a>
                )
            }

            {/* Render all project tags */}
            <div className="project-card-tags">
                {/* Map through each tag in the 'project.tags' array */}
                {tag.map((item, index) => (
                    <div
                        key={index}
                        className='project-card-tag-item'
                    >
                        {normalizeTag(item)}
                    </div>
                ))}
            </div>

        </div>
    </motion.div>
  )
}

export default ProjectsCard