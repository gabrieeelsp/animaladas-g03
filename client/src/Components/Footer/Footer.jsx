import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Footer() {

  const location = useLocation();

  if (location.pathname === "/login") {
    return null;
  }

  return (
    <footer className="container-fluid bg-dark text-white p-4">
      <div className="row">
        <div className="col-md-6">
          <h5 className="text-warning">Redes Sociales</h5>
          <p></p>
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
          <h5 className="text-warning">Sobre Nosotros</h5>
          <p></p>
          <span className="text-warning">ADOPTÁ, CASTRÁ, EDUCÁ, CONCIENTIZÁ.</span>
          <p className="text-warning">Adoptando cambias su vida y la tuya 🧡🐶🐱</p>
          <span className="text-warning">SALTA-ARG🇦🇷</span>
        </div>
      </div>
    </footer>
  );
};
