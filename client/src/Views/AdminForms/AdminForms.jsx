import { NavLink } from "react-router-dom";
import { allAdoptions, clearAll, acceptAdoption, refuseAdoption } from "../../redux/actions/actions"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Pagination from "../../Components/Pagination/Pagination"


export default function AdminForms() {
  const forms = useSelector((state) => state.rootReducer.allAdoptions);
  const pagination = useSelector((state) => state.rootReducer.pagination1);
  console.log("pagination:", pagination)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(clearAll());
    dispatch(allAdoptions("", "", 1, 5, "", ""));
  }, []);


  const handleAccept = async (id) => {
    try {
      await dispatch(acceptAdoption(id));
      dispatch(allAdoptions("", "", 1, 5, "", ""));
      console.log("Adopción aceptada:", id);
    } catch (error) {
      console.error("Error al aceptar la adopción:", error);
    }
  };

  const handleRefuse = async (id) => {
    try {
      await dispatch(refuseAdoption(id));
      dispatch(allAdoptions("", "", 1, 5, "", ""));
      console.log("Adopción rechazada:", id);
    } catch (error) {
      console.error("Error al rechazar la adopción:", error);
    }
  };


  const handleNextPage = (page) => {
    dispatch(allAdoptions("", "", page, 5, "", ""));
  };

  const handlePrevPage = (page) => {
    dispatch(allAdoptions("", "", page, 5, "", ""));
  };



  return (
    <div className="container">
      <div className="row mt-0">
        <div className="col-md-9" >
          <div className="d-flex flex-column justify-content-center align-items-center my-2">
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
                {forms && forms.map(({ id, status, user, animal }) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{user.email}</td>
                    <td>{animal.name}</td>
                    <td>{status}</td>
                    <td>
                      <button className="btn btn-success" onClick={() => handleAccept(id)}>Aceptar</button>
                    </td>
                    <td>
                      <button className="btn btn-danger" onClick={() => handleRefuse(id)}>Rechazar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="m-5" >
              <Pagination
                pagination={pagination}
                onNextPage={handleNextPage}
                onPrevPage={handlePrevPage}
              />
            </div>
          </div>
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