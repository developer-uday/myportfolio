import React from "react";

const projects = [
  {
    title: "URL Shortening Service",
    description:
      "Built a scalable URL shortener using MERN stack with MVC architecture. Converts long URLs into short, shareable links.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    previewlink: "#",
    githublink: "#",
    thumbnail: "/thumbnails/previewunavailable.png",
  },
  {
    title: "Web Automation Testing",
    description:
      "Created automation scripts using Playwright, reducing manual testing effort by 60% with reliable browser testing.",
    tech: ["JavaScript", "Playwright"],
    previewlink: "#",
    githublink: "#",
    thumbnail: "/thumbnails/previewunavailable.png",
  },
  {
    title: "The wallstreetguy website",
    description:
      "Developed a personal finance blog using Vite, featuring dynamic content and responsive design for optimal user experience.",
    tech: ["JavaScript", "React", "Vite", "Tailwind CSS"],
    previewlink: "https://www.thewallstreetguy.com",
    githublink: "https://github.com/thewallstreetguy/thewallstreetguy",
    thumbnail: "/thumbnails/thewallstreetguy.png",
  },
  {
    title: "To Do List",
    description:
      "Developed a simple yet effective to-do list application using React and Vite, with a clean and intuitive user interface.",
    tech: ["JavaScript", "React", "Vite", "Express", "MongoDB", "JWT"],
    previewlink: "https://udaytodolist.vercel.app/auth/login",
    githublink: "https://github.com/developer-uday/To-do-list",
    thumbnail: "/thumbnails/previewunavailable.png",
  },
  {
    title: "RailBite",
    description:
      "Created a on seat food ordering app for railway passengers using React, Vite and Express with three user roles: Customer, Vendor and Admin.",
    tech: ["JavaScript", "React", "Vite", "Express", "MongoDB", "JWT"],
    previewlink: "https://railbite.vercel.app/login",
    githublink: "https://github.com/developer-uday/railbite",
    thumbnail: "/thumbnails/railbite.png",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen px-4 py-20 sm:p-8 md:p-16 lg:p-24 font-Montserrat bg-gradient-to-br from-white to-gray-100">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
        My Projects
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 group"
          >
            {/* Thumbnail */}
            <div className="w-full h-44 overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6">
              {/* Title */}
              <h2 className="text-xl font-semibold mb-2 group-hover:text-black">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-gray-100 rounded-full border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-between gap-4">
                <a
                  href={project.previewlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium text-black border-b border-black hover:tracking-wide transition-all"
                >
                  View Project →
                </a>
                <a
                  href={project.githublink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium text-black border-b border-black hover:tracking-wide transition-all"
                >
                  View GitHub →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
