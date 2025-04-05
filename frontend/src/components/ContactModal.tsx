// components/ContactModal.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Contact_Button from "./Contact_Button";

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [switchDiv, setSwitchDiv] = useState("phone");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50"
        onClick={onClose}
      >
        <motion.section
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full bg-white max-w-lg rounded-[30px] min-h-fit h-fit py-5 px-3 flex gap-4 flex-col justify-start items-center pt-14 relative"
        >
            <div onClick={onClose} className=" cursor-pointer w-6 flex justify-center items-center h-6 absolute top-0 right-0 mt-5 mr-5">
               <svg
            width="9"
            height="8"
            viewBox="0 0 9 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.49998 6.99998L4.50001 4.00001M4.50001 4.00001L1.5 1M4.50001 4.00001L7.50002 1M4.50001 4.00001L1.5 7.00002"
              stroke="#3076BB"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg> 
            </div>
          

          <h2 className="w-[342px] h-[96px] text-4xl font-semibold leading-[48px] text-center">
            We will be glab to contact you
          </h2>
          <div className="w-60 min-h-fit h-8 rounded grid grid-cols-2 border border-[#3076bb] transition">
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
          <p className="font-normal text-lg w-60 text-center">
            Give us your number and we will call you now
          </p>
          <div className="w-[342px] h-2/5 flex flex-col gap-5">
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
          <Contact_Button NotOpen={true} />
        </motion.section>
        {/* </motion.div> */}
      </motion.div>
    </AnimatePresence>
  );
}
