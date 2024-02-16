import { NavLink } from "react-router-dom";

export default function AdminForms () {
    return(
            <div className="container">
      <div className="row">
        <div className="col-md-9 d-flex align-items-center">
        <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre solicitante</th>
            <th scope="col">Perro solicitado</th>
            <th scope="col">Estado formulario</th>
            <th scope="col">Aceptar</th>
            <th scope="col">Rechazar</th>
          </tr>
        </thead>
        <tbody>
<tr>
              <th scope="row">1</th>
              <td className="text-warning">Ejemplo solicitante</td>
              <td className="text-warning">Ejemplo perro solicitado</td>
              <td className="text-warning">Pendiente</td>
              <td>
                <button className="btn btn-success">Aceptar</button>
              </td>
              <td>
                <button className="btn btn-danger">Rechazar</button>
              </td>
            </tr>
        </tbody>
      </table>
            </div>
            <div className="col-md-2 bg-dark text-warning d-flex flex-column align-items-center justify-content-center mx-3" style={{ border: "2px solid black", borderRadius: "10px", padding: "10px", height: "600px", width: "200px" }}>
                    <NavLink to="/admin">
                        <button className="btn btn-warning btn-block fs-5 fw-bold my-4" style={{ width: "160px" }}>
                            ESTADÍSTICAS
                        </button>
                    </NavLink>
                    <NavLink to="/admin/users">
                        <button className="btn btn-warning btn-block fs-5 fw-bold my-4" style={{ width: "160px" }}>
                            USUARIOS
                        </button>
                    </NavLink>
                    <NavLink to="/admin/animals">
                        <button className="btn btn-warning btn-block fs-5 fw-bold my-4" style={{ width: "160px" }}>
                            ANIMALES
                        </button>
                    </NavLink>
              <NavLink to="/admin/forms">
              <button className="btn btn-warning btn-block fs-5 fw-bold my-4" style={{ width: "160px" }}>
                FORMULARIOS
              </button>
              </NavLink>
              <NavLink to="/admin/reviews">
              <button className="btn btn-warning btn-block fs-5 fw-bold my-4" style={{ width: "160px" }}>
                REVIEWS
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
