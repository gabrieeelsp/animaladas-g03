import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.css";

export default function Nav() {
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 fixed-top">
        <div className="container-fluid">
          <NavLink to="/">
            <span className="navbar-brand text-warning mx-3">
              <i className="bi-house-door-fill"></i>
            </span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/rescatados">
                  <button
                    className="btn btn-outline-warning p-1 mx-3"
                    type="button"
                  >
                    Rescatados
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/adoptar">
                  <button
                    className="btn btn-outline-warning p-1 mx-3"
                    type="button"
                  >
                    Adoptar
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/adoptados">
                  <button
                    className="btn btn-outline-warning p-1 mx-3"
                    type="button"
                  >
                    Adoptados
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contacto">
                  <button
                    className="btn btn-outline-warning p-1 mx-3"
                    type="button"
                  >
                    Contacto
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/add">
                  <button
                    className="btn btn-outline-warning p-1 mx-3"
                    type="button"
                  >
                    Agregar mascota
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/donar">
                  <button
                    className="btn btn-outline-warning p-1 mx-3"
                    type="button"
                  >
                    Aportar
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/requisitos">
                  <button
                    className="btn btn-outline-warning p-1 mx-3"
                    type="button"
                  >
                    Requisitos
                  </button>
                </NavLink>
              </li>
            </ul>
            <SearchBar />
            <NavLink to="/login">
              <button
                className="btn btn-outline-warning p-1 mx-3"
                type="button"
                id="login"
              >
                <i className="bi bi-person"></i>
                <span
                  className="texto_responsive"
                  data-phonetext="Mi cuenta"
                > Iniciar sesión</span>
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

