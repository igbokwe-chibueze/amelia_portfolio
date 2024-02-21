/* eslint-disable react/prop-types */
import { urlFor } from '../client';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

const scaleVariants = {
    hidden: { 
        opacity: 0, 
        scale: 0 
    },
    show: { 
        opacity: 1, 
        scale: 1, 
        transition: { 
            staggerChildren: 0.2 
        } 
    },
};
  

const scaleChildrenVariants = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
  

const SkillCard = ({ skills }) => {
  return (
    <motion.div
        variants={scaleVariants} // Animation variants for scale effect
        initial="hidden"
        whileInView="show"
        className='project-filter gap-12'
    >
        {skills.map((skill) => (
            <motion.div 
                data-tooltip-id="skillsTooltip"
                data-tooltip-content={skill.name}
                data-tooltip-place="top"

                variants={scaleChildrenVariants} // Animation variants for scale effect
                className='relative group w-20 h-20' 
                key={skill.name}
            >
                <div className='box-back' />
                <div className='box-center' />
                <div className='box-front flex justify-center items-center'>
                    <img
                    src={urlFor(skill.icon)}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                    />
                </div>
                {/* Display the skill name */}
                {/* <p className="p-text mt-24">{skill.name}</p> */}

                <Tooltip 
                    id="skillsTooltip"
                    className="skills-tooltip"
                />
            </motion.div>
        ))}
    </motion.div>
  )
}

export default SkillCard