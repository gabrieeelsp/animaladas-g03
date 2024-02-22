import { NavLink } from "react-router-dom";
import { allAdoptions, clearAll, acceptAdoption, refuseAdoption } from "../../redux/actions/actions"
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Pagination from "../../Components/Pagination/Pagination"


export default function AdminForms() {
  const forms = useSelector((state) => state.rootReducer.allAdoptions);
  const pagination = useSelector((state) => state.rootReducer.pagination1);
  const [formData, setFormData] = useState({
    familyMembers: 0,
    allAgree: "si",
    hasOutdoorSpace: "si",
    assumesResponsibility: "si",
  });


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
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", marginTop: "0px", marginBottom: "-130px" }}>
      <div className="row mt-0">
        <div className="col-md-9">
          <div className="d-flex justify-content-center align-items-center" style={{ width: "950px" }}>
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nombre solicitante</th>
                  <th scope="col">Perro solicitado</th>
                  <th scope="col">Estado formulario</th>
                  <th scope="col">Aceptar</th>
                  <th scope="col">Rechazar</th>
                  <th scope="col">Entrevista</th>
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
                    <td>
                      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#staticBackdrop${id}`}>
                        Formulario
                      </button>
                    </td>
                    <div
                      className="modal fade modal-dark"
                      id={`staticBackdrop${id}`}
                      data-bs-keyboard="false"
                      tabIndex="-1"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content bg-dark text-light">
                          <div className="modal-header">
                            <h1 className="modal-title fs-5">
                              Adoption Form
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <form>
                            <div className="modal-body">

                              <label>Cantidad de miembros de la familia:</label>
                              <input type="number" id="familyMembers" name="familyMembers" value={formData.familyMembers} onChange={(e) => setFormData({ ...formData, familyMembers: e.target.value })} />

                              <label>¿Están todos de acuerdo con la adopción?</label>
                              <select id="allAgree" name="allAgree" value={formData.allAgree} onChange={(e) => setFormData({ ...formData, allAgree: e.target.value })}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                              </select>

                              <label>¿Tienen patio, terraza o balcón?</label>
                              <select id="allAgree" name="allAgree" value={formData.hasOutdoorSpace} onChange={(e) => setFormData({ ...formData, hasOutdoorSpace: e.target.value })}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                              </select>

                              <label>¿Estas dispuesto/a a asumir esta responsabilidad?</label>
                              <select id="allAgree" name="allAgree" value={formData.assumesResponsibility} onChange={(e) => setFormData({ ...formData, assumesResponsibility: e.target.value })}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                              </select>

                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Cerrar
                              </button>
                              <button
                                type="submit"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                              >
                                Enviar
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="m-5 d-flex justify-content-center align-items-center ">
            <Pagination
              pagination={pagination}
              onNextPage={handleNextPage}
              onPrevPage={handlePrevPage}
            />
          </div>
        </div>
      </div>
      <div className="col-md-3">
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