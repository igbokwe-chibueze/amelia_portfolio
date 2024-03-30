// The 'MotionWrap' is a Higher-Order Component (HOC) that adds motion effects to a given component.
// It takes two parameters - 'Component' (the component to wrap with motion) and 'classNames' (custom class names).
// The HOC returns a new functional component that wraps the 'Component' with Framer Motion div.

import { motion } from 'framer-motion';

// Define the 'MotionWrap' function that takes 'Component' and 'classNames' as parameters
const MotionWrap = (Component, classNames) => function HOC() {
  // Return the wrapped component with motion effects
  return (
    // Use the 'motion.div' component from Framer Motion to add motion to the wrapped component
    <motion.div
      // Set motion properties for the wrapped component
      whileInView={{ y: [100, 0], opacity: [0, 1] }} // Animation effect for horizontal sliding from left and opacity change from transparent to full
      transition={{ duration: 1.5 }}
      className={`${classNames}`} // Apply custom class names along with 'app__flex' class
    >
      {/* Render the 'Component' that is passed as a parameter */}
      <Component />
    </motion.div>
  );
};

// Export the 'MotionWrap' HOC
export default MotionWrap;
