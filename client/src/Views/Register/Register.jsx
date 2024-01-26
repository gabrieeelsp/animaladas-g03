import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/logoanimaladas.png";
import logo_google from "../../img/logo_google.png";

export default function Register() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-dark p-5 rounded-5 shadow" style={{ width: "25rem" }}>
        <div className="d-flex justify-content-center">
          <img src={logo} alt="login-icon" style={{ width: "7rem" }} />
        </div>
        <div>
          <h1 className="text-center fs-1 fw-bold text-warning">
            Create Account
          </h1>
        </div>
        <div className="input-group mt-4">
          <div className="input-group-text bg-warning text-white">
            <i className="bi bi-person-fill-add"></i>
          </div>
          <input
            className="form-control bg-light"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="input-group mt-1">
          <div className="input-group-text bg-warning text-white">
            <i className="bi bi-person-fill-add"></i>
          </div>
          <input
            className="form-control bg-light"
            type="text"
            placeholder="Last name"
          />
        </div>
        <div className="input-group mt-1">
          <div className="input-group-text bg-warning text-white">
            <i className="bi bi-telephone"></i>
          </div>
          <input
            className="form-control bg-light"
            type="text"
            placeholder="Phone number"
          />
        </div>
        <div className="input-group mt-1">
          <div className="input-group-text bg-warning text-white">
            <i className="bi bi-geo-alt-fill"></i>
          </div>
          <input
            className="form-control bg-light"
            type="text"
            placeholder="Address"
          />
        </div>
        <div className="input-group mt-1">
          <div className="input-group-text bg-warning text-white">
            <i className="bi bi-envelope-at"></i>
          </div>
          <input
            className="form-control bg-light"
            type="email"
            placeholder="Email"
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

        <div className="btn text-white w-100 mt-4 fw-bold shadow-sm bg-warning">
          Create Account
        </div>

        <div className="d-flex gap-1 justify-content-center text-warning mt-1">
          <div>You have an account?</div>
          <NavLink to="/login" style={{ textDecoration: "none" }}>
            <a
              href="#"
              className="text-decoration-none fw-semibold text-warning"
            >
              Sing in
            </a>
          </NavLink>
        </div>

        <div className="p-3">
          <div className="border-bottom text-center text-warning">
            <span className="bg-dark">or</span>
          </div>
        </div>
        <div className="btn d-flex gap-2 justify-content-center border mt-3 shadow-sm">
          <img
            src={logo_google}
            alt="google-icon"
            style={{ height: "1.6rem" }}
          />
          <div className="fw-semibold text-secondary">Continue with Google</div>
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
