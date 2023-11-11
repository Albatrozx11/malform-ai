import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div>
      <h1>Landing page</h1>
      <Link to="/generator">
        <button>Go to Generator</button>
      </Link>
    </div>
  );
}

export default Landing;
