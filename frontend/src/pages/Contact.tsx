import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Contact_Button from "../components/Contact_Button";
import PageShower from "../components/PageShower";

const slideVariants = {
  initial: { x: "100%", opacity: 0 }, // Start offscreen right
  animate: { x: 0, opacity: 1 }, // Slide into center
  exit: { x: "-100%", opacity: 0 }, // Slide out to the left
};

export default function Contact() {
  const [switchDiv , setSwitchDiv] = useState("phone");
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
      <section className="w-full min-h-fit h-fit py-5 px-3 flex gap-4 flex-col justify-start items-center">
        <h2 className="w-[342px] h-[96px] text-4xl font-semibold leading-[48px] text-center">
          We will be glab to contact you
        </h2>
        <div className="w-60 min-h-fit h-8 rounded grid grid-cols-2 border border-[#3076bb] transition">
          <button onClick={()=> setSwitchDiv("phone")} className={`col-span-1 px-auto py-1 transition-all duration-300 ease-out ${switchDiv == "phone" ? " bg-[#3076bb] text-white ":"bg-white text-inherit"}`}>Phone Number</button>
          <button onClick={()=> setSwitchDiv("email")} className={`col-span-1 px-auto py-1 transition-all duration-300 ease-out ${switchDiv !== "phone" ? " bg-[#3076bb] text-white ":"bg-white text-inherit"}`}>Email</button>
        </div>
        <p className="font-normal text-lg w-60 text-center">Give us your number and we will call you now</p>
        <div className="w-[342px] h-2/5 flex flex-col gap-5">
        <input type="text" name="name" placeholder="Your Name" className="py-4 pl-5 pr-2 border w-full rounded" />
        <div className="relative h-16">
        <AnimatePresence mode="wait">
          {switchDiv === "phone" ? (
            <motion.input
              key="phone"
              type="text"
              placeholder="(+33)7 00 55 59 27"
              className="absolute top-0 left-0 w-full py-4 pl-5 pr-2 border rounded"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <motion.input
              key="email"
              type="email"
              placeholder="Your Email"
              className="absolute top-0 left-0 w-full py-4 pl-5 pr-2 border rounded"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </div>
        </div>
        <Contact_Button />
      </section>
      <PageShower >contact</PageShower>
    </motion.div>
  );
}
