import { NavLink } from "react-router-dom";
import { loadUsers, clearAll } from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import LoaderUsers from "../../Components/LoaderUsers/LoaderUsers";
import ModalUsers from "../../Components/ModalUsers/ModalUsers";

export default function AdminUsers() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const users = useSelector((state) => state.rootReducer.allUsers);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(clearAll());
      dispatch(loadUsers());
      setLoading(false);
    }, 2000);
  
    return () => clearTimeout(timeoutId);
  }, []);
  
  const modalUsers = users.map(({ id, name, lastName, phone, address, password, imageProfile }) => ({
    [id]: { id, name, lastName, phone, address, password, imageProfile },
  }));

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9 d-flex align-items-center">
              {loading ? (
                <LoaderUsers />
              ) : (
                <table className="table table-dark">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Email</th>
                      <th scope="col">Modificar</th>
                      <th scope="col">Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td className="text-warning">{user.name} {user.lastName}</td>
                        <td className="text-warning">{user.email}</td>
                        <td>
                          <button className="btn btn-success" 
                            data-bs-toggle="modal" 
                            data-bs-target="#exampleModal">Modificar</button>
                        </td>
                        <td>
                          <button className="btn btn-danger">Eliminar</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
        <div className="col-md-3 bg-dark text-warning d-flex flex-column align-items-center justify-content-center" style={{ border: "2px solid black", borderRadius: "10px", padding: "15px", height: "600px" }}>
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
            <button className="btn btn-warning btn-block fs-5 fw-bold my-5" style={{ width: "50px" }}>
              <i className="bi-house-door-fill"></i>
            </button>
          </NavLink>
        </div>
      </div>
      <ModalUsers
      users={modalUsers}
      />
    </div>
  );
}
