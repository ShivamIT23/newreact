import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavLink_List() {
    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname);
      }, [location]);
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About us</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </>
  );
}


function NavLink({
    to,
    children,
  }: {
    to: string;
    children: string;
  }) {
    const isActive = location.pathname === to;
  
    return (
      <Link
        to={to}
        className={`text-[#4F4F4F] py-2 px-4 rounded-md transition-all duration-200 ease-in-out ${
          isActive
            ? "text-blue-700"
            : "hover:bg-[#3076bb] hover:text-white"
        }`}
      >
        {children}
      </Link>
    );
  }