import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavLink_List() {
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

function NavLink({ to, children }: { to: string; children: string }) {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={` py-2 px-5 whitespace-nowrap rounded-md transition-all duration-200 ease-in-out ${
        isActive
          ? "text-[#3076bb]"
          : "text-[#4F4F4F] hover:bg-[#3076bb] hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}
