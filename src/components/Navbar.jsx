import React, { useState } from "react";
import blackLogo from "../assets/logoBlack.svg";
import { Link, useLocation } from "react-router-dom";
import GSAPmagnet from "./GSAPmagnet";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <nav
        className={`w-full h-15 sm:h-18 fixed top-0 left-0 flex justify-between items-center font-Montserrat px-4 sm:px-8 md:px-12 lg:px-16 backdrop-blur-md bg-white/70 z-50 border-b border-gray-200 ${isHome ? "cursor-none" : "cursor-auto"}`}
      >
        {/* Logo */}
        <GSAPmagnet>
          <Link to="/">
            <img
              src={blackLogo}
              alt="Uday Logo"
              className="h-auto w-24 sm:w-32 md:w-36 cursor-pointer"
            />
          </Link>
        </GSAPmagnet>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12 text-sm lg:text-base">
          {["Home", "Projects", "Support"].map((item, i) => (
            <Link
              key={i}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative group"
            >
              <span className="transition-all duration-300 group-hover:-translate-y-1 inline-block">
                {item}
              </span>

              {/* underline animation */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Email Button */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=developeruday6202@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white text-sm lg:text-base px-4 py-2 rounded-lg hover:-translate-y-0.5 duration-300 transition-all shadow-md inline-block"
          >
            @gmail.com
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-[100dvh] w-1/2 bg-white shadow-md p-6 z-50 transform transition-transform duration-300 flex flex-col ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top Links */}
        <div>
          {["Home", "Projects", "Support"].map((item, i) => (
            <Link
              key={i}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 text-sm hover:translate-x-1 transition-all"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Bottom Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=developeruday6202@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto block w-full bg-black text-white text-center py-3 rounded-lg text-sm"
        >
          @gmail.com
        </a>
      </div>
    </>
  );
};

export default Navbar;
