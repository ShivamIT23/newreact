import { motion } from "framer-motion";

const slideVariants = {
  initial: { x: "100%", opacity: 0 },    // Start offscreen right
  animate: { x: 0, opacity: 1 },         // Slide into center
  exit: { x: "-100%", opacity: 0 },      // Slide out to the left
};

export default function Projects() {
  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        type: "spring",
        mass: 1,
        stiffness: 100,
        damping: 15,
      }}
      className="p-10 min-h-screen bg-white"
    >
      <h1 className="text-3xl font-bold">Projects Page</h1>
    </motion.div>
  );
}
