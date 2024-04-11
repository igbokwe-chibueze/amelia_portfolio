import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ initialValue = 0, endValue = 0, duration = 3000 }) => {
  
  const [count, setCount] = useState(initialValue);
  const ref = useRef(null);

  useEffect(() => {
    let startTimestamp; // Variable to store the start timestamp of the animation
    let requestId; // Variable to store the request ID for animation frame

    const startAnimation = (timestamp) => {
      // Function to start the animation
      if (!startTimestamp) startTimestamp = timestamp; // Set the start timestamp if it's not already set
      const elapsed = timestamp - startTimestamp; // Calculate the elapsed time since the animation started
      const progress = Math.min(elapsed / duration, 1); // Calculate the progress of the animation (between 0 and 1)
      setCount(Math.floor(initialValue + (endValue - initialValue) * progress)); // Update the count based on the progress of the animation

      if (progress < 1) {
        // If the animation is not finished yet
        requestId = requestAnimationFrame(startAnimation); // Request the next animation frame
      }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset count to initialValue when in view
            setCount(initialValue);
            // Restart animation
            startTimestamp = null;
            requestId = requestAnimationFrame(startAnimation); // Start the animation by requesting the first animation frame
          }
        });
    });
  
      observer.observe(ref.current);
  
      return () => {
        observer.disconnect();
        // Cleanup function to cancel the animation frame when the component unmounts
        cancelAnimationFrame(requestId); // Cancel the animation frame
    };
  }, [initialValue, endValue, duration]); // Dependency array to re-run the effect when these values change

  return (
    <span ref={ref}>
        {count}
    </span>
  );
};

Counter.propTypes = {
  initialValue: PropTypes.number, // Initial value of the counter
  endValue: PropTypes.number.isRequired, // End value of the counter (required)
  duration: PropTypes.number, // Duration of the animation
};

export default Counter;