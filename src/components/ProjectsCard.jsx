/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion"
import { ArrowRightIcon, EarthIcon, EyeIcon } from "../constants/icons"

const laptopScreenWidth = 1024;

const normalizeTag = (tag) => {
    return tag.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
};

const ProjectsCard = ({ image, title, description, projectLink, liveLink, caseStudy, tags }) => {
    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    const renderMobileToggle = () => {
        return (
            window.innerWidth < laptopScreenWidth && (
                <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileTap={{ scale: 0.3 }}
                    transition={{ duration: 0.25 }}
                    onClick={toggleLinks}
                    className="absolute top-0 right-0 rounded-full bg-midnight-green/60 m-4"
                >
                    <EyeIcon className={'fill-white w-2/4 h-2/4'}/>
                </motion.div>
            )
        );
    };

    const renderLinks = () => {
        return (
            (showLinks || window.innerWidth >= laptopScreenWidth) && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={window.innerWidth < laptopScreenWidth ? { scale: [0, 1], opacity:[0, 1] } : { scale: 1 }}
                    whileHover={window.innerWidth >= laptopScreenWidth ? { opacity: [0, 1] } : { opacity: [0] }}
                    transition={{ duration: 0.5, ease: 'easeInOut', staggerChildren: 0.5 }}
                    onClick={toggleLinks}
                    className="project-card-hover app-flex"
                    // className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-black/50 rounded-lg app-flex"
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
            )
        );
    };

    return (
        <motion.div
            whileInView={{opacity: [0, 1] }}
            transition={{ opacity: { duration: 1.0, type: 'tween' }}}
            className="project-card app-flex"
        >
            <div className="project-card-img app-flex">
                <img src={image} alt={title} className='w-full h-full rounded-lg object-cover' />
                {renderMobileToggle()}
                {renderLinks()}
            </div>

            <div className="project-card-content app-flex">
                <h4 className="title-text mt-4 wide-desktop:mt-12 leading-normal">{title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>{description}</p>

                {caseStudy && (
                    <a href={caseStudy} target="_blank" rel="noopener noreferrer" className="project-card-badge app-flex group">
                        <p className="p-text">Case Study</p>
                        <div className='tablet:invisible group-hover:visible group-hover:translate-x-1 transition duration-700 ease-in-out'>
                            <ArrowRightIcon className={'w-7 h-7 text-chartreuse-color fill-midnight-green'}/>
                        </div>
                    </a>
                )}

                <div className="project-card-tags">
                    {tags.map((tag, index) => (
                        <div key={index} className='project-card-tag-item'>
                            {normalizeTag(tag)}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectsCard;
