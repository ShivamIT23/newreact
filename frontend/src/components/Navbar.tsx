import { motion } from "framer-motion";
import Contact_Button from "./Contact_Button";
import NavLink_List from "./NavLink_List";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openMenu, setOpenMenu] = useState(false);

  const changeMenu = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      // Clean-up in case component unmounts with menu open
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
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
        {windowWidth < 750 && (
          <img
            src="hamburger.png"
            className="w-8 md:w-12 "
            onClick={() => {
              setOpenMenu(true);
            }}
          ></img>
        )}
      </motion.nav>
      {openMenu && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed z-50 top-0 right-0 bg-[linear-gradient(to_bottom,_#FFFFFF,_#F9F1E3)] h-screen w-screen"
        >
          <button className="absolute top-0 right-0 w-20 h-20 p-5">
            {" "}
            <img src="close.png" alt="" onClick={changeMenu} />
          </button>
          <div className="my-auto h-screen flex flex-col justify-evenly p-20 text-xl sm:text-2xl md:text-3xl xl:text-4xl">
            <Link
              className="mx-2 text-gray-800 font-medium hover:underline hover:text-blue-700 transition-all duration-200 ease-in-out "
              onClick={changeMenu}
              to="/"
            >
              Home
            </Link>
            <Link
              className="mx-2 text-gray-800 font-medium hover:underline hover:text-blue-700 transition-all duration-800 ease-in-out "
              to="/about"
              onClick={changeMenu}
            >
              About us
            </Link>
            <Link
              className="mx-2 text-gray-800 font-medium hover:underline hover:text-blue-700 transition-all duration-200 ease-in-out"
              to="/services"
              onClick={changeMenu}
            >
              Services
            </Link>
            <Link
              className="mx-2 text-gray-800 font-medium hover:underline hover:text-blue-700 transition-all duration-200 ease-in-out"
              to="/projects"
              onClick={changeMenu}
            >
              Projects
            </Link>
            <Link
              className="mx-2 text-gray-800 font-medium hover:underline hover:text-blue-700 transition-all duration-200 ease-in-out"
              to="/contact"
              onClick={changeMenu}
            >
              Contact
            </Link>
            <div>
            <Contact_Button />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
