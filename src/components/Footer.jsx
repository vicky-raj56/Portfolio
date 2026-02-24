import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

function Footer() {
  const heartRef = useRef();
  useGSAP(() => {
    gsap.to(heartRef.current, {
      // y: -5,
      scale: 0.7,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.in",
    });
  });

  return (
    <div>
      <div className="flex items-center gap-2 justify-center mt-20 text-2xl font-medium text-black my-5">
        <h1 className="tracking-tight">Made with</h1>
        <span ref={heartRef} className="text-red-600 tracking-tight">
          ❤
        </span>
        <h1 className="tracking-tight">by Vicky Guptaa</h1>
      </div>
    </div>
  );
}

export default Footer;
