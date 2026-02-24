import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ProjectCards() {
  const projectDetails = [
    {
      title: "Zerodha Clone",
      description:
        "A full-stack stock trading dashboard built with MERN stack and real-time data.",
      techStack: ["React", "Node.js", "MongoDB", "Tailwind"],
      image: "/gettyimages-1848933453-612x612.jpg",
      githubLink: "https://github.com/vicky-raj56/stock-trading-website",
      liveLink: "https://zerodha-vicky.vercel.app",
    },
    {
      title: "Air bnb Clone",
      description:
        "A full-stack stock trading dashboard built with MERN stack and real-time data.",
      techStack: ["Node.js", "EJS", "MongoDB", "Bootstrap"],
      image: "/airbnb-image-2223376026-612x612.webp",
      githubLink: "https://github.com/vicky-raj56/Airbnb-like-project-",
      liveLink: "https://tripnest-8xs3.onrender.com/listings",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);
  const cardRef = useRef();
  useGSAP(
    () => {
      gsap.from(".card", {
        y: 100,
        opacity: 0,
        duration: 2,
        stagger: 0.4,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
          end: "bottom 50%",
          // markers: true,
          // scrub:true
        },
      });
    },
    { scope: cardRef },
  );
  return (
    <div id="#vicky" className=" w-full h-full bg-gray-200" ref={cardRef}>
      <h1 className="text-center text-4xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 ">
        {projectDetails.map((data) => (
          <div className="card" key={data}>
            <ProjectCard projectDetails={data} />
          </div>
        ))}
        {/* Aur cards yahan add karein */}
      </div>
    </div>
  );
}

export default ProjectCards;
