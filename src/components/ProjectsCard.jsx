/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import { urlFor } from "../client"
import { useState } from "react";
import { ArrowRightIcon, EarthIcon, EyeIcon } from "../constants/icons"

const laptopScreenWidth = 1024;

const normalizeTag = (tag) => {
    return tag.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
};

const tagColors = {
    all: 'bg-black',
    webdesigns: 'bg-red-600',
    mobiledesigns: 'bg-green-600',
    landingpages: 'bg-pink-600',
    gamedesigns: 'bg-yellow-600',
    // Add more tag names and their corresponding background colors here
};

const ProjectsCard = ({projects, type}) => {

    const [showLinks, setShowLinks] = useState({});

    const classes = `${type}`;
    
    // The toggleLinks function now accepts the index of the project as an argument, 
    // and it toggles the showLinks state for that specific project.
    const toggleLinks = (index) => {
        setShowLinks(prevState => ({
            ...prevState,
            [index]: !prevState[index] // Toggle the value of showLinks at the specified index
        }));
    };

    const renderMobileToggle = (index) => {
        return (
            window.innerWidth < laptopScreenWidth && (
                <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileTap={{ scale: 0.3 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => toggleLinks(index)}
                    className="absolute top-0 right-0 rounded-full bg-midnight-green/60 m-4"
                >
                    <EyeIcon className={'fill-white w-2/4 h-2/4'}/>
                </motion.div>
            )
        );
    };

    const renderLinks = (project, index) => {
        return (
            (showLinks[index] || window.innerWidth >= laptopScreenWidth) && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={window.innerWidth < laptopScreenWidth ? { scale: [0, 1], opacity:[0, 1] } : { scale: 1 }}
                    whileHover={window.innerWidth >= laptopScreenWidth ? { opacity: [0, 1] } : { opacity: [0] }}
                    transition={{ duration: 0.5, ease: 'easeInOut', staggerChildren: 0.5 }}
                    onClick={() => toggleLinks(index)}
                    className="project-card-hover app-flex space-x-5"
                >
                    <a href={project.projectLink} target="_blank" rel="noreferrer">
                        <motion.div
                            whileInView={{ scale: [0, 1] }}
                            whileHover={{ scale: [1, 0.90] }}
                            transition={{ duration: 0.25 }}
                            className="project-card-icon app-flex"
                        >
                            <EarthIcon className={'fill-white w-2/4 h-2/4'}/>
                        </motion.div>
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noreferrer">
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
            )
        );
    };

    return (
        <>
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    whileInView={{opacity: [0, 1] }}
                    transition={{ opacity: { duration: 1.0, type: 'tween' }}}
                    className={classes}
                >
                    <div className="project-card-img app-flex">
                        <img src={urlFor(project.imgUrl)} alt={project.title} className='w-full h-full rounded-lg object-cover' />
                        {renderMobileToggle(index)}
                        {renderLinks(project, index)}
                    </div>

                    <div className="project-card-content app-flex">
                        <h4 className="title-text mt-4 wide-desktop:mt-12 leading-normal">{project.title}</h4>
                        <p className="p-text" style={{ marginTop: 10 }}>{project.description}</p>

                        {project.caseStudy && (
                            <a href={project.caseStudy} target="_blank" rel="noopener noreferrer" className="project-card-badge app-flex group">
                                <p className="p-text">Case Study</p>
                                <div className='tablet:invisible group-hover:visible group-hover:translate-x-1 transition duration-700 ease-in-out'>
                                    <ArrowRightIcon className={'w-7 h-7 text-chartreuse-color fill-midnight-green'}/>
                                </div>
                            </a>
                        )}

                        <div className="project-card-tags">
                            {project.tags.map((tag, index) => (
                                <div key={index} className={`project-card-tag-item ${tagColors[normalizeTag(tag)]}`}>
                                    {normalizeTag(tag)}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}    
        </>        
    );
}

export default ProjectsCard