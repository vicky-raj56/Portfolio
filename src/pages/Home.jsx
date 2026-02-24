import Cloud from "../assets/cloudBg.png";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom";

import About from "./About";
import Contect from "./Contect";
import SocialMedia from "../components/SocialMedia";
import Project from "./Project";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
// import { ClassSubtraction } from './../../node_modules/@eslint-community/regexpp/index.d';

function Home({ theame, setTheame }) {
  // const [theame, setTheame] = useState(true);
  const image = useRef();
  const heroleft = useRef();
  const imgRef = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.from(heroleft.current, {
      x: -300,
      duration: 3,
      ease: "power1.inOut",
    });
    tl.from(image.current, {
      x: 500,
      duration: 3,
      ease: "power1.inOut",
    });
    tl.to(image.current, {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
    // gsap.to(imgRef.current, {
    //   rotate: 360,
    //   repeat: -1,
    //   duration: 1,
    //   ease: "none"
    //   // yoyo:true
    // });
  });

  return (
    <div
      className="w-full h-full overflow-hidden"
      style={
        theame
          ? { backgroundColor: "white", color: "black" }
          : { backgroundColor: "#374151", color: "white" }
      }
    >
      {/* <Navrbar theame={theame} setTheame={setTheame} /> */}
      <main
        className="basis-full w-full h-[88vh]"
        style={{ backgroundImage: `url(${Cloud})`, backgroundSize: "cover" }}
      >
        <main className="max-w-7xl lg:w-full lg:h-full mx-auto sm:h-screen md:h-screen flex flex-col lg:flex-row sm:justify-center  lg:items-center lg:justify-between px-2  lg:px-15 ">
          <div
            ref={heroleft}
            className="left h-full w-full lg:h-full  lg:w-[50%]  flex flex-col   gap-3 pt-22 "
          >
            <h1 className="text-3xl lg:text-7xl font-bold tracking-tight ">
              Hi,I am Vicky <br />
            </h1>
            <p className="text-2xl  lg:text-5xl font-medium tracking-tight ">
              <span>Full </span> <span>Stack</span> {""}
              <span>Developer</span>
            </p>
            <p className="text-xl md:text-3xl  font-medium">
              I am a Front-End / Full-Stack developer. <br />
              Using MERN STACK
            </p>
            {/* links */}
            <SocialMedia />

            <button className="text-3xl  font-semibold px-4 py-2 bg-blue-600 text-black rounded-2xl hover:bg-blue-400 cursor-pointer ml-10 mt-5 w-50 justify-center flex items-center">
              <Link
                to={"/Resume-VICKY.pdf"}
                download={"Vicky_resume"}
                target="_blank"
              >
                {" "}
                Resume
              </Link>
              <span className="pt-2.5 text-2xl text-blue-">
                <IoMdDownload />
              </span>
            </button>
          </div>
          <div
            ref={image}
            className="right w-120 rounded-full  lg:w-[50%] flex items-center justify-center p-5"
          >
            <div className="img w-100 h-100 rounded-full overflow-hidden  ">
              <img
                ref={imgRef}
                className="lg:w-110 rounded-full  lg:h-110 object-cover  bg-center"
                src="/home-logo1720287601920-ee8c503af775.webp"
                alt="laptop"
              />
            </div>
          </div>
        </main>
      </main>
      <About theame={theame} />
      {/* <ProjectCards /> */}
      <Project />
      <Contect />
    </div>
  );
}

export default Home;
