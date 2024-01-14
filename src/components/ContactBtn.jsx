import { useRef } from "react"
import PropTypes from "prop-types";

const ContactBtn = ({ 
    children, 
    text, 
    backgroundColor,
    textColor,
    borderColor,
    ...props 
}) => {
  const ref = useRef(null)

  return (
    <button
      className={`
        flex p-1 items-center rounded-lg
        text-white ${
            backgroundColor
              ? `${backgroundColor} ${textColor} ${borderColor}`
              : "bg-gray-600 border-2 border-gray-500"
          } rounded-full relative group`}
      
      {...props}
    >
      {children}
      <div
        className="hidden group-hover:flex"
      >
        <span ref={ref} className="px-1.5">
          {text}
        </span>
      </div>
    </button>
  )
}

ContactBtn.propTypes = {
    children: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    textColor: PropTypes.string,
  };

export default ContactBtn