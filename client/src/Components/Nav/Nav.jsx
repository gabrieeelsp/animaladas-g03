import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';

export default function Nav() {
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
                <a className="nav-link text-warning mx-3" href="#">
                  Donar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-warning mx-3" href="#">
                  Rescatados
                </a>
              </li>
              <li className="nav-item">
                <NavLink to="/adoptar">
                <a className="nav-link text-warning mx-3" href="#">
                  Adoptar
                </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link text-warning mx-3" href="#">
                  Adoptados
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-warning mx-3" href="#">
                  Contacto
                </a>
              </li>
            </ul>
            <SearchBar/>
            <button className="btn btn-outline-warning mx-3" type="button">
              <i className="bi bi-person"></i> 
              </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
