import { motion } from "framer-motion";
import PageShower from "../components/PageShower";
import ServiceCard from "../components/ServiceCard";
import {subServicesList} from "../lib/content"

const slideVariants = {
  initial: { x: "100%", opacity: 0 }, // Start offscreen right
  animate: { x: 0, opacity: 1 }, // Slide into center
  exit: { x: "-100%", opacity: 0 }, // Slide out to the left
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
      className="p-10 pt-24 min-h-screen relative bg-white px-[101px]"
    >
      <h2 className="text-5xl font-semibold  text-start">What we offer</h2>
      <section className="grid grid-cols-3 mt-10 snap-y snap-mandatory gap-y-6 mx-auto">
        {subServicesList.map((service, index:number)=>{
          return(
            <div key={index} className="snap-start col-span-1">
              <ServiceCard src={service.image} title={service.title} />
            </div>
          )
        })}
      </section>
      <PageShower>services</PageShower>
    </motion.div>
  );
}
