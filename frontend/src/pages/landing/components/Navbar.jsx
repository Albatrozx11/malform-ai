import React, { useState } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../../../firebase";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Link } from "react-router-dom";
import googleicon from "../../../assets/google-icon.jpeg";
import closingicon from "../../../assets/exit-icon.png";
function Navbar() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        // The signed-in user info.
        const token = credential.accessToken;

        const user = result.user;
        navigate("/Generator");

        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  const [showDiv, setShowDiv] = useState(false);

  const handleHaiButtonClick = () => {
    setShowDiv(true);
  };

  const handleCloseButtonClick = () => {
    setShowDiv(false);
  };
  return (
    <div className=" bg-slate-900 h-24 flex items-center navbar">
      <h1 className="mx-20 font-semibold">malForm.ai</h1>
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
                  className="Sign_in_close mb-4 mr-4"
                  onClick={handleCloseButtonClick}
                />
                <div className="my-5">
                  <h2 className="Sign_in_heading text-[26px] ml-12">Sign in</h2>
                  <h2 className="its_simple_and_easy ml-14">
                    it's simple and easy
                  </h2>
                </div>
              </div>
              <div className="Sign_in_button_google_div">
                <button
                  className="Sign_in_button_google"
                  onClick={handleSignIn}
                >
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
