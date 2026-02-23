import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ projectDetails }) => {
  const { title, description, techStack, image, githubLink, liveLink } =
    projectDetails;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group">
      {/* Project Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 mb-2">
          {title}
        </h5>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <a
            href={githubLink}
            target="_blank"
            className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
          >
            <FaGithub size={20} />{" "}
            <span className="text-sm font-semibold">Code</span>
          </a>
          <a
            href={liveLink}
            target="_blank"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-md"
          >
            Live Demo <FaExternalLinkAlt size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
