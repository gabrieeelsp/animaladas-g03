import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.css";
import perfil_img from "../../img/perfil_default.png";
import Profilemenu from "../PropdownProfile/Profilemenu";
import Modalprofile from "./modalprofile";
import { useDispatch, useSelector } from "react-redux";
import { infologin } from "../../redux/actions/user_action";
import { sign_out } from "../../redux/actions/user_action";
import SuccesModal from "../SuccessModal/SuccesModal";
import axios from "axios";
//import { useLocalstore } from "../../scripts/uselocalstore";
export default function Nav(props) {
  const user_profile = useSelector((state) => state.UserReducer);

  const Navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [MessageModal, SetMessageModal] = useState("");

  console.log("estas son las props", SetMessageModal);
  const [ShowModalSucces, SetShowModalSucces] = useState(false);
  let showloginbutton = true;
  let showprofile_img = false;
  let user_info = {};

  const [form_edituser, Setformedituser] = useState({
    id: "",
    name: "",
    email: "",
    lastName: "",
    address: "",
    phone: "",
    imageProfile: "",
    password: "",
  });
  useEffect(() => {
    Setformedituser({
      id: user_profile.id,
      name: user_profile.name,
      email: user_profile.email,
      lastName: user_profile.lastName,
      address: user_profile.address,
      phone: user_profile.phone,
      imageProfile: user_profile.imageProfile,
      password: "",
    });
  }, [user_profile]);
  console.log(
    "valor de la informacion del usuario una vez lgoueado",
    form_edituser
  );
  const [showprofile, Setshowprofile] = useState(false);
  const [showmodalprofile, Setshowmodalprofile] = useState(false);
  if (
    location.pathname === "/login" ||
    location.pathname === "/admin" ||
    location.pathname === "/admin/users" ||
    location.pathname === "/admin/animals" ||
    location.pathname === "/register" ||
    location.pathname === "/admin/forms"
  ) {
    return null;
  }

  const menuprofile = (e) => {
    Setshowprofile(!showprofile);
  };
  const handlechange = (e) => {
    Setformedituser({
      ...form_edituser,
      [e.target.name]: e.target.value,
    });
  };
  const closeprofilemenu = (e) => {
    localStorage.removeItem("user_info");
    Setshowprofile(false);
    dispatch(sign_out({}));

    Navigate("/");
  };
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "animaldas_pets");
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dwgufqzjd/image/upload",
      data
    );

    Setformedituser({
      ...form_edituser,
      [e.target.name]: response.data.secure_url,
    });
  };
  const urlBaseAxios =
    import.meta.env.VITE_ENV === "DEV"
      ? import.meta.env.VITE_URL_DEV
      : import.meta.env.VITE_URL_PROD;
  const updateprofile = async (e) => {
    const response = await axios.put(
      `${urlBaseAxios}/user/changeUserData`,
      form_edituser
    );
    const { data } = response;
    if (data === "Informacion del Usuario actualizada.") {
      SetMessageModal("¡Bien! se actualizo tu informacion.");
      SetShowModalSucces(true);
    }
  };
  if (window.localStorage.user_info) {
    user_info = JSON.parse(localStorage.getItem("user_info"));
    showloginbutton = false;
    showprofile_img = true;
  }
  if (JSON.parse(localStorage.getItem("user_info")) === "") {
    showloginbutton = true;
    showprofile_img = false;
  }
  // De forma similar a componentDidMount y componentDidUpdate

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
              <li className="nav-item">
                <NavLink to="/estadisticas">
                  <button
                    className="btn btn-outline-warning p-1 mx-3"
                    type="button"
                  >
                    Estadisticas
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
                src={user_profile.imageProfile}
                style={{
                  width: "40px",
                  cursor: "pointer",
                  borderRadius: "50%",
                }}
              ></img>
            )}
            {showprofile && (
              <div className="sub-menu-wrap">
                <div className="sub-menu">
                  <div className="user-info">
                    <img
                      src={user_profile.imageProfile}
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
                  <NavLink to="admin">
                    <a href="#" className="sub-menu-link">
                      <i className="bi bi-bag-heart"></i>
                      <p>Panel</p>
                      <span>{">"}</span>
                    </a>
                  </NavLink>
                  <a href="#" className="sub-menu-link">
                    <i className="bi bi-escape"></i>
                    <p onClick={(e) => closeprofilemenu(e)}>Cerrar sesionp</p>
                    <span>{">"}</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          <Modalprofile
            modalstate={showmodalprofile}
            setmodalstate={Setshowmodalprofile}
            form_edituser={form_edituser}
            doit={menuprofile}
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
                value={form_edituser.name}
                onChange={(e) => handlechange(e)}
              />
            </div>
            <div className="input-group mt-1">
              <div className="input-group-text bg-warning text-white">
                <i className="bi bi-person-fill-add"></i>
              </div>
              <input
                className="form-control bg-light"
                type="text"
                placeholder="Lastname*"
                name="lastName"
                value={form_edituser.lastName}
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
                value={form_edituser.email}
                onChange={(e) => handlechange(e)}
                disabled="disabled"
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
                value={form_edituser.phone}
                onChange={(e) => handlechange(e)}
              />
            </div>
            <div className="input-group mt-1">
              <div className="input-group-text bg-warning text-white">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <input
                className="form-control bg-light"
                type="text"
                placeholder="Direccion*"
                name="address"
                value={form_edituser.address}
                onChange={(e) => handlechange(e)}
              />
            </div>

            <div className="input-group mt-1">
              <div className="input-group-text bg-warning text-white">
                <i className="bi bi-lock"></i>
              </div>
              <input
                className="form-control bg-light"
                type="password"
                placeholder="Contraseña*"
                name="password"
                value={form_edituser.password}
                onChange={(e) => handlechange(e)}
              />
            </div>
            <div class=" input-group mb-1 mt-3">
              <input
                class="form-control text-center"
                type="file"
                id="formFile"
                onChange={uploadImage}
                name="imageProfile"
              ></input>
            </div>
            <button
              className="btn text-white w-100 mt-4 fw-bold shadow-sm bg-warning"
              onClick={(e) => updateprofile(e)}
            >
              Actualizar
            </button>
          </Modalprofile>
        </div>

        <SuccesModal
          MessageModal={MessageModal}
          ShowModalMessage={ShowModalSucces}
          SetShowModalMessage={SetShowModalSucces}
        ></SuccesModal>
      </nav>
    </div>
  );
}

/*
https://res.cloudinary.com/dwgufqzjd/image/upload/v1707404450/Proyecto_animaladas/default/w2jbmtfjvfjn1alnnpxb.png
              */
