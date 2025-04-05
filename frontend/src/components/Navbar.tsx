import { motion } from "framer-motion";
import Contact_Button from "./Contact_Button";
import NavLink_List from "./NavLink_List";

export default function Navbar() {

  return (
    <motion.nav
    initial={{y:-100}}
    animate={{y:0 }}
    transition={{duration:1 , type:"spring"}}
    className="w-full min-h-[84px] px-[5vw] flex justify-between items-center">
      <div className="flex items-center cursor-pointer min-w-fit">
        <img src="/Logo.png" alt="logo" className="w-[72px]" />
        <h2 className="font-bold text-3xl">MIDAS TOUCH</h2>
      </div>
      <div className="flex items-center text-xl justify-between font-semibold">
        <NavLink_List />
      </div>
      <div>
        <Contact_Button />
      </div>
    </motion.nav>
  );
}
