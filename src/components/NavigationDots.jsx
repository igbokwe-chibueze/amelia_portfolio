import { allNavLinks } from "../constants/data"
import { Link } from "react-scroll"



const NavigationDots = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      {allNavLinks.map((link, index) => (
        <Link
          key={index}
          to={link.href}
          smooth={true}
          duration={500}
          offset={-90} // Scroll additional px ( like padding )Adjust based on your layout, Should be preferable zero
          spy={true} //Make Link selected when scroll is at its targets position
          activeClass="bg-chartreuse-color" //class applied when element is reached
          className="cursor-pointer w-2.5 h-2.5 rounded-full border border-midnight-green m-2 bg-caribbean-current hover:bg-chartreuse-color"
        ></Link>
      ))}
    </div>
  )
}

export default NavigationDots