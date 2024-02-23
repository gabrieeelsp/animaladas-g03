import { NavLink } from "react-router-dom";
import {
  get_allreviews,
  acceptReview,
  refuseReview,
  clearAll,
} from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Pagination from "../../Components/Pagination/Pagination";

export default function AdminReviews() {
  const reviews = useSelector((state) => state.rootReducer.reviews);
  const pagination = useSelector((state) => state.rootReducer.pagination2);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearAll());
    dispatch(get_allreviews("", 5, 1, ""));
  }, []);

  const handleAccept = async (id) => {
    try {
      await dispatch(acceptReview(id));
      dispatch(get_allreviews("", 5, 1, ""));
    } catch (error) {
    }
  };

  const handleRefuse = async (id) => {
    try {
      await dispatch(refuseReview(id));
      dispatch(get_allreviews("", 5, 1, ""));
    } catch (error) {
    }
  };

  const handleNextPage = (page) => {
    dispatch(get_allreviews("", 5, page, ""));
  };

  const handlePrevPage = (page) => {
    dispatch(get_allreviews("", 5, page, ""));
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", marginTop: "0px", marginBottom: "-130px" }}
    >
      <div className="row mt-0">
        <div className="col-md-9 d-flex justify-content-center align-items-center">
          <div
            className="text-center fs-5"
            style={{ padding: "15px", width: "1000px" }}
          >
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nombre usuario</th>
                  <th scope="col">Review</th>
                  <th scope="col">Estado formulario</th>
                  <th scope="col">Aceptar</th>
                  <th scope="col">Rechazar</th>
                </tr>
              </thead>
              <tbody>
                {reviews &&
                  reviews.map(({ id, user_name, comment, isReviewed }) => (
                    <tr>
                      <th scope="row">{id}</th>
                      <td className="text-warning text-center">{user_name}</td>
                      <td 
                        className="text-warning text-center" 
                        style={{ maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                        data-bs-toggle="tooltip" 
                        data-bs-placement="top" 
                        title={comment} // Utilizamos el atributo title para mostrar el comentario completo al pasar el mouse sobre él
                      >
                        {comment}
                      </td>
                      <td className="text-warning text-center">{isReviewed}</td>
                      <td>
                        <button
                          className="btn btn-success"
                          onClick={() => handleAccept(id)}
                        >
                          Aceptar
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleRefuse(id)}
                        >
                          Rechazar
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
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
              <i className="bi-house-door-fill"></i>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
