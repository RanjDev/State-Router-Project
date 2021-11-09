import React from "react";
import HomeSVG from "../../undraw_authentication_fsn5.svg";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-center text-4xl text-white font-bold p-16">
        This is my Home
      </p>
      <img src={HomeSVG} alt="home SVG" className="w-6/12 " />
    </div>
  );
}
