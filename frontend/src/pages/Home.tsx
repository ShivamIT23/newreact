import { motion } from "framer-motion";
import Contact_Button from "../components/Contact_Button";
import Footer_Link from "../components/Footer_Link";
import Title_With_Contact from "../components/Title_With_Contact";
import Service_Main from "../components/Service_Main";

const slideVariants = {
  initial: { x: "100%", opacity: 0 },    // Start offscreen right
  animate: { x: 0, opacity: 1 },         // Slide into center
  exit: {},  
};

export default function Home() {
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
      className="min-h-screen bg-white overflow-hidden"
    >
      <section className="min-h-[60vh] h-fit bg-[linear-gradient(to_bottom,_#FFFFFF,_#F9F1E3)] flex gap-x-6 xl:gap-x-16 px-6 sm:px-12 lg:px-[5vw] py-12">
      <div className="w-[60%] flex flex-col justify-between">
        <div>
          <h2 className="font-bold text-[31px] min-h-[60%] md:text-6xl lg:text-7xl"> Transform Your Space with Midas Touch</h2>
        </div>
        <div>
          <Contact_Button />
        </div>
        <div>
          <Footer_Link />
        </div>
      </div>
      <div style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }} className="w-[44%] rounded-xl">
        <img src="/home1.jpeg" alt="img1" className="w-full rounded-xl h-full object-cover" />
      </div>
      </section>
      <div className="mt-10 -mx-6 lg:-mx-[60px]">
        <Title_With_Contact title="Our Services" />
      </div>
      <section className="my-10 px-[5vw] ">
        <Service_Main />
      </section>
      <div className="mt-10 -mx-6 lg:-mx-[60px]">
        <Title_With_Contact title="Recent Projects" />
      </div>
    </motion.div>
  );
}
