import { motion } from "framer-motion";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Contact_Button({
  NotOpen = false,
}: {
  NotOpen?: boolean;
}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.05, // subtle bounce instead of width/height change
        }}
        transition={{
          type: "spring",
          mass: 1,
          stiffness: 100,
          damping: 15,
        }}
        onClick={() => setModalOpen(true)}
        className="bg-[#3076bb] group rounded-md flex items-center w-40 h-12 my-auto origin-right"
      >
        <p className="pl-4 pr-2 text-white text-[16px] font-semibold poppins">Contact Us</p>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block"
        >
          <rect width="40" height="40" rx="2" fill="white" />
          <g className="transition-transform duration-300 origin-center group-hover:scale-x-[-1]">
            <path
              d="M15 25L25 15"
              stroke="#3076BB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 15H25V25"
              stroke="#3076BB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </motion.button>
      {!NotOpen && (
        <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
