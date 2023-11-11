import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import googleicon from "../../../assets/google-icon.jpeg";
import closingicon from "../../../assets/exit-icon.png";
function Navbar() {
  const [showDiv, setShowDiv] = useState(false);

  const handleHaiButtonClick = () => {
    setShowDiv(true);
  };

  const handleCloseButtonClick = () => {
    setShowDiv(false);
  };
  return (
    <div className=" bg-slate-900 h-24 flex items-center navbar">
      <h1 className="mx-20 font-semibold">malForm</h1>
      <ul className="flex space-x-7 ml-auto mx-20">
        <li>
          <a
            className="text-[white] hover:text-[white] hover:opacity-[0.5] text-[20px]"
            onClick={handleHaiButtonClick}
          >
            Sign up
          </a>
        </li>
        <li>
          <Link>
            <a
              href="#"
              className="text-[white] hover:text-[white] hover:opacity-[0.5] text-[20px]"
            >
              Try now
            </a>
          </Link>
        </li>
        <li>
          <a
            href="#"
            className="text-[white] hover:text-[white] hover:opacity-[0.5] text-[20px]"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[white] hover:text-[white] hover:opacity-[0.5] text-[20px]"
          >
            About us
          </a>
        </li>
      </ul>
      {showDiv && (
        <div className={`Login_Main_div ${showDiv ? "centered" : ""}`}>
          <div className="Login_Main_div_second">
            <div className="Cont_container">
              <div className="signin_heading_div">
                <img
                  src={closingicon}
                  alt=""
                  className="Sign_in_close"
                  onClick={handleCloseButtonClick}
                />

                <h2 className="Sign_in_heading">Sign in</h2>
                <h2 className="its_simple_and_easy">it's simple and easy</h2>
              </div>
              <div className="Sign_in_button_google_div">
                <button className="Sign_in_button_google">
                  <img src={googleicon} alt="" /> Sign in with Google
                </button>
              </div>
              <div className="Centre_line">
                <hr className="hr1" />
                <p>or</p>
                <hr className="hr1" />
              </div>
              <div className="Sign_in_button_email_div">
                <button className="Sign_in_button_email">
                  Continue with email
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
