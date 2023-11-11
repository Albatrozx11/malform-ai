import React, { useState } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
function Landing() {

  return (
    <div>
      <Navbar />
      <div className="flex justify-center flex-col items-center h-[50vh]">
        <Link to="/generator">
          <button className="w-[700px] h-[80px]  text-[30px] button-64 my-10">
            Go to Generator
          </button>
        </Link>
        <h1 className="text-[50px] font-semibold">
          Create Content without worrying about your prompts
        </h1>
      </div>
    </div>
  );
}

export default Landing;
