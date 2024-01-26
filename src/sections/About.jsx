import { useState, useEffect } from 'react';
import { ServiceCard } from "../components";
import { urlFor, client } from '../client';
import { AppWrap } from '../wrapper';



const About = AppWrap(() => {

  const [services, setServices] = useState([]);

  // Use the 'useEffect' hook to fetch data from the backend on component mount
  useEffect(() => {
    const query = '*[_type == "services"]'; // Define a query to fetch 'services' data from the backend

    // Fetch data using the 'client' and update the 'services' state with the fetched data
    client.fetch(query).then((data) => {
      setServices(data);
    });
  }, []);

  return (
    <section
      //className="bg-white w-full min-h-screen"
    >
      {/* Heading for the About section */}
      <h2 className="head-text">
        Crafting Excellence: <span className="text-[#7700ff]">Explore What I Offer.</span>
      </h2>

      {/* Render a list of about profiles using 'map' function */}
      <div className="flex justify-center tablet:justify-start items-start flex-wrap mt-8 tablet:px-28">
        {services.map((service, index) => (
          <ServiceCard key={service.title + index} image={urlFor(service.imgUrl)} {...service} />
        ))}
      </div>

    </section>
  )
}, 'about', 'bg-white');

export default About