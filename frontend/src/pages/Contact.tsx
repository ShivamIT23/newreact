import { motion } from "framer-motion";
import PageShower from "../components/PageShower";
import Contact_Main from "../components/Contact_Main";

const slideVariants = {
  initial: { x: "100%", opacity: 0 }, // Start offscreen right
  animate: { x: 0, opacity: 1 }, // Slide into center
  exit: {},
};

export default function Contact() {
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
      className="p-10 pt-24 min-h-fit h-[78vh] w-full relative flex justify-center items-center bg-white"
    >
      <Contact_Main />
      <PageShower>contact</PageShower>
    </motion.div>
  );
}
