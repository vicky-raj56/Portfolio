import React from "react";
import TechSkills from "../components/TechSkills";
// import { ClassSubtraction } from './../../node_modules/@eslint-community/regexpp/index.d';

function About({ theame }) {
  return (
    <div className="w-full h-full my-5">
      <div className="containerr max-w-7xl mx-auto p-2 px-10">
        <h1 className="text-center text-3xl font-semibold">About Me</h1>
        <h1 className="text-blue-600 font-medium tracking-tight  text-3xl px-2 mt-3 ">
          A bit about me
        </h1>
        <p className="mt-2 text-xl px-3">
          I'm a self-taught web developer and Mobile App Developer with
          experience in designing new features from ideation to production,
          implementation of wireframes and design flows into high performance
          software applications. I take into consideration the user experience
          while writing reusable and efficient code. I passionately combine good
          design, technology, and innovation in all my projects, which I like to
          accompany from the first idea to release.Currently, I'm focused on the
          backend development.
        </p>

        <h1 className="text-blue-600 font-medium tracking-tight  text-3xl mt-3 mb-2 px-2">
          Technologies and Tools
        </h1>
        <p className="text-xl px-3">
          Using a combination of cutting-edge technologies and reliable
          open-source software I build user-focused, performant apps and
          websites for smartphones, tablets, and desktops.
        </p>
      </div>
      <TechSkills theame={theame} />
      
    </div>
  );
}

export default About;
