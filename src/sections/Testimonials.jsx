/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { client } from '../client';
import { AppWrap, MotionWrap } from "../wrapper";
import { motion } from 'framer-motion';
import { TestimonialCard, ParallaxText, BrandsComponent } from '../components';

const Testimonials = MotionWrap(AppWrap(() => {

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
      <div className='my-8 ml-8'>
        <TestimonialCard testimonials={testimonials} />
      </div>

      {/* Render the brand logos */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, type: 'tween' }}
        className="mt-20 mb-4 mx-2 tablet:max-w-[69rem]"
      >
        {/* Map through the brands data to render each brand logo with a motion effect */}
        <ParallaxText baseVelocity={-2} clamp={false}>
          <BrandsComponent brands={brands}/>
        </ParallaxText>
        <ParallaxText baseVelocity={2} clamp={false}>
          <BrandsComponent brands={brands}/>
        </ParallaxText>
        
      </motion.div>


    </section>
  )
}, 'testimonials', 'bg-tea-green'));

export default Testimonials