/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { urlFor, client } from '../client';
import { AppWrap } from "../wrapper";
import { motion } from 'framer-motion';
import { TestimonialCard } from '../components';
import { Tooltip } from 'react-tooltip';

const Testimonials = AppWrap(() => {

  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  // Fetch testimonials and brands data using the 'client' object on component mount
  useEffect(() => {
    // Define queries to fetch data from the 'testimonials' and 'brands' collections
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    // Fetch testimonials data
    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    // Fetch brands data
    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (

    <section className='w-full min-h-screen'>
      <h2 className="head-text">
        What People Are Saying: <span className="text-[#7700ff]">Hear genuine stories of satisfied clients.</span>
      </h2>

      {/* Render the Testimonials */}
      <div className='mt-8'>
        <TestimonialCard testimonials={testimonials} />
      </div>

      {/* Render the brand logos */}
      <div className="flex flex-wrap justify-center items-center space-x-8 mt-20 mb-4">
        {/* Map through the brands data to render each brand logo with a motion effect */}
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}

            key={brand._id}
            className="w-36 tablet:w-48 wide-desktop:w-72"

            data-tooltip-id="skillsTooltip"
            data-tooltip-content={brand.name}
            data-tooltip-place="top"
          >
            {/* Display the image of the current brand */}
            <a href={ brand.brandlink} target="_blank" rel="noopener noreferrer" className="">
              <img
                src={urlFor(brand.imgUrl)}
                alt={brand.name}
                className="w-full h-auto object-cover filter grayscale hover:grayscale-0"
              />
              <Tooltip 
                id="skillsTooltip"
                style={{ backgroundColor: "#88FF00", color: "#006B7A" }}
              />
            </a>
          </motion.div>
        ))}
      </div>

    </section>
  )
}, 'testimonials', 'bg-tea-green');

export default Testimonials