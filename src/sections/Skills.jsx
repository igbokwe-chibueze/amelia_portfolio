import { useState, useEffect } from 'react';
import { urlFor, client } from '../client';
import { AppWrap } from "../wrapper";
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { ExperienceTimeline } from '../components';

const Skills = AppWrap(() => {
  // Define state hooks to store the fetched experiences and skills data
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  // Fetch data for experiences and skills from the 'experiences' and 'skills' collections using 'client.fetch'
  useEffect(() => {
    // const query = '*[_type == "experiences"]';
    const query = '*[_type == "experiences"] | order(id desc)';
    const skillsQuery = '*[_type == "skills"]';

    // Fetch experiences data
    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    // Fetch skills data
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  
  return (
    <section>
      {/* The heading for the Skills & Experiences section */}
      <h2 className="head-text">Skills & Experiences</h2>

      {/* <div className='py-10 flex flex-col bg-red-300'> */}
      <div className=''>
        <h3 className='title-text'>My Skills</h3>

        <div className='project-filter gap-12'>
          {skills.map((skill) => (
            <div 
              data-tooltip-id="skillsTooltip"
              data-tooltip-content={skill.name}
              data-tooltip-place="top"
              className='relative group w-20 h-20' 
              key={skill.name}
            >
              <div className='box-back' />
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
            </div>
          ))}
        </div>

        <div className='mt-24' >
          <h3 className='title-text'>Experience</h3>

          <div className='my-4'>
            <ExperienceTimeline experiences={experiences} />
          </div>
        </div>
      </div>


    </section>
  )
}, 'skills', 'bg-tea-green');

export default Skills