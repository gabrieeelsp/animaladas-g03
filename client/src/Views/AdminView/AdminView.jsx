import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminView() {

  return (
    <div className="container justify-content-center align-items-center">
      <div className="row mt-4">
        <div className="col-md-9 mb-3 mt-2 text-start fs-5 d-flex flex-column justify-content-center align-items-center" style={{ padding: "20px" }}>
          <span className="bg-dark text-center text-warning p-2 my-2" style={{borderRadius: "10px"}}>ESTADISTICAS ANIMALES</span>
          <img src="https://static.fundacion-affinity.org/cdn/farfuture/JFpv0PDov2xReCANd01xbPaia69MKIuvdGNHn3WAZ58/mtime:1686144625/sites/default/files/fig2-23.png" style={{borderRadius: "20px", height:"285px", width: "820px"}}></img>
          <span className="bg-dark text-center text-warning p-2 my-2" style={{borderRadius: "10px"}}>ESTADISTICAS DONACIONES</span>
          <img src="https://static.fundacion-affinity.org/cdn/farfuture/4G3-8zXoQB9HA7QUsy2P93bbtdNHuirWz3EC-c5rRbI/mtime:1686144577/sites/default/files/fig5-23.png" style={{borderRadius: "20px", height:"285px", width: "820px"}}></img>
        </div>
        <div className="col-md-2 bg-dark text-warning d-flex flex-column align-items-center justify-content-center" style={{ border: "2px solid black", borderRadius: "10px", padding: "15px", height: "600px", width: "300px" }}>
          <NavLink to="/admin">
              <button className="btn btn-warning btn-block fs-5 fw-bold my-4" style={{ width: "180px" }}>
                ESTADÍSTICAS
              </button>
              </NavLink>
              <NavLink to="/admin/users">
              <button className="btn btn-warning btn-block fs-5 fw-bold my-4" style={{ width: "180px" }}>
                USUARIOS
              </button>
              </NavLink>
              <NavLink to="/admin/animals">
              <button className="btn btn-warning btn-block fs-5 fw-bold my-4" style={{ width: "180px" }}>
                ANIMALES
              </button>
              </NavLink>
              <NavLink to="/admin/forms">
              <button className="btn btn-warning btn-block fs-5 fw-bold my-4" style={{ width: "180px" }}>
                FORMULARIOS
              </button>
              </NavLink>
              <NavLink to="/">
              <button className="btn btn-warning btn-block fs-5 fw-bold my-4" style={{ width: "50px" }}>
              <i className="bi-house-door-fill"></i>
              </button>
              </NavLink>
        </div>
      </div>
    </div>
  );
}
