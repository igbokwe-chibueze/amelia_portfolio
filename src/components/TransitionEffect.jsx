/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const PrivacyScreen = ({ color, zIndex, delay = 0 }) => {

  return (
    <motion.div
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0, transition: { delay, duration: 0.5, ease: "easeInOut" } }}
      exit={{ scaleX: 1, transition: { duration: 0.5, ease: "easeInOut" }, style: {originX: 1} }}
      style={{ originX: 0 }}
      className={`privacy-screen ${color} ${zIndex}`}
    />
  );
};

const TransitionEffect = () => {
  return (
    <>
      <PrivacyScreen color="bg-midnight-green" zIndex="z-50"/>
      <PrivacyScreen color="bg-chartreuse-color" zIndex="z-40" delay={0.2} />
      <PrivacyScreen color="bg-electric-indigo" zIndex="z-30" delay={0.4} />
    </>
  );
};

export default TransitionEffect;
