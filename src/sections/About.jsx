import { ServiceCard } from "../components";
import { images } from "../constants";



// Assuming you have an array named servicesData
const servicesData = [
  {
    image: images.about01,
    title: 'UI/UX Designe',
    description: 'React Native developers build mobile apps that bridge the gap between native performance and cross-platform flexibility.',
  },
  {
    image: images.about02,
    title: 'Graphics Designe',
    description: 'Frontend development brings digital visions to life, shaping the user experience with code and creativity.',
  },
  {
    image: images.about03,
    title: 'Project Management',
    description: 'Backend developers orchestrate the digital symphony, powering applications and services hidden behind the curtains.',
  },
  {
    image: images.about04,
    title: 'Content Writing',
    description: 'Web designers craft digital experiences that blend aesthetics and functionality into pixel-perfect artistry.',
  },
  {
    image: images.about04,
    title: 'Service 4',
    description: 'Web designers craft digital experiences that blend aesthetics and functionality into pixel-perfect artistry.',
  },
];

const About = () => {
  return (
    <section
      id='about'
      className="bg-white w-full min-h-screen"
    >
      {/* Heading for the About section */}
      <h2 className="head-text">
        {/* I Know that <span className="text-[#7700ff]">Good Design</span> <br />means  <span className="text-[#7700ff]">Good Business</span> */}
        Crafting Excellence: <span className="text-[#7700ff]">Explore What I Offer.</span>
      </h2>

      {/* Render a list of about profiles using 'map' function */}
      <div className="flex justify-start items-start flex-wrap mt-8 px-28">
        {servicesData.map((service, index) => (
          <ServiceCard key={service.title + index} {...service} />
        ))}
      </div>

    </section>
  )
}

export default About