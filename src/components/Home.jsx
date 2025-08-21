import React, { useState } from "react";
import portrait from "../assets/images/portrait.png";
import SocialButtons from "./Social-Buttons";
import GSAPmagnet from "./GSAPmagnet";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex items-center flex-col w-full min-h-screen p-36 pb-0 font-Montserrat cursor-default">
      <SocialButtons />
      <h1 className="text-2xl mb-7">
        👋, My name is Uday Singh and I am a ...
      </h1>
      <div className="flex flex-col items-center leading-44">
        <h1
          className={`text-[11rem] font-mediasanssemicondensed-bold transition-all ease-in-out duration-500 ${
            isHovered
              ? "text-stroke-black mix-blend-screen"
              : "text-black text-stroke-white mix-blend-screen"
          }`}
        >
          Fullstack
        </h1>
        <h1
          className={`text-[11rem] font-mediasanssemicondensed-bold stroke-2 stroke-red-600 transition-all ease-in-out duration-500 ${
            isHovered
              ? "text-black text-stroke-white mix-blend-screen"
              : "text-stroke-black  mix-blend-screen"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Webdeveloper
        </h1>

        <div className="relative w-full flex justify-between items-center text-2xl px-0.5 mt-6">
          <h2>based in PAN India.</h2>
          <h2>abcd abcd abcd</h2>
        </div>
      </div>

          <img
            src={portrait}
            alt="Portrait"
            className="w-[28rem] absolute mt-28 -z-10"
          />
      <div className="relative flex gap-4 mt-24 text-sm">
        <button className="bg-black text-white px-6 py-2.5 rounded border-3 border-black hover:px-12 shadow-custom transition-all ease-out duration-500">
          Unavilable
        </button>
        <button className="bg-white text-black px-6 py-2.5 rounded border-3 hover:px-10 shadow-custom transition-all ease-out duration-500">
          My resume
        </button>
      </div>
    </div>
  );
};

export default Home;
