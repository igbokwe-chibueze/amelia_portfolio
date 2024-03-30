import { useState, useEffect } from 'react';
import { client } from '../client';
import { AppWrap, MotionWrap } from "../wrapper";
import { ExperienceTimeline, SkillCard } from '../components';

const Skills = MotionWrap(AppWrap(() => {
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
    <section className='w-full min-h-screen'>
      {/* The heading for the Skills & Experiences section */}
      <h2 className="head-text">Skills & Experiences</h2>

      <div>
        <div className='mt-8 mx-10 w-auto flex justify-center tablet:justify-start items-start flex-wrap tablet:px-8'>
          <h3 className='title-text'>My Skills</h3>
          <SkillCard skills={skills} />
        </div>

        <div className='mt-8'>
          <h3 className='title-text text-center'>Experience</h3>
          <ExperienceTimeline experiences={experiences} />
        </div>
      </div>
    </section>
  )
}, 'skills', 'bg-tea-green'));

export default Skills