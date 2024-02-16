import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { loadUsers, clearAll } from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import LoaderUsers from "../../Components/LoaderUsers/LoaderUsers";
import ModalUsers from "../../Components/ModalUsers/ModalUsers";

export default function AdminUsers() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null); // Estado para el usuario seleccionado
  const users = useSelector((state) => state.rootReducer.allUsers);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(clearAll());
      dispatch(loadUsers());
      setLoading(false);
    }, 2000);
  
    return () => clearTimeout(timeoutId);
  }, []);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <>
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
                {users.map(({ id, name, lastName, email, phone, address, password, imageProfile }) => (
                  <tr key={id}>
                    <th scope="row">{id}</th>
                    <td className="text-warning">{name} {lastName}</td>
                    <td className="text-warning">{email}</td>
                    <td>
                    <button 
                        className="btn btn-success" 
                        data-bs-toggle="modal" 
                        data-bs-target="#exampleModal"
                        onClick={() => handleUserSelect({ id, name, lastName, email, phone, address, password, imageProfile })}>
                        Modificar
                      </button>
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
        <div className="col-md-2 bg-dark text-warning d-flex flex-column align-items-center justify-content-center mx-3" style={{ border: "2px solid black", borderRadius: "10px", padding: "10px", height: "600px", width: "200px" }}>
          <NavLink to="/admin">
            <button className="btn btn-warning btn-block fs-5 fw-bold my-4" style={{ width: "160px" }}>ESTADÍSTICAS</button>
          </NavLink>
          <NavLink to="/admin/users">
            <button className="btn btn-warning btn-block fs-5 fw-bold my-4" style={{ width: "160px" }}>USUARIOS</button>
          </NavLink>
          <NavLink to="/admin/animals">
            <button className="btn btn-warning btn-block fs-5 fw-bold my-4" style={{ width: "160px" }}>ANIMALES</button>
          </NavLink>
          <NavLink to="/admin/forms">
            <button className="btn btn-warning btn-block fs-5 fw-bold my-4" style={{ width: "160px" }}>FORMULARIOS</button>
          </NavLink>
          <NavLink to="/admin/reviews">
            <button className="btn btn-warning btn-block fs-5 fw-bold my-4" style={{ width: "160px" }}>REVIEWS</button>
          </NavLink>
          <NavLink to="/">
            <button className="btn btn-warning btn-block fs-5 fw-bold my-4" style={{ width: "50px" }}>
              <i className="bi bi-house-door-fill"></i>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
    <ModalUsers selectedUser={selectedUser} />
    </>
  );
}
