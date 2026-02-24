import React from "react";
import { Link } from "react-router-dom";
import { Github, Instagram } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";


function SocialMedia() {
  return (
    <div>
      <div className="links flex items-center text-2xl mt-2 pl-10 gap-3">
        <Link to={"https://github.com/"} target="_blank " rel="noreferrer">
          <Github />
        </Link>
        <Link to={"#"} target="_blank">
          <Instagram />
        </Link>
        <Link to={"#"} target="_blank">
          <FaLinkedinIn />
        </Link>
      </div>
    </div>
  );
}

export default SocialMedia;
