import { NavLink } from "react-router-dom";

export default function AdminUsers() {

return(
<div className="container justify-content-center align-items-center">
      <div className="row mt-4">
        <div className="col-md-9 mb-3 mt-2 text-start fs-5 d-flex flex-column justify-content-center align-items-center" style={{ padding: "20px" }}>
        <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td className="text-warning">Mark</td>
      <td className="text-warning">Otto</td>
      <td className="text-warning">@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td className="text-warning">Jacob</td>
      <td className="text-warning">Thornton</td>
      <td className="text-warning">@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2" className="text-warning">Larry the Bird</td>
      <td className="text-warning">@twitter</td>
    </tr>
  </tbody>
</table>

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