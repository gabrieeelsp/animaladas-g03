import React from "react";
import { NavLink } from "react-router-dom";

export default function UserProfile() {
  return (
    <div className="container" style={{ height: "100vh" }}>
      <div className="row mt-4">
        <div className="bg-dark text-warning col-md-6 mb-3 mt-2 text-start fs-5 d-flex flex-column" style={{ border: "2px solid #FFC107", borderRadius: "10px", padding: "20px" }}>
          <p>• Formularios completados: 0</p>
          <p>• Formularios en estado de evaluación: 0</p>
          <p>• Animales adoptados: 0</p>

          <div className="row mt-auto">
            <div className="col-6 mb-2 d-flex justify-content-center align-items-center">
              <NavLink to="/user/adoptions">
              <button className="btn btn-warning btn-block fs-5 fw-bold" style={{ width: "210px" }}>
                SOLICITUDES
              </button>
              </NavLink>
            </div>
            <div className="col-6 mb-2 d-flex justify-content-center align-items-center">
            <NavLink to="/user/donations">
              <button className="btn btn-warning btn-block fs-5 fw-bold" style={{ width: "210px" }}>
                DONACIONES
              </button>
              </NavLink>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <button className="btn btn-warning btn-block fs-5 fw-bold" style={{ width: "210px" }}>
                MODIFICAR
              </button>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <button className="btn btn-warning btn-block fs-5 fw-bold" style={{ width: "210px" }}>
                ELIMINAR CUENTA
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4 mt-3 text-bg-warning align-items-center justify-content-center fs-5" style={{ border: "2px solid black", borderRadius: "10px", padding: "15px" }}>
          <p className="text-center">No se encuentran adopciones realizadas.</p>
        </div>
      </div>
    </div>
  );
}
