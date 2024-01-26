import React from "react";

import { useLocation } from "react-router-dom";
import logo from "../../img/logoanimaladas.png";

import logo_google from "../../img/logo_google.png";
import "../../css/login.css";

export default function Login() {
  const stylecontainer = {
    width: "25rem",
  };

  const style_login_icon = {
    width: "7rem",
  };

  const style_input = {
    width: "1rem",
  };

  const style_remember = {
    width: "font-size: 0.9rem",
  };

  const style_text_google = {
    height: "0.9rem",
  };

  const google_icon = {
    height: "1.6rem",
  };

  const style_background_yellow = {
    backgroundColor: "#FBD13D",
  };

  const style_text_yellow = {
    color: "#FBD13D",
  };

  const style_background_icon = {
    color: "white",
  };

  return (
    <div
      className="
     d-flex justify-content-center align-items-center vh-100"
    >
      <div className="bg-white p-5 rounded-5  shadow" style={stylecontainer}>
        <div className="d-flex justify-content-center">
          <img src={logo} alt="login-icon" style={style_login_icon} />
        </div>
        <div>
          <h1 className="text-center fs-1 fw-bold" style={style_text_yellow}>
            Login
          </h1>
        </div>
        <div className="input-group mt-4">
          <div className="input-group-text  " style={style_background_yellow}>
            <i class="bi bi-person" style={style_background_icon}></i>
          </div>
          <input
            className="form-control bg-light"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="input-group mt-1">
          <div className="input-group-text " style={style_background_yellow}>
            <i class="bi bi-lock" style={style_background_icon}></i>
          </div>
          <input
            className="form-control bg-light"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="d-flex justify-content-around mt-1">
          <div className="d-flex align-items-center gap-1">
            <input className="form-check-input" type="checkbox" />
            <div className="pt-1" style={style_remember}>
              Remember me
            </div>
          </div>
          <div className="pt-1">
            <a
              href="#"
              className="text-decoration-none  fw-semibold fst-italic"
              style={style_text_yellow}
            >
              Forgot your password?
            </a>
          </div>
        </div>
        <div
          className="btn  text-white w-100 mt-4 fw-bold shadow-sm"
          style={style_background_yellow}
        >
          Login
        </div>
        <div className="d-flex gap-1 justify-content-center mt-1">
          <div>Don't have an account?</div>
          <a
            href="#"
            className="text-decoration-none  fw-semibold"
            style={style_text_yellow}
          >
            Register
          </a>
        </div>
        <div className="p-3">
          <div className="border-bottom text-center" style={style_text_google}>
            <span className="bg-white px-3">or</span>
          </div>
        </div>
        <div className="btn d-flex gap-2 justify-content-center border mt-3 shadow-sm">
          <img src={logo_google} alt="google-icon" style={google_icon} />
          <div className="fw-semibold text-secondary">Continue with Google</div>
        </div>
      </div>
    </div>
  );
}
