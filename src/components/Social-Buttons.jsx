import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn as LinkedinLogo,
  faGithub as GithubLogo,
  faInstagram as InstagramLogo,
} from "@fortawesome/free-brands-svg-icons";

const SocialButtons = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className="flex flex-col fixed left-0 top-1/3 gap-[0.05rem]">
      {/* LinkedIn Button */}
      <div
        className={`bg-black text-white p-2 text-xl rounded-r-md w-10 whitespace-nowrap h-auto cursor-pointer transition-all duration-300 ${
          hoveredButton === "linkedin" ? "w-44" : "w-10"
        }`}
        onMouseEnter={() => setHoveredButton("linkedin")}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <FontAwesomeIcon icon={LinkedinLogo} className="transition-all" />
        {hoveredButton === "linkedin" && (
          <Link className="text-sm ml-3 transition-all duration-300 ease-in">
            Connect with me.
          </Link>
        )}
      </div>

      {/* GitHub Button */}
      <div
        className={`bg-black text-white p-2 text-xl rounded-r-md w-10 whitespace-nowrap h-auto cursor-pointer transition-all duration-300 ${
          hoveredButton === "github" ? "w-36" : "w-10"
        }`}
        onMouseEnter={() => setHoveredButton("github")}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <FontAwesomeIcon icon={GithubLogo} className="transition-all" />
        {hoveredButton === "github" && (
          <Link className="text-sm ml-3 transition-all duration-300 ease-in">
            Check to me.
          </Link>
        )}
      </div>

      {/* Instagram Button */}
      <div
        className={`bg-black text-white p-2 text-xl rounded-r-md w-10 whitespace-nowrap h-auto cursor-pointer transition-all duration-300 ${
          hoveredButton === "instagram" ? "w-32" : "w-10"
        }`}
        onMouseEnter={() => setHoveredButton("instagram")}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <FontAwesomeIcon icon={InstagramLogo} className="transition-all" />
        {hoveredButton === "instagram" && (
          <Link className="text-sm ml-3 transition-all duration-300 ease-in">
            Follow me.
          </Link>
        )}
      </div>
    </div>
  );
};

export default SocialButtons;
