import React, { useRef, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navrbar({ theame, setTheame }) {
  // const [clickMenu, setClickMenu] = useState(true);
  const lightTheame = "/cartoon-illustration-of-sun-free-png.webp";

  const darkTheame = "/moon-png-35116.png";
  const theameChange = (e) => {
    // const body = document.querySelector("body")
    setTheame(!theame);
  };

  const menu = useRef();
  function hamburger(e) {
    // menu.left="0px"
    menu.current.style.left = "270px";
    // menu.current.style.right = "0px";
  }
  function crossClick() {
    menu.current.style.left = "1000px";
  }

  function linkClick() {
    menu.current.style.left = "1000px";
  }

  const navLogo = useRef();

  const ulcontainer = useRef();

  // Using GSAP
  useGSAP(
    () => {
      const tl = gsap.timeline();
      gsap.from(navLogo.current, {
        // y: -300,
        scale: 0.3,
        opacity: 0,
        duration: 2,
        ease: "back.out(1.7)",
      });

      tl.from("li", {
        y: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.4,
        ease: "power2.out",
      });
    },
    { scope: ulcontainer },
  );

  return (
    <div className="sticky top-0 z-5000 bg-white">
      <nav className=" relative flex items-center justify-between h-20 px-10 text-2xl font-semibold border-b-2 shadow-4xl ">
        <div
          ref={navLogo}
          className="w-15 overflow-hidden rounded-full bg-transparent"
        >
          <Link to={"/"}>
            <img className="w-full rounded-full" src="/logo.webp" alt="logo" />
          </Link>
        </div>
        <ul ref={ulcontainer} className="flex gap-10 items-center pr-10">
          <li>
            <Link
              to={"/"}
              className="link border-b-2 border-transparent hover:border-black transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className="link border-b-2 border-transparent hover:border-black transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"/project"}
              className=" link border-b-2 border-transparent hover:border-black transition-colors duration-300"
            >
              Project
            </Link>
          </li>

          <li>
            <Link
              to={"/tools"}
              className="link border-b-2 border-transparent hover:border-black transition-colors duration-300"
            >
              Tools
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              className="link border-b-2 border-transparent hover:border-black transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
          <li onClick={theameChange}>
            <img
              className="w-7 cursor-pointer "
              src={theame ? darkTheame : lightTheame}
            />
          </li>
          <p
            className="cursor-pointer  md:hidden lg:hidden"
            onClick={hamburger}
          >
            <GiHamburgerMenu />
          </p>
        </ul>

        {/* phone navbar */}
        <div
          ref={menu}
          className="phone  z-200 w-65 rounded-lg h-100 block sm:hidden lg:hidden top-20 overflow-hidden   bg-white left-1000 absolute  border "
        >
          <ul className="w-full relative flex flex-col items-center gap-3 p-3 text-4xl bg-white">
            <p className="absolute top-2 right-5 " onClick={crossClick}>
              <RxCross1 />
            </p>
            <li
              className="mt-10 text-center p-2 block rounded-xl "
              onClick={linkClick}
            >
              <Link to={"/"}> Home</Link>
            </li>

            <li onClick={linkClick} className="text-center p-2 block  ">
              <Link to={"/about"}>About</Link>
            </li>
            <li onClick={linkClick} className="text-center p-2 block ">
              <Link to={"/project"}>Project</Link>
            </li>
            <li onClick={linkClick} className="text-center p-2 block ">
              <Link to={"/tools"}>Tools</Link>
            </li>
            <li onClick={linkClick} className="text-center p-2 block ">
              <Link to={"/contact"}>Contect</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navrbar;
