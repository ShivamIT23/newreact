import { motion } from "framer-motion";
import Contact_Button from "./Contact_Button";
import NavLink_List from "./NavLink_List";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, type: "spring" }}
      className="w-full min-h-[84px] px-[5vw] lg:pl-[5vw] lg:pr-0 flex justify-between items-center"
    >
      <div className="flex items-center cursor-pointer min-w-fit">
        <img src="/Logo.png" alt="logo" className="w-12 lg:w-[72px]" />
        <h2 className="font-bold text-xl lg:text-3xl">MIDAS TOUCH</h2>
      </div>
      {windowWidth > 750 && (
        <div className="flex items-center lg:text-xl justify-between font-semibold">
          <NavLink_List />
        </div>
      )}
      {windowWidth > 900 && (
        <div className="lg:mr-[5vw]">
          <Contact_Button />
        </div>
      )}
    </motion.nav>
  );
}
