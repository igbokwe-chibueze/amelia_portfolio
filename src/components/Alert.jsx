/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { CheckCircleIcon, XCircleIcon } from "../constants/icons";

const scaleVariants = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const Alert = ({ type, text }) => {
  return (
    <motion.div 
      variants={scaleVariants}
      initial="hidden"
      animate="show"
      className='absolute bottom-8 right-4 left-3 tablet:left-auto z-20 flex justify-center items-center'
    >
      <div
        className={`p-2 h-12 ${
          type === "danger" ? "border-red-800" : "border-blue-800"
        } border items-center bg-white text-midnight-green leading-none rounded-lg flex shadow-2xl`}
        role='alert'
      >
        <p
          className={`flex items-center rounded-full text-white mr-2 tablet:mr-3`}
        >
          {type === "danger" ? <XCircleIcon className={"w-[35px] h-[35px] fill-red-800"}/> : <CheckCircleIcon className={"w-[35px] h-[35px] fill-blue-800"}/>}
        </p>

        <p className='tablet:mr-2 text-left'>{text}</p>
      </div>
    </motion.div>
  );
};

export default Alert;
