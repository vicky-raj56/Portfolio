import Cloud from "../assets/cloudBg.png";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom";

import About from "./About";
import Contect from "./Contect";
import SocialMedia from "../components/SocialMedia";
import Project from "./Project";
// import { ClassSubtraction } from './../../node_modules/@eslint-community/regexpp/index.d';

function Home({ theame, setTheame }) {
  // const [theame, setTheame] = useState(true);
  return (
    <div
      className="w-full h-full"
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
          <div className="left h-full w-full lg:h-full  lg:w-[50%]  flex flex-col   gap-3 pt-22 ">
            <h1 className="text-3xl lg:text-7xl font-bold tracking-tight ">
              Hi,I am Vicky <br />
            </h1>
            <p className="text-2xl  lg:text-5xl font-medium tracking-tight ">
              <span>Full Stack Developer</span>
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
          <div className="right w-120  lg:w-[50%] ">
            <img
              className="lg:w-full  lg:h-full"
              src="/src/assets/pngwing.com.png"
              alt="laptop"
            />
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
