import React from "react";
import { NavLink } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../../img/logoanimaladas.png";
import logo_google from "../../img/logo_google.png";

export default function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-white p-5 rounded-5 shadow" style={{ width: "25rem" }}>
        <div className="d-flex justify-content-center">
          <img src={logo} alt="login-icon" style={{ width: "7rem" }} />
        </div>
        <div>
          <h1 className="text-center fs-1 fw-bold text-warning">Login</h1>
        </div>
        <div className="input-group mt-4">
          <div className="input-group-text bg-warning text-white">
            <i className="bi bi-person"></i>
          </div>
          <input
            className="form-control bg-light"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="input-group mt-1">
          <div className="input-group-text bg-warning text-white">
            <i className="bi bi-lock"></i>
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
            <div className="pt-1">Remember me</div>
          </div>
          <div className="pt-1">
            <a
              href="#"
              className="text-decoration-none fw-semibold fst-italic text-warning"
            >
              Forgot your password?
            </a>
          </div>
        </div>
        <div className="btn text-white w-100 mt-4 fw-bold shadow-sm bg-warning">
          Login
        </div>
        <div className="d-flex gap-1 justify-content-center mt-1">
          <div>Don't have an account?</div>
          <a
            href="#"
            className="text-decoration-none fw-semibold text-warning"
          >
            Register
          </a>
        </div>
        <div className="p-3">
          <div className="border-bottom text-center text-warning">
            <span className="bg-white px-3">or</span>
          </div>
        </div>
        <div className="btn d-flex gap-2 justify-content-center border mt-3 shadow-sm">
          <img src={logo_google} alt="google-icon" style={{ height: "1.6rem" }} />
          <div className="fw-semibold text-secondary">
            Continue with Google
          </div>
        </div>
        <NavLink to="/">
        <div className="btn text-white w-100 mt-4 fw-bold shadow-sm bg-warning">
        Return to Home
        </div>
        </NavLink>
      </div>
    </div>
  );
}