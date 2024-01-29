import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/logoanimaladas.png";
import logo_google from "../../img/logo_google.png";
import axios from "axios";
export default function Register() {
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
  const uploadImage = async (e) => {
    console.log("target name", e.target.name);
    //  console.log("ingreso a la funcion");
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "animaldas_pets");
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dwgufqzjd/image/upload",
      data
    );
    setUrl_Imagen(response.data.secure_url);
    console.log("data de cloudinary", response.data.secure_url);
    Setuserdata({
      ...userdata,
      [e.target.name]: response.data.secure_url,
    });
  };
  const handlechange = (event) => {
    let value = event.target.value;
    Setuserdata({
      ...userdata,
      [event.target.name]: value,
    });
  };
  const register_user = (event) => {
    const [data] = axios.post(
      "http://localhost:3001/user/createUser",
      userdata
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

    console.log("la respuesta", data);
  };
  console.log(userdata);
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form>
        <div
          className="bg-dark p-5 rounded-5 shadow"
          style={{ width: "25rem" }}
        >
          <div className="d-flex justify-content-center">
            <img src={logo} alt="login-icon" style={{ width: "7rem" }} />
          </div>
          <div>
            <h1 className="text-center fs-1 fw-bold text-warning">
              Create Account
            </h1>
          </div>
          <div className="input-group mt-4">
            <div className="input-group-text bg-warning text-white">
              <i className="bi bi-person-fill-add"></i>
            </div>
            <input
              className="form-control bg-light"
              type="text"
              placeholder="Name"
              name="name"
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
              placeholder="Last name"
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
              placeholder="Phone number"
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
              placeholder="Address"
              name="address"
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
              placeholder="Email"
              name="email"
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
              placeholder="Password"
              name="password"
              onChange={(e) => handlechange(e)}
            />
          </div>
          <label className="input-group mb-1 mt-3 text-warning">
            Foto de perfil:
          </label>
          <div class=" input-group mb-1 mt-3">
            <input
              class="form-control"
              type="file"
              id="formFile"
              onChange={uploadImage}
              name="imageProfile"
            ></input>
          </div>
          <div
            className="btn text-white w-100 mt-4 fw-bold shadow-sm bg-warning"
            onClick={(e) => register_user(e)}
          >
            Create Account
          </div>

          <div className="d-flex gap-1 justify-content-center text-warning mt-1">
            <div>You have an account?</div>
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <a
                href="#"
                className="text-decoration-none fw-semibold text-warning"
              >
                Sing in
              </a>
            </NavLink>
          </div>

          <div className="p-3">
            <div className="border-bottom text-center text-warning">
              <span className="bg-dark">or</span>
            </div>
          </div>
          <div className="btn d-flex gap-2 justify-content-center border mt-3 shadow-sm">
            <img
              src={logo_google}
              alt="google-icon"
              style={{ height: "1.6rem" }}
            />
            <div className="fw-semibold text-secondary">
              Continue with Google
            </div>
          </div>
          <NavLink to="/">
            <div className="btn text-white w-100 mt-4 fw-bold shadow-sm bg-warning">
              Return to Home
            </div>
          </NavLink>
        </div>
      </form>
    </div>
  );
}
