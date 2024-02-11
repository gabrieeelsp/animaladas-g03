import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.css";
import perfil_img from "../../img/perfil_default.png";
import Profilemenu from "../PropdownProfile/Profilemenu";
import Modalprofile from "./modalprofile";
//import { useLocalstore } from "../../scripts/uselocalstore";
export default function Nav() {
  const Navigate = useNavigate();
  const location = useLocation();
  let showloginbutton = true;
  let showprofile_img = false;
  let user_info = {};

  const [showprofile, Setshowprofile] = useState(false);
  const [showmodalprofile, Setshowmodalprofile] = useState(false);
  if (location.pathname === "/login" || location.pathname === "/admin" || location.pathname === "/admin/users" || location.pathname === "/admin/animals" || location.pathname === "/register") {
    return null;
  }

  const menuprofile = (e) => {
    console.log("clik");
    Setshowprofile(!showprofile);
  };
  const handlechange = (e) => {
    setuserinfo({
      ...user_info,
      [e.target.name]: e.target.value,
    });
  };
  const closeprofilemenu = (e) => {
    localStorage.removeItem("user_info");
    Navigate("/");
    menuprofile(e);
  };
  if (window.localStorage.user_info) {
    user_info = JSON.parse(localStorage.getItem("user_info"));
    showloginbutton = false;
    showprofile_img = true;
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 fixed-top">
        <div className="container-fluid">
          <NavLink to="/">
            <span className="navbar-brand text-warning mx-3">
              <i className="bi-house-door-fill"></i>
            </span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/rescatados">
                  <button
                    className="btn btn-outline-warning p-1 mx-3"
                    type="button"
                  >
                    Rescatados
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/adoptar">
                  <button
                    className="btn btn-outline-warning p-1 mx-3"
                    type="button"
                  >
                    Adoptar
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/adoptados">
                  <button
                    className="btn btn-outline-warning p-1 mx-3"
                    type="button"
                  >
                    Adoptados
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contacto">
                  <button
                    className="btn btn-outline-warning p-1 mx-3"
                    type="button"
                  >
                    Contacto
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/add">
                  <button
                    className="btn btn-outline-warning p-1 mx-3"
                    type="button"
                  >
                    Agregar mascota
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/donar">
                  <button
                    className="btn btn-outline-warning p-1 mx-3"
                    type="button"
                  >
                    Aportar
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/requisitos">
                  <button
                    className="btn btn-outline-warning p-1 mx-3"
                    type="button"
                  >
                    Requisitos
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/reviews">
                  <button
                    className="btn btn-outline-warning p-1 mx-3"
                    type="button"
                  >
                    Opiniones
                  </button>
                </NavLink>
              </li>
            </ul>
            <SearchBar />
            {showloginbutton && (
              <NavLink to="/login">
                <button
                  className="btn btn-outline-warning p-1 mx-3"
                  type="button"
                  id="login"
                >
                  <i className="bi bi-person"></i>
                  <span
                    className="texto_responsive"
                    data-phonetext="Mi cuenta"
                    desktoptext="Iniciar Sesión"
                  ></span>
                </button>
              </NavLink>
            )}
            {showprofile_img && (
              <img
                onClick={(e) => menuprofile(e)}
                src={perfil_img}
                style={{ width: "40px", cursor: "pointer" }}
              ></img>
            )}
            {showprofile ? (
              <div className="sub-menu-wrap">
                <div className="sub-menu">
                  <div className="user-info">
                    <img
                      src={perfil_img}
                      style={{ width: "40px", cursor: "pointer" }}
                    ></img>
                    <h2>{user_info && user_info.name ? user_info.name : ""}</h2>
                  </div>
                  <hr
                    style={{
                      border: "1px solid #E4A11B",
                      width: "100%",
                      margin: "15px 0 10px",
                    }}
                  ></hr>

                  <a
                    href="#"
                    className="sub-menu-link"
                    onClick={(e) => Setshowmodalprofile(!showmodalprofile)}
                  >
                    <i className="bi bi-person-lines-fill"></i>
                    <p>Editar Perfil</p>
                    <span>{">"}</span>
                  </a>

                  <a href="#" className="sub-menu-link">
                    <i className="bi bi-bag-heart"></i>
                    <p>Adopciones</p>
                    <span>{">"}</span>
                  </a>
                  <a href="#" className="sub-menu-link">
                    <i className="bi bi-box2-heart"></i>
                    <p>Donaciones</p>
                    <span>{">"}</span>
                  </a>

                  <a href="#" className="sub-menu-link">
                    <i className="bi bi-escape"></i>
                    <p onClick={(e) => closeprofilemenu(e)}>Cerrar sesion</p>
                    <span>{">"}</span>
                  </a>
                </div>
              </div>
            ) : null}
          </div>

          <Modalprofile
            modalstate={showmodalprofile}
            setmodalstate={Setshowmodalprofile}
          >
            <div className="input-group mt-4">
              <div className="input-group-text bg-warning text-white">
                <i className="bi bi-person-fill-add"></i>
              </div>
              <input
                className="form-control bg-light"
                type="text"
                placeholder="Nombre*"
                name="name"
                value={user_info && user_info.name ? user_info.name : ""}
                onChange={(e) => handlechange(e)}
              />
            </div>
            <div className="input-group mt-1">
              <div className="input-group-text bg-warning text-white">
                <i className="bi bi-envelope-at"></i>
              </div>
              <input
                className="form-control bg-light"
                type="email"
                placeholder="Correo Eletronico*"
                name="email"
                value={user_info && user_info.email ? user_info.email : ""}
                onChange={(e) => handlechange(e)}
              />
            </div>
            <div className="input-group mt-1">
              <div className="input-group-text bg-warning text-white">
                <i className="bi bi-telephone"></i>
              </div>
              <input
                className="form-control bg-light"
                type="text"
                placeholder="Numero de contacto*"
                name="phone"
                value={user_info && user_info.phone ? user_info.phone : ""}
                onChange={(e) => handlechange(e)}
              />
            </div>
            <button
              className="btn text-white w-100 mt-4 fw-bold shadow-sm bg-warning"
              onSubmit={(e) => register_user(e)}
            >
              Actualizar
            </button>
          </Modalprofile>
        </div>
      </nav>
    </div>
  );
}

/*

              */
