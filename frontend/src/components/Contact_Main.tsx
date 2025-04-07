import { useState } from "react";
import Contact_Button from "./Contact_Button";
import { AnimatePresence, motion } from "framer-motion";

export default function Contact_Main() {
  const [switchDiv, setSwitchDiv] = useState("phone");
  return (
    <section className="w-full min-h-[55vh] h-fit py-5 px-3 flex gap-4 flex-col justify-start items-center">
      <h2 className="w-[99%] md:w-[342px] min-h-fit h-[96px] text-2xl md:text-3xl lg:text-4xl font-semibold leading-[48px] text-center">
        We will be glad to contact you
      </h2>
      <div className="w-[80%] md:w-60 min-h-fit h-8 rounded grid grid-cols-2 border border-[#3076bb] transition">
        <button
          onClick={() => setSwitchDiv("phone")}
          className={`col-span-1 px-auto py-1 transition-all duration-300 ease-out ${
            switchDiv == "phone"
              ? " bg-[#3076bb] text-white "
              : "bg-white text-inherit"
          }`}
        >
          Phone Number
        </button>
        <button
          onClick={() => setSwitchDiv("email")}
          className={`col-span-1 px-auto py-1 transition-all duration-300 ease-out ${
            switchDiv !== "phone"
              ? " bg-[#3076bb] text-white "
              : "bg-white text-inherit"
          }`}
        >
          Email
        </button>
      </div>
      <p className="font-normal text-lg w-[80%] nd:w-60 text-center">
        Give us your number and we will call you now
      </p>
      <div className="w-[99%] md:w-[342px] h-2/5 flex flex-col gap-5">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="py-4 pl-5 pr-2 border w-full rounded"
        />
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
  );
}
