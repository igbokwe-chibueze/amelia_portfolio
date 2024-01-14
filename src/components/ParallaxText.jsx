/* eslint-disable react/prop-types */
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";

const ParallaxText = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const smoothVelocity = useSpring(useVelocity(scrollY), { damping: 100, stiffness: 100 }); //damping: affects how quickly the text reverses depending on scroll speed, the higher the better. stiffness: affects the smoothness when the text starts all over, the lower the better.
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: true}); //clamp: false, reverses text on scroll, clamp: true, no reverse.

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {/* 
            * The number of times to repeat the child text should be dynamically calculated
            * based on the size of the text and viewport. Likewise, the x motion value is
            * currently wrapped between -20 and -45% - this 25% is derived from the fact
            * we have four children (100% / 4). This would also want deriving from the
            * dynamically generated number of children. 
        */}
        {[...Array(4)].map((_, index) => (
            <span key={index} className="block mr-8">
                {children}
            </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ParallaxText;
