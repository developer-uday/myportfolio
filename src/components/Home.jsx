import React, { useState } from "react";
import portrait from "../assets/images/portrait.png";
import SocialButtons from "./Social-Buttons";
import Cursor from "./Cursor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Cursor />

      <div className="flex items-center flex-col w-full min-h-screen p-4 sm:px-8 md:px-16 pt-10 sm:pt-16 md:pt-28 font-Montserrat cursor-none overflow-hidden">
        <SocialButtons />

        {/* Intro */}
        <h1 className="text-sm sm:text-lg md:text-2xl mb-2 mt-20 sm:mt-12 md:mt-8 lg:mt-0 text-center">
          Hi, My name is Uday Pratap Singh and I am a ...
        </h1>

        {/* Main Heading */}
        <div className="flex flex-col items-center leading-none text-center">
          {/* Fullstack */}
          <h1
            className={`text-[4rem] sm:text-[5rem] md:text-[8rem] lg:text-[11rem] font-mediasanssemicondensed-bold transition-all duration-500 ${
              isHovered
                ? "text-stroke-black mix-blend-screen"
                : "text-black text-stroke-white mix-blend-screen"
            }`}
            id="cursoreffect"
          >
            Fullstack
          </h1>

          {/* Webdeveloper */}
          <h1
            className={`text-[4rem] sm:text-[5rem] md:text-[8rem] lg:text-[11rem] font-mediasanssemicondensed-bold transition-all duration-500 ${
              isHovered
                ? "text-black text-stroke-white mix-blend-screen"
                : "text-stroke-black mix-blend-screen"
            }`}
            id="cursoreffect"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Webdeveloper
          </h1>

          {/* Status */}
          <div className="w-full flex flex-row justify-between items-center text-xs sm:text-lg md:text-xl mt-4 gap-2 sm:gap-0">
            <h2>Open to projects</h2>
            <h2>Available for hire</h2>
          </div>
        </div>

        {/* Image */}
        <img
          src={portrait}
          alt="Portrait"
          className="w-68 sm:w-64 md:w-80 lg:w-96 xl:w-[28rem] mt-8 sm:mt-24 sm:absolute sm:-z-10"
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 sm:mt-24 text-sm w-full sm:w-auto items-center">
          <button
            onClick={() =>
              window.open("https://wa.me/918340478491?text=Hello%20Uday,%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20project%20opportunity%20with%20you.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20connect.")
            }
            className="flex justify-center items-center w-full sm:w-auto bg-black text-white px-6 py-2.5 rounded border-2 border-black hover:px-10 shadow-custom transition-all duration-500"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="pr-2 text-lg" />
            Hire Me
          </button>

          <a
            href="/UdayPratapSinghResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center bg-white text-black px-6 py-2.5 rounded border-2 hover:px-10 shadow-custom transition-all duration-500"
          >
            My resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
