import { motion } from "framer-motion";
import PageShower from "../components/PageShower";
import Service_Main from "../components/Service_Main";

const slideVariants = {
  initial: { x: "100%", opacity: 0 }, // Start offscreen right
  animate: { x: 0, opacity: 1 }, // Slide into center
  exit: {},
};

export default function Services() {
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
      className="p-10 pt-24 min-h-screen relative bg-white md:px-20 lg:px-[5vw]"
    >
      <h2 className="text-3xl lg:text-5xl font-semibold  text-start">
        What we offer
      </h2>
      <Service_Main />
      <PageShower>services</PageShower>
    </motion.div>
  );
}
