import React, { useState } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Typer from "./components/Typer";
import { TypeAnimation } from "react-type-animation";
import AboutUs from "./components/AboutUs";
function Landing() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center flex-col items-center h-[50vh]">
        <Link to="/generator">
          <button className="w-[700px] h-[80px]  text-[30px] button-64 my-8">
            Go to Generator
          </button>
        </Link>
        <div className="text-[22px] font-semibold">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "സ്വാഗതം",
              1000,
              "Create content without worrying about your prompts",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Made for Malayali's",
              1000,

              "Have fun!",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
      </div>
      <AboutUs />
    </div>
  );
}

export default Landing;
