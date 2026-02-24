import React, { useRef } from "react";

function TechSkill({ data, theame }) {
  return (
    <div className="w-full h-full m-2 ">
      <div className="containar  ">
        <div
          className="small-card  w-45 h-13 rounded-xl bg-gray-100 px-2 py-2 flex gap-2 items-center hover:scale-110 transition-all duration-200 cursor-pointer "
          style={{
            backgroundColor: theame ? "" : "white",
            color: theame ? "" : "black",
          }}
        >
          <img className="w-10 rounded-full " src={data.img} alt="" />
          <small className="text-xl">{data.name}</small>
        </div>
      </div>
    </div>
  );
}

export default TechSkill;
