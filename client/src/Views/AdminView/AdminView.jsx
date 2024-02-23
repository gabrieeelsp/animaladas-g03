import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import EstadisticasBoard from "../../Components/Estadisticas/EstadisticasBoard/EstadisticasBoard";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function AdminView() {
  const navigate = useNavigate();

  const [access, setAccess] = useState({
    isAdmin: true,
  });

  let tokenUser = localStorage.token
  ? localStorage.token
  : null;

  useEffect(() => {
    if (tokenUser !== null) {
      setAccess(jwtDecode(tokenUser))
    } else {
      setAccess({
        isAdmin: false,
      })
    }
  }, [])

  useEffect(() => {
    if(!access.isAdmin) {
      navigate("/")
    }
  }, [access]);

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", marginTop:"0px", marginBottom:"-130px" }}>
      <div className="row mt-0">
        <div className="col-md-9 d-flex justify-content-center align-items-center">
          <div className="text-center fs-5" style={{ padding: "15px", width: "1000px" }}>
            <EstadisticasBoard />
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
