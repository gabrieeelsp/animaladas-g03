import React from "react";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/register"  || location.pathname === "/detail/:id") {
    return null;
  }

  return (
    <footer className="container-fluid bg-dark align-items-center justify-content-center p-1 mt-2 fixed-bottom">
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
        <div className="col-md-6 align-items-center justify-content-center mt-2">
          <span className="text-warning">
            Adoptá, castrá, educá, concientizá.
          </span>
          <p className="text-warning">
            Adoptando cambias su vida y la tuya 🧡🐶🐱
          </p>
        </div>
      </div>
      <div className="text-center text-white mt-0">
        <p>
          &copy; 2024 Animaladas. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
