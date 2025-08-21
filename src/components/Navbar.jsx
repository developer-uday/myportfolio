import React from "react";
import blackLogo from "../assets/logoBlack.svg";
import { Link } from "react-router-dom";
import GSAPmagnet from "./GSAPmagnet";

const Navbar = () => {
  return (
    <div className="w-[100%] h-28 absolute flex justify-between items-center font-Montserrat px-22">
      <GSAPmagnet>
        <img src={blackLogo} alt="LOGO" className="relative h-auto w-40" />
      </GSAPmagnet>
      <div className="flex items-center gap-10 text-base font-normal">
        <Link
          className="hover:-translate-y-1.5 transition-all ease-in-out duration-500 px-2 py-4"
          to="/"
        >
          Home
        </Link>
        <Link
          className="hover:-translate-y-1.5 transition-all ease-in-out duration-500 px-2 py-4"
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className="hover:-translate-y-1.5 transition-all ease-in-out duration-500 px-2 py-4"
          to="/contact-me"
        >
          Inspiration
        </Link>
        <button className="bg-black text-white text-base font-medium px-4 py-2.5 rounded hover:px-8 shadow-custom transition-all ease-out duration-500 cursor-pointer">
          @gmail.com
        </button>
      </div>
    </div>
  );
};

export default Navbar;
