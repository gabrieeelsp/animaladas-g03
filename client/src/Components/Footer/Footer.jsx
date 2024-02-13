import React from "react";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/admin" || location.pathname === "/register"  || location.pathname === "/detail/:id" || location.pathname === "/admin/forms") {
    return null;
  }

  return (
    <footer className="container-fluid bg-dark align-items-center justify-content-center p-1 mt-2 fixed-bottom" style={{height:"100px"}}>
      <div className="row">

        <div className="col-md-4" style={{marginTop:"20px"}}>
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

        
        <div className="col-md-4 align-items-center justify-content-center mt-2" style={{ display: "flex",marginTop:"20px"}}>
          <span className="text-warning">
          &copy; 2024 Animaladas. Todos los derechos reservados.
          </span>
        </div>

        <div className="col-md-4 align-items-center justify-content-center mt-2" style={{display: "flex",marginTop:"20px"}}>
          <span className="text-warning">
          Adoptando cambias su vida y la tuya 🧡🐶🐱
          </span>
        </div>



      </div>
      
    </footer>
  );
}
