import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../img/logoanimaladas.png";
import logo_google from "../../img/logo_google.png";

export default function Login() {
  const navigate = useNavigate();
  const login_user = (e) => {
    navigate("/user");
  };
  return (
    <div className="d-flex justify-content-center align-items-center text-warning vh-100">
      <form>
        <div
          className="bg-dark p-5 rounded-5 shadow"
          style={{ width: "25rem" }}
        >
          <div className="d-flex justify-content-center">
            <img src={logo} alt="login-icon" style={{ width: "7rem" }} />
          </div>
          <div>
            <h1 className="text-center fs-1 fw-bold text-warning">
              Iniciar Sesión
            </h1>
          </div>
          <div className="input-group mt-4">
            <div className="input-group-text bg-warning text-white">
              <i className="bi bi-person"></i>
            </div>
            <input
              className="form-control bg-light"
              type="text"
              placeholder="Usuario"
            />
          </div>
          <div className="input-group mt-1">
            <div className="input-group-text bg-warning text-white">
              <i className="bi bi-lock"></i>
            </div>
            <input
              className="form-control bg-light"
              type="password"
              placeholder="Contraseña"
            />
          </div>
          <div className="d-flex justify-content-around mt-1">
            <div className="d-flex align-items-center gap-1">
              <input className="form-check-input" type="checkbox" />
              <div className="pt-1 text-warning" style={{ fontSize: "0.8rem" }}>
                Recuerdame
              </div>
            </div>
            <div className="pt-1">
              <a
                href="#"
                className="text-decoration-none fw-semibold text-warning"
                style={{ fontSize: "0.8rem" }}
              >
                Olvidé mi contraseña
              </a>
            </div>
          </div>
          <div
            onClick={(e) => login_user(e)}
            className="btn text-dark w-100 mt-4 fw-bold shadow-sm bg-warning"
          >
            Iniciar sesión
          </div>
          <div
            className="d-flex gap-1 justify-content-center text-warning mt-1"
            style={{ fontSize: "0.8rem" }}
          >
            <div>¡No tienes una cuenta?</div>
            <NavLink to="/register" style={{ textDecoration: "none" }}>
              <a
                href="#"
                className="text-decoration-none fw-semibold text-warning"
              >
                Regístrate
              </a>
            </NavLink>
          </div>
          <div className="p-3">
            <div className="text-center text-warning">
              <span className="bg-dark">O también puedes...</span>
            </div>
          </div>
          <div className="btn d-flex gap-2 justify-content-center border mt-3 shadow-sm">
            <img
              src={logo_google}
              alt="google-icon"
              style={{ height: "1.6rem" }}
            />
            <div className="fw-semibold text-secondary text-white">
              Continúa con Google
            </div>
          </div>
          <NavLink to="/">
            <div className="btn text-dark w-20 mt-4 fw-bold shadow-sm bg-warning">
              <i className="bi-house-door-fill"></i>
            </div>
          </NavLink>
        </div>
      </form>
    </div>
  );
}
