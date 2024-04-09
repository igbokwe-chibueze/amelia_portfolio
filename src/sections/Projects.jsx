import { useState, useEffect } from 'react';
import { AppWrap, MotionWrap } from "../wrapper";
import { motion } from 'framer-motion';
import { ProjectsCard, FetchData, SkeletonProjects } from '../components';
import { ArrowRightIcon } from '../constants/icons';
import { Link } from 'react-router-dom';

const Projects = MotionWrap(AppWrap(() => {

  const { error, isPending, data: projects } = FetchData('*[_type == "projects" && favourite == true]')

  const [filterdProject, setFilterdProject] = useState([]); // Stores filtered projects based on the active filter
  const [activeFilter, setActiveFilter] = useState('all'); // Tracks the currently active filter
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 }); // Controls animation for project cards

  // State variable to store the filter options (tags extracted from fetched projects)
  const [filterOptions, setFilterOptions] = useState([]);

  useEffect(() => {
    const tags = projects.reduce((allTags, project) => {
      return [...allTags, ...project.tags];
    }, []);

    // Remove duplicate tags using a Set and convert it back to an array
    const uniqueTags = Array.from(new Set(tags));

    // Check if 'all' tag is present in the tags
    const isAllTagPresent = uniqueTags.includes('all');

    if (isAllTagPresent) {
      // If 'All' tag is present, sort the tags to ensure 'All' comes last
      uniqueTags.sort((a, b) => (a === 'all' ? 1 : b === 'all' ? -1 : 0));
    }


    // Set the unique tags as filter options in the state
    setFilterOptions(uniqueTags);

    //setProjects(data); // Update the 'projects' state with fetched data
    setFilterdProject(projects); // Update the 'filterProject' state to initially display all projects
  }, [projects]);

  const handleProjectsFilter = (item) => {
    setActiveFilter(item); // Set the active filter to the selected category
    setAnimateCard([{ y: 100, opacity: 0 }]); // Animate project cards off-screen
    
    // Function to normalize a string by converting it to lowercase and removing special characters
    const normalizeString = (str) => {
      return str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    };
  
    // Function to check if a given tag matches a given category, regardless of case and special characters
    const isTagMatching = (tag, category) => {
      // Normalize both tag and category for case-insensitive and special character handling
      const normalizedTag = normalizeString(tag);
      const normalizedCategory = normalizeString(category);
  
      // Check if the normalized tag includes the normalized category (case-insensitive matching)
      return normalizedTag.includes(normalizedCategory);
    };
  
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]); // Animate project cards back into view
      
      // Convert the selected category to a normalized form for comparison
      const normalizedItem = normalizeString(item);
      
      if (normalizedItem === 'all') {
        // If 'All' category is selected, display all projects (no filtering needed)
        setFilterdProject(projects);
      } else {
        // Otherwise, filter projects to display those with matching tags (using custom comparison)
        setFilterdProject(projects.filter((project) => project.tags.some((tag) => isTagMatching(tag, normalizedItem))));
      }
    }, 500); // Wait for the animation to complete before updating filtered projects
  };

  return (
    <section className='w-full min-h-screen'>
      {/* Heading for the Projects section */}
      <h2 className="head-text">
        Crafting Excellence: <span className="text-electric-indigo">Explore What I Offer.</span>
      </h2>

      {/* Render the Projects filters */}
      <div className="project-filter">
        {filterOptions.map((item, index) => (
          <div
            key={index}
            onClick={() => handleProjectsFilter(item)}
            className={`z-10 project-filter-item p-text ${activeFilter === item ? 'bg-midnight-green text-chartreuse-color' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        <div className="mt-4 flex justify-center items-center w-full">
          <Link
            to={'projects'}
            className='z-20 flex justify-center items-center border gap-4 group px-8 py-2
            text-lg tablet:text-2xl font-bold leading-none rounded-full 
            bg-chartreuse-color hover:bg-[#6BC800] text-midnight-green border-midnight-green'
          >
            <p>See More</p>
            <ArrowRightIcon
              className="w-[50px] h-[30px] text-chartreuse-color fill-midnight-green"
            />
          </Link>
        </div>

        {/* Render the project portfolio using 'motion' for animations */}
        <motion.div
          className="project-container"
        >
          { error && <div>{ error }</div> }
          { isPending && (
            <SkeletonProjects count={4} type={'skeleton-wrapper-project'}/>
          )}
          {projects && 
            (<ProjectsCard projects={filterdProject} type={"project-card"}/>)
          }
        </motion.div>
      </motion.div>
    </section>
  )
}, 'projects'));

export default Projects