import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  loadUsers,
  clearAll,
  deleteUser,
  set_orderby_value,
  set_orderdir_value,
} from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import LoaderUsers from "../../Components/LoaderUsers/LoaderUsers";
import ModalUsers from "../../Components/ModalUsers/ModalUsers";
import SearchUser from "../../Components/SearchUser/SearchUser";
import Pagination from "../../Components/Pagination/Pagination";

export default function AdminUsers() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.rootReducer.allUsers);
  const pagination = useSelector((state) => state.rootReducer.pagination3);
  const orderByValue = useSelector((state) => state.rootReducer.orderByValue);
  const orderDirValue = useSelector((state) => state.rootReducer.orderDirValue);

  const users = user.users;

  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(clearAll());
      dispatch(loadUsers(1, 4, orderByValue, orderDirValue));
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleDeleteUser = (id) => {
    dispatch(clearAll());
    dispatch(deleteUser(id)).then(() => {
      dispatch(loadUsers(1, 4, "id", "asc"));
    });
  };

  const handleModifyUser = (form) => {
    setSelectedUser(form);
  };

  const handleNextPage = (page) => {
    dispatch(loadUsers(page, 4, orderByValue, orderDirValue));
  };

  const handlePrevPage = (page) => {
    dispatch(loadUsers(page, 4, orderByValue, orderDirValue));
  };

  return (
    <>
      <div className="container" style={{ marginTop: "80px" }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-9">
            {!loading ? (
              <div className="my-2 d-flex justify-content-center">
                <div className="m-5" style={{ width: "500px" }}>
                  <SearchUser />
                </div>
              </div>
            ) : (
              ""
            )}
            {loading ? (
              <LoaderUsers />
            ) : (
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Dirección</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Modificar</th>
                    <th scope="col">Deshabilitar</th>
                  </tr>
                </thead>
                <tbody>
                  {users &&
                    users.map(
                      ({
                        id,
                        name,
                        lastName,
                        email,
                        phone,
                        address,
                        password,
                        imageProfile,
                        enabled,
                      }) => (
                        <tr key={id}>
                          <th scope="row">{id}</th>
                          <td className="text-warning">
                            {name} {lastName}
                          </td>
                          <td className="text-warning">{email}</td>
                          <td className="text-warning">{phone}</td>
                          <td className="text-warning">{address}</td>
                          <td className="text-warning">
                            {enabled ? "Habilitado" : "Deshabilitado"}
                          </td>
                          <td>
                            <button
                              className="btn btn-warning fw-bold"
                              data-bs-toggle="modal"
                              data-bs-target={`#ModalU${id}`}
                              onClick={() =>
                                handleModifyUser({
                                  id,
                                  name,
                                  lastName,
                                  email,
                                  phone,
                                  address,
                                  password,
                                  imageProfile,
                                  enabled,
                                })
                              }
                            >
                              Modificar
                            </button>
                          </td>
                          <td>
                            <button
                              className={`btn btn-block fw-bold ${
                                enabled
                                  ? "btn-danger text-white"
                                  : "btn-success text-white"
                              }`}
                              onClick={() => handleDeleteUser(id)}
                            >
                              {enabled === true ? "Deshabilitar" : "Habilitar"}
                            </button>
                          </td>
                        </tr>
                      )
                    )}
                </tbody>
              </table>
            )}
            <div
              className="m-5 d-flex justify-content-center align-items-center"
              style={{ position: "static" }}
            >
              <Pagination
                pagination={pagination}
                onNextPage={handleNextPage}
                onPrevPage={handlePrevPage}
              />
            </div>
          </div>
          <div
            className="col-md-2 bg-dark text-warning d-flex flex-column align-items-center justify-content-center mx-3"
            style={{
              border: "2px solid black",
              borderRadius: "10px",
              padding: "10px",
              height: "600px",
              width: "200px",
            }}
          >
            <NavLink to="/admin">
              <button
                className="btn btn-warning btn-block fs-5 fw-bold my-4"
                style={{ width: "160px" }}
              >
                ESTADÍSTICAS
              </button>
            </NavLink>
            <NavLink to="/admin/users">
              <button
                className="btn btn-warning btn-block fs-5 fw-bold my-4"
                style={{ width: "160px" }}
              >
                USUARIOS
              </button>
            </NavLink>
            <NavLink to="/admin/animals">
              <button
                className="btn btn-warning btn-block fs-5 fw-bold my-4"
                style={{ width: "160px" }}
              >
                ANIMALES
              </button>
            </NavLink>
            <NavLink to="/admin/forms">
              <button
                className="btn btn-warning btn-block fs-5 fw-bold my-4"
                style={{ width: "160px" }}
              >
                FORMULARIOS
              </button>
            </NavLink>
            <NavLink to="/admin/reviews">
              <button
                className="btn btn-warning btn-block fs-5 fw-bold my-4"
                style={{ width: "160px" }}
              >
                REVIEWS
              </button>
            </NavLink>
            <NavLink to="/">
              <button
                className="btn btn-warning btn-block fs-5 fw-bold my-4"
                style={{ width: "50px" }}
              >
                <i className="bi bi-house-door-fill"></i>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <ModalUsers user={selectedUser} />
    </>
  );
}
