/* eslint-disable react/prop-types */
import { useState } from 'react';
import { urlFor } from '../client';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceTimeline = ({ experiences }) => {

    const [visibleCount, setVisibleCount] = useState(4); // Number of initially visible elements

    const loadMore = () => {
        setVisibleCount(visibleCount + 3); // Increase the visible count by 3 when "Load More" is clicked
    };

  return (
    <div  className='max-w-56 tablet:max-w-full'>
      <VerticalTimeline 
        lineColor={'#006B7A'} // Set the line color
      >
        {experiences.slice(0, visibleCount).map((experience) => (
          <VerticalTimelineElement
            key={experience.organisation}
            date={experience.date}
            dateClassName="text-midnight-green"
            iconStyle={{ 
              background: experience.iconBg,
            }}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <img
                  src={urlFor(experience.icon)}
                  alt={experience.organisation}
                  className='w-[60%] h-[60%] object-contain'
                />
              </div>
            }
            contentStyle={{
              borderTop: "8px",
              borderStyle: "solid",
              borderTopColor: experience.iconBg,
              boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
              background: experience.cardBg, // Set the card bg color
              color: experience.textColor, // Set text color
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${experience.cardBg}`,
            }}
          >
            <div>
              <h3 className='text-xl font-poppins font-semibold'>
                {experience.name}
              </h3>
              <p
                className='font-medium text-base'
                style={{ margin: 0 }}
              >
                {experience.organisation}
              </p>
            </div>

            <ul className='my-5 list-disc ml-5 space-y-2'>
              {experience.desc.map((desc, index) => (
                <li
                  key={`description-${index}`}
                  className='text-black-500/50 font-normal pl-1 text-sm'
                >
                  {desc}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
        {/* Load More button as a timeline element */}
        {visibleCount < experiences.length && (
          <VerticalTimelineElement
            iconStyle={{ 
              background: 'transparent'
            }} // Set a transparent background for the icon
            icon={
              <button 
                onClick={loadMore} 
                className=" w-full h-full justify-center items-center bg-blue-500 hover:bg-blue-700 transition duration-700 ease-in-out
                text-white font-bold tablet:py-2 px-2 rounded-full text-xl tablet:text-4xl"
              >
                +
              </button>
            }
          />
        )}
      </VerticalTimeline>
    </div>  
  );
};

export default ExperienceTimeline;
