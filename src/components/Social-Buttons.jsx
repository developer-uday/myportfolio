import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const SocialButtons = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const socials = [
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: faLinkedinIn,
      link: "https://www.linkedin.com/in/udaysingh6202",
    },
    {
      id: "github",
      icon: faGithub,
      name: "GitHub",
      link: "https://github.com/developer-uday",
    },
    {
      id: "instagram",
      icon: faInstagram,
      name: "Instagram",
      link: "https://instagram.com/therisinguday",
    },
  ];

  return (
    <>
      {/* DESKTOP (same as before) */}
      <div className="hidden sm:flex flex-col fixed left-0 top-1/3 gap-0.5 z-50">
        {socials.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredButton(item.id)}
            onMouseLeave={() => setHoveredButton(null)}
            className={`bg-black text-white p-2 text-xl rounded-r-md whitespace-nowrap cursor-pointer transition-all duration-300 flex items-center ${
              hoveredButton === item.id ? "w-40" : "w-10"
            }`}
          >
            <FontAwesomeIcon icon={item.icon} />
            {hoveredButton === item.id && (
              <span className="text-sm ml-3">{item.name}</span>
            )}
          </a>
        ))}
      </div>

      {/* MOBILE FAB */}
      <div className="sm:hidden fixed bottom-6 right-6 z-20 flex flex-col items-end gap-3">
        
        {/* Social Icons */}
        {socials.map((item, index) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-black text-white px-4 py-3 rounded-full shadow-lg transform transition-all duration-300 ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5 pointer-events-none"
            }`}
            style={{
              transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
            }}
          >
            <FontAwesomeIcon icon={item.icon} />
          </a>
        ))}

        {/* Main FAB Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black text-white px-5 py-4 rounded-full shadow-xl transition-transform duration-300"
        >
          <FontAwesomeIcon
            icon={faPlus}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
          />
        </button>
      </div>
    </>
  );
};

export default SocialButtons;