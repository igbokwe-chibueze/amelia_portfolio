/* eslint-disable react/prop-types */
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";


const ProgressCircle = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  return (
    <div>
      <figure>
        <motion.svg
          width={36}
          height={35}
          xmlns="http://www.w3.org/2000/svg"
          overflow="hidden"
        >
          <motion.path
            d="M3 17.5C3 8.94 9.716 2 18 2c8.284 0 15 6.94 15 15.5C33 26.06 26.284 33 18 33 9.716 33 3 26.06 3 17.5Z"
            stroke="#006B7A"
            strokeWidth={3}
            strokeMiterlimit={8}
            fill="none"
            style={{
              pathLength: scrollYProgress,}}
          />
          <path
            d="M3 17.5C3 8.94 9.716 2 18 2c8.284 0 15 6.94 15 15.5C33 26.06 26.284 33 18 33 9.716 33 3 26.06 3 17.5Z"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M15.25 26V13.5H13L17.5 9l4.5 4.5h-2.25V26Z"
            fill="#006B7A"
            fillRule="evenodd"
          />
        </motion.svg>
      </figure>
    </div>
  );
}

export default ProgressCircle