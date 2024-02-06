import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/logoanimaladas.png";
import logo_google from "../../img/logo_google.png";
import axios from "axios";
import validateform from "./validation_user";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Register() {
  const form = useRef();
  const [error, Seterror] = useState({
    email: "",
    priority_filds: "",
    number_required: "",
    showerror: false,
  });
  const [Url_Imagen, setUrl_Imagen] = useState("");
  const [userdata, Setuserdata] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    imageProfile: "",
  });
  const [email_data, Setemail_data] = useState({
    user_name: "",
    user_email: "",
    user_id: "",
  });
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
      email: validate.email,
      priority_filds: validate.priority_filds,
      number_required: validate.number_required,
      showerror: validate.showerror,
    });
  };
  const register_user = async (event) => {
    event.preventDefault();
    const resp = await axios.post(
      "http://localhost:3001/user/createUser",
      userdata
    );
    const { data } = resp;
    console.log("reusltado de form ", form.current);

    Setemail_data({
      ...email_data,
      user_name: data.name,
      user_email: data.email,
      user_id: data.id,
    });
    emailjs
      .sendForm(
        "service_lfwvijk",
        "template_bg3fyqz",
        form.current,
        "iOYw55Pr2RskRgQZ8"
      )
      .then(
        (result) => {
          console.log("resultado exitoso", result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Usuario registrado!");

    Setuserdata({
      name: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      imageProfile: "",
    });
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
          {error.showerror ? (
            <div class="input-group mb-1 alert alert-warning" role="alert">
              {error.number_required}
              {error.priority_filds}
              {error.email}
            </div>
          ) : null}
          <form ref={form}>
            <div className="input-group mt-4">
              <div className="input-group-text bg-warning text-white">
                <i className="bi bi-person-fill-add"></i>
              </div>
              <input
                className="form-control bg-light"
                type="text"
                placeholder="Nombre*"
                name="user_name"
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
                placeholder="Correo Electrónico*"
                name="user_email"
                onChange={(e) => handlechange(e)}
              />
            </div>
          </form>
          <div className="input-group mt-1">
            <div className="input-group-text bg-warning text-white">
              <i className="bi bi-person-fill-add"></i>
            </div>
            <input
              className="form-control bg-light"
              type="text"
              placeholder="Apellido*"
              name="lastName"
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
              placeholder="Número de contacto*"
              name="phone"
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
              placeholder="Dirección*"
              name="address"
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
              onChange={(e) => handlechange(e)}
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
            ></input>
          </div>
          <button
            className="btn text-white w-100 mt-4 fw-bold shadow-sm bg-warning"
            onSubmit={(e) => register_user(e)}
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
    </div>
  );
}
//http://localhost:3001/user/verify?userId=${userId}
