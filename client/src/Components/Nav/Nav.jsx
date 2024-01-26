import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { NavLink, useLocation } from 'react-router-dom';

export default function Nav() {

  const location = useLocation();

  if (location.pathname === "/login") {
    return null;
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
        <div className="container-fluid">
        <NavLink to="/">
          <a className="navbar-brand text-warning" href="#">
            <i className="bi-house-door-fill"></i>
          </a>
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
              <NavLink to="/about">
              <button className="btn btn-outline-warning p-1 mx-1" type="button">
                  Sobre Nosotros
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/rescatados">
              <button className="btn btn-outline-warning p-1 mx-1" type="button">
                  Rescatados
                </button>
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/adoptar">
              <button className="btn btn-outline-warning p-1 mx-1" type="button">
                  Adoptar
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/adoptados">
              <button className="btn btn-outline-warning p-1 mx-1" type="button">
                  Adoptados
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/contacto">
              <button className="btn btn-outline-warning p-1 mx-1" type="button">
                  Contacto
                  </button>
                </NavLink>
              </li>
            </ul>
            <SearchBar/>
            <NavLink to="/login">
            <button className="btn btn-outline-warning p-1 mx-1" type="button">
              <i className="bi bi-person"></i> 
              </button>
              </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}