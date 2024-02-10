import React, { useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import logo from "../../img/logoanimaladas.png";
import logo_google from "../../img/logo_google.png";
import axios from "axios";
import validateform from "./validation_user";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import SuccesModal from "../../Components/SuccessModal/SuccesModal";
import ModalError from "../../img/perfil_default.png";

export default function Register(props) {
  const form = useRef();
  const Navigate = useNavigate();
  const { MessageModal } = props;
  const { SetMessageModal } = props;
  const [ShowModalSuccess, SetShowModalSucess] = useState(false);
  const [ShowModalErorr, SetShowModalError] = useState(false);
  const [error, Seterror] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    priority_fields: "",
    missing_fields: true,
    showerror_name: false,
    showerror_email: false,
    showerror_lastName: false,
    showerror_phone: false,
    showerror_address: false,
    showerror_priority_fields: false,
  });
  const [Url_Imagen, setUrl_Imagen] = useState("");
  const [userdata, Setuserdata] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    imageProfile:
      "https://res.cloudinary.com/dwgufqzjd/image/upload/v1707404450/Proyecto_animaladas/default/w2jbmtfjvfjn1alnnpxb.png",
  });

  const button_disabled = true;
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "animaldas_pets");
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dwgufqzjd/image/upload",
      data
    );
    setUrl_Imagen(response.data.secure_url);
    Setuserdata({
      ...userdata,
      [e.target.name]: response.data.secure_url,
    });
  };
  const handlechange = (event) => {
    let value = event.target.value;
    let valuename = event.target.name;
    if (event.target.name === "user_name") {
      valuename = "name";
    }
    if (event.target.name === "user_email") {
      valuename = "email";
    }
    Setuserdata({
      ...userdata,
      [valuename]: value,
    });
    let validate = validateform(userdata);
    Seterror({
      ...error,
      name: validate.name,
      lastName: validate.lastName,
      email: validate.email,
      phone: validate.phone,
      address: validate.address,
      missing_fields: validate.missing_fields,
      showerror_email: validate.showerror_email,
      showerror_name: validate.showerror_name,
      showerror_lastName: validate.showerror_lastName,
      showerror_phone: validate.showerror_phone,
      showerror_address: validate.showerror_address,
    });
  };
  const register_user = async (event) => {
    if (
      userdata.name === "" ||
      userdata.email === "" ||
      userdata.phone === "" ||
      userdata.lastName === "" ||
      userdata.address === "" ||
      userdata.password === ""
    ) {
      SetMessageModal("Debe completar todo los campos obligatorios ff(*)");
      SetShowModalError(true);
    } else {
      event.preventDefault();
      const resp = await axios.post(
        "http://localhost:3001/user/createUser",
        userdata
      );

      const { data } = resp;
      if (data) {
        SetMessageModal(
          "Bien! se ha registrado el usuario. Te hemos enviado un correo para verificar tu cuenta"
        );
        SetShowModalSucess(true);
        // Navigate("/");
      }

      Setuserdata({
        name: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        imageProfile: "",
      });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={register_user}>
        <div
          className="bg-dark p-5 rounded-5 shadow"
          style={{ width: "30rem" }}
        >
          <div className="d-flex justify-content-center">
            <img src={logo} alt="login-icon" style={{ width: "7rem" }} />
          </div>
          <div>
            <h1 className="text-center fs-1 fw-bold text-warning">
              Crear cuenta
            </h1>
          </div>
          {error.showerror_priority_fields ? (
            <div class="input-group mb-1 alert alert-warning" role="alert">
              {error.priority_fields}
            </div>
          ) : null}

          {error.showerror_email ? (
            <div class="input-group mb-1 alert alert-warning" role="alert">
              {error.email}
            </div>
          ) : null}
          <div className="input-group mt-1">
            <div className="input-group-text bg-warning text-white">
              <i className="bi bi-envelope-at"></i>
            </div>

            <input
              className="form-control bg-light"
              type="email"
              placeholder="Correo Electrónico*"
              name="user_email"
              onChange={handlechange}
              value={userdata.email}
            />
          </div>
          {error.showerror_name ? (
            <div class="input-group mb-1 alert alert-warning" role="alert">
              {error.name}dd
            </div>
          ) : null}
          <div className="input-group mt-4">
            <div className="input-group-text bg-warning text-white">
              <i className="bi bi-person-fill-add"></i>
            </div>

            <input
              className="form-control bg-light"
              type="text"
              placeholder="Nombre*"
              name="user_name"
              onChange={handlechange}
              value={userdata.name}
            />
          </div>

          {error.showerror_lastName ? (
            <div class="input-group mb-1 alert alert-warning" role="alert">
              {error.lastName}
            </div>
          ) : null}
          <div className="input-group mt-1">
            <div className="input-group-text bg-warning text-white">
              <i className="bi bi-person-fill-add"></i>
            </div>

            <input
              className="form-control bg-light"
              type="text"
              placeholder="Apellido*"
              name="lastName"
              onChange={handlechange}
              value={userdata.lastName}
            />
          </div>
          {error.showerror_phone ? (
            <div class="input-group mb-1 alert alert-warning" role="alert">
              {error.phone}
            </div>
          ) : null}
          <div className="input-group mt-1">
            <div className="input-group-text bg-warning text-white">
              <i className="bi bi-telephone"></i>
            </div>

            <input
              className="form-control bg-light"
              type="text"
              placeholder="Número de contacto*"
              name="phone"
              onChange={handlechange}
              value={userdata.phone}
            />
          </div>
          {error.showerror_address ? (
            <div class="input-group mb-1 alert alert-warning" role="alert">
              {error.address}
            </div>
          ) : null}
          <div className="input-group mt-1">
            <div className="input-group-text bg-warning text-white">
              <i className="bi bi-geo-alt-fill"></i>
            </div>

            <input
              className="form-control bg-light"
              type="text"
              placeholder="Dirección*"
              name="address"
              onChange={handlechange}
              value={userdata.address}
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
              onChange={handlechange}
              value={userdata.password}
            />
          </div>
          <label className="input-group mb-1 mt-3 text-warning">
            Foto de perfil:
          </label>
          <div class=" input-group mb-1 mt-3">
            <input
              class="form-control text-center"
              type="file"
              id="formFile"
              onChange={uploadImage}
              name="imageProfile"
              value={userdata.img}
            ></input>
          </div>
          <img
            id="img_profile"
            src={userdata.imageProfile}
            alt="avatar"
            style={{
              borderRadius: "50%",
              border: "3px solid #E4A11B",
              width: "200px",
              height: "200px",
            }}
          />
          <button
            className="btn text-white w-100 mt-4 fw-bold shadow-sm bg-warning"
            onSubmit={(e) => register_user(e)}
            disabled={error.missing_fields}
          >
            Crear cuenta
          </button>

          <div className="d-flex gap-1 justify-content-center text-warning mt-1">
            <div>¿Tienes una cuenta?</div>
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <a
                href="#"
                className="text-decoration-none fw-semibold text-warning"
              >
                Iniciar sesión
              </a>
            </NavLink>
          </div>

          <div className="p-3">
            <div className="text-center text-warning">
              <span className="bg-dark">o</span>
            </div>
          </div>
          <div className="btn d-flex gap-2 justify-content-center border mt-3 shadow-sm">
            <img
              src={logo_google}
              alt="google-icon"
              style={{ height: "1.6rem" }}
            />
            <div className="fw-semibold text-secondary">
              Continuar con Google
            </div>
          </div>
          <NavLink to="/">
            <div className="btn text-white w-100 mt-4 fw-bold shadow-sm bg-warning">
              Volver a Home
            </div>
          </NavLink>
        </div>
      </form>
      {ShowModalSuccess && (
        <SuccesModal
          MessageModal={MessageModal}
          ShowModalMessage={ShowModalSuccess}
          SetShowModalMessage={SetShowModalSucess}
        ></SuccesModal>
      )}
      {ShowModalErorr && (
        <ModalError
          MessageModal={MessageModal}
          ShowModalMessage={ShowModalErorr}
          SetShowModalMessage={SetShowModalError}
        ></ModalError>
      )}
    </div>
  );
}
//http://localhost:3001/user/verify?userId=${userId}
