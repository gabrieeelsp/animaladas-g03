import React from "react";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  return (
    <footer className="container-fluid bg-dark text-white p-4 mt-5">
      <div className="row">
        <div className="col-md-6">
          <h5 className="text-warning">Redes Sociales</h5>
          <a href="#" className="btn btn-outline-warning mx-2">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="#" className="btn btn-outline-warning mx-2">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="#" className="btn btn-outline-warning mx-2">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
        <div className="col-md-6">
          <span className="text-warning">
            Adoptá, castrá, educá, concientizá.
          </span>
          <p className="text-warning">
            Adoptando cambias su vida y la tuya 🧡🐶🐱
          </p>
          <span className="text-warning">SALTA-ARG</span>
        </div>
      </div>
      <div className="text-center mt-3" style={{ color: "#fff" }}>
        <p>
          &copy; 2024 Animaladas. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
