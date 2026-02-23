import React from "react";
import TechSkill from "./TechSkill";

function TechSkills({ theame }) {
  const data = [
    { img: "/src/assets/techLogo/html-html5-thumbnail.png", name: "html" },
    {
      img: "/src/assets/techLogo/tailwind-css-hd-logo-thumbnail.png",
      name: "CSS",
    },
    {
      img: "/src/assets/techLogo/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png",
      name: "JavaScript",
    },
    {
      img: "/src/assets/techLogo/tailwind-css-hd-logo-thumbnail.png",
      name: "Tailwind",
    },
    {
      img: "/src/assets/techLogo/bootstrap-hd-logo-thumbnail.png",
      name: "Bootstrap",
    },
    {
      img: "/src/assets/techLogo/png-transparent-react-logo-redux-l.png",
      name: "React",
    },
    { img: "/src/assets/techLogo/node-js-.png", name: "NodeJs" },
    {
      img: "/src/assets/techLogo/png-transparent-express-js-node-nail.png",
      name: "ExpressJs",
    },
    {
      img: "/src/assets/techLogo/mongodb-original-wordmark-logo-icon-thumbnail.png",
      name: "MongoDB",
    },
    {
      img: "/src/assets/techLogo/redis-logo-database-mongodb-gearman-nosql-icon-text-trademark-logo-thumbnail.png",
      name: "Redis",
    },
    {
      img: "/src/assets/techLogo/docker-github-node-js-mongodb-computer-software-github-blue-marine-mammal-logo-thumbnail.png",
      name: "Docker",
    },
    {
      img: "/src/assets/techLogo/git-bash-hd-logo-thumbnail.png",
      name: "Git",
    },
    {
      img: "/src/assets/techLogo/github-logo-monochrome-head-thumbnail.png",
      name: "GitHub",
    },
    {
      img: "/src/assets/techLogo/kubernetes-docker-devops-lxc-mongodb-github-blue-logo-symmetry-thumbnail.png",
      name: "Kubernets",
    },
    {
      img: "/src/assets/techLogo/testing-ci-cd-le-bio-au-risque-de-se-perdre-text-logo-agile-software-development-thumbnail.png",
      name: "CI/CD",
    },
    {
      img: "/src/assets/techLogo/visual-c-microsoft-sql-server-microsoft-purple-violet-text-thumbnail.png",
      name: "Visual stedio",
    },
    {
      img: "/src/assets/techLogo/postman-hd-logo-thumbnail.png",
      name: "PostMan",
    },
    {
      img: "/src/assets/techLogo/png-transparent-socket-io-node-js-express-il.png",
      name: "Socket io",
    },
    {
      img: "/src/assets/techLogo/GSAP.png",
      name: "GSAP",
    },
    {
      img: "/src/assets/techLogo/jwt-hd-logo-thumbnail.png",
      name: "JWT",
    },
    {
      img: "/src/assets/techLogo/cloudinary-hd-logo-thumbnail.png",
      name: "Cloudinary",
    },
  ];
  return (
    <div className="w-full h-full pb-5 mt-5 ">
      <h1 className="text-4xl text-center font-bold text-blue-400">Tools</h1>
      <div className="flex flex-wrap gap-5 pl-20 mt-5   max-w-7xl mx-auto px-15 ">
        {data.map((data) => (
          <div key={data}>
            <TechSkill data={data} theame={theame} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechSkills;
