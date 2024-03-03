import { motion } from "framer-motion";
import { useFollowPointer } from "./UseFollowPointer";

const FollowPointer = () => {
    const { point, ref } = useFollowPointer();

  return (
    <div className="">
      <motion.div
        ref={ref}
        className="fixed h-3 w-3 ring-2 ring-caribbean-current rounded-full"
        animate={{ x: point.x, y: point.y }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          restDelta: 0.001,
        }}
      />
      <motion.div
        ref={ref}
        className="fixed h-3 w-3 bg-electric-indigo rounded-full"
        animate={{ x: point.x, y: point.y }}
        transition={{
          type: "spring",
          damping: 12,
          stiffness: 300,
          restDelta: 0.001,
        }}
      />
    </div>
  )
}

export default FollowPointer