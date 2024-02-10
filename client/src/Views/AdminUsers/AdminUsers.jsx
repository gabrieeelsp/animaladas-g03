import { NavLink } from "react-router-dom";

export default function AdminUsers() {

return(
<div className="container justify-content-center align-items-center">
      <div className="row mt-4">
        <div className="col-md-9 mb-3 mt-2 text-start fs-5 d-flex flex-column justify-content-center align-items-center" style={{ padding: "20px" }}>
            <p>Acá va el listado de USUARIOS</p>
        </div>
        <div className="col-md-3 mb-4 mt-3 bg-dark text-warning d-flex flex-column align-items-center justify-content-center fs-5" style={{ border: "2px solid black", borderRadius: "10px", padding: "15px", height: "710px" }}>
          <NavLink to="/admin">
              <button className="btn btn-warning btn-block fs-5 fw-bold my-5" style={{ width: "180px" }}>
                ESTADÍSTICAS
              </button>
              </NavLink>
              <NavLink to="/admin/users">
              <button className="btn btn-warning btn-block fs-5 fw-bold my-5" style={{ width: "180px" }}>
                USUARIOS
              </button>
              </NavLink>
              <NavLink to="/admin/animals">
              <button className="btn btn-warning btn-block fs-5 fw-bold my-5" style={{ width: "180px" }}>
                ANIMALES
              </button>
              </NavLink>
              <NavLink to="/">
              <button className="btn btn-warning btn-block fs-5 fw-bold my-5" style={{ width: "50px" }}>
              <i className="bi-house-door-fill"></i>
              </button>
              </NavLink>
        </div>
      </div>
    </div>
)
}