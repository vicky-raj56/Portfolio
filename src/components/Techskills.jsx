import React from "react";
import TechSkill from "./TechSkill";

function Techskills({ theame }) {
  const data = [
    { img: "/html-html5-thumbnail.png", name: "html" },
    {
      img: "/tailwind-css-hd-logo-thumbnail.png",
      name: "CSS",
    },
    {
      img: "/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png",
      name: "JavaScript",
    },
    {
      img: "/tailwind-css-hd-logo-thumbnail.png",
      name: "Tailwind",
    },
    {
      img: "/bootstrap-hd-logo-thumbnail.png",
      name: "Bootstrap",
    },
    {
      img: "/png-transparent-react-logo-redux-l.png",
      name: "React",
    },
    { img: "/node-js-.png", name: "NodeJs" },
    {
      img: "/png-transparent-express-js-node-nail.png",
      name: "ExpressJs",
    },
    {
      img: "/mongodb-original-wordmark-logo-icon-thumbnail.png",
      name: "MongoDB",
    },
    {
      img: "/redis-logo-database-mongodb-gearman-nosql-icon-text-trademark-logo-thumbnail.png",
      name: "Redis",
    },
    {
      img: "/docker-github-node-js-mongodb-computer-software-github-blue-marine-mammal-logo-thumbnail.png",
      name: "Docker",
    },
    {
      img: "/git-bash-hd-logo-thumbnail.png",
      name: "Git",
    },
    {
      img: "/github-logo-monochrome-head-thumbnail.png",
      name: "GitHub",
    },
    {
      img: "/kubernetes-docker-devops-lxc-mongodb-github-blue-logo-symmetry-thumbnail.png",
      name: "Kubernets",
    },
    {
      img: "/testing-ci-cd-le-bio-au-risque-de-se-perdre-text-logo-agile-software-development-thumbnail.png",
      name: "CI/CD",
    },
    {
      img: "/visual-c-microsoft-sql-server-microsoft-purple-violet-text-thumbnail.png",
      name: "Visual stedio",
    },
    {
      img: "/postman-hd-logo-thumbnail.png",
      name: "PostMan",
    },
    {
      img: "/png-transparent-socket-io-node-js-express-il.png",
      name: "Socket io",
    },
    {
      img: "/GSAP.png",
      name: "GSAP",
    },
    {
      img: "/jwt-hd-logo-thumbnail.png",
      name: "JWT",
    },
    {
      img: "/cloudinary-hd-logo-thumbnail.png",
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

export default Techskills;
