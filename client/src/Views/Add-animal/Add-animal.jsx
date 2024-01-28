import React, { useState } from "react";
import "./Add-animal.css";
import adoptimg from "../../img/logoanimaladas.png";
import axios from "axios";
export default function Addanimal() {
  const [Url_Imagen, setUrl_Imagen] = useState("");

  const [dogdata, Setdogdata] = useState({
    nombre: "",
    edad: "",
    tamano: "",
    peso: "",
    color: "",
    comentario: "",
    vacunado: "false",
  });
  //cloud name:dwgufqzjd
  const uploadImage = async (e) => {
    //  console.log("ingreso a la funcion");
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "animaldas_pets");
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dwgufqzjd/image/upload",
      data
    );
    //  console.log("ladata es", response.data);
    setUrl_Imagen(response.data.secure_url);
    // console.log("laurl es:", Url_Imagen);
    secure_url;
  };

  const handlechange = (event) => {
    let value = event.target.value;
    if (event.target.name === "vacunado") {
      value = true;
    }
    console.log("valor de value", value);
    Setdogdata({
      ...dogdata,
      [event.target.name]: value,
    });
  };

  console.log(dogdata);
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 mb-2 mt-2">
      <div className="row  rounded-5 p-3 bg-dark shadow box-area border-primary">
        <div
          className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
          style={{ background: "#343a40" }}
        >
          <div className="featured-image mb-3">
            <img
              src={adoptimg}
              className="img-fluid"
              style={{ width: "250px" }}
            ></img>
          </div>
          <p
            className="text-warning fs-2"
            style={{
              fontFamily: "font-family: 'Courier New', Courier, monospace",
              fontWeight: "600",
            }}
          >
            <i className="bi bi-heart-fill"></i>
          </p>
          <small
            className="text-warning text-wrap text-center"
            style={{
              width: "17rem",
              fontFamily: "Courier New', Courier, monospace",
            }}
          >
            "Mi raza favorita es adoptado"
          </small>
        </div>
        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <div className="header-tex text-warning mb4">
              <h2>INGRESO DE MASCOTAS</h2>
              <p>Subir una mascota para adopción</p>
            </div>
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control form form-control-lg bg-light fs-6"
                placeholder="Nombre"
<<<<<<< HEAD
=======
                onChange={(e) => handlechange(e)}
                name="nombre"
>>>>>>> 3426463850d87dad2605b5f013ddc39e546ffd74
              ></input>
            </div>
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control form form-control-lg bg-light fs-6"
                placeholder="Edad"
<<<<<<< HEAD
=======
                onChange={(e) => handlechange(e)}
                name="edad"
>>>>>>> 3426463850d87dad2605b5f013ddc39e546ffd74
              ></input>
            </div>
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control form form-control-lg bg-light fs-6"
                placeholder="Tamaño"
<<<<<<< HEAD
=======
                name="tamano"
                onChange={(e) => handlechange(e)}
>>>>>>> 3426463850d87dad2605b5f013ddc39e546ffd74
              ></input>
            </div>
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control form form-control-lg bg-light fs-6"
                placeholder="Peso"
<<<<<<< HEAD
=======
                name="peso"
                onChange={(e) => handlechange(e)}
>>>>>>> 3426463850d87dad2605b5f013ddc39e546ffd74
              ></input>
            </div>
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control form form-control-lg bg-light fs-6"
<<<<<<< HEAD
                placeholder="Sexo"
=======
                placeholder="Color"
                name="color"
                onChange={(e) => handlechange(e)}
>>>>>>> 3426463850d87dad2605b5f013ddc39e546ffd74
              ></input>
            </div>
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control form form-control-lg bg-light fs-6"
<<<<<<< HEAD
                placeholder="Enfermedad crónica y/o discapacidad"
              ></input>
            </div>
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control form form-control-lg bg-light fs-6"
                placeholder="Castrado"
              ></input>
            </div>
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control form form-control-lg bg-light fs-6"
                placeholder="Historia de rescate"
              ></input>
            </div>
            <p></p>
=======
                placeholder="Comentario/descripción"
                name="comentario"
                onChange={(e) => handlechange(e)}
              ></input>
            </div>
            <div class=" input-group mb-1 mt-3">
              <label for="formFile" class="form-label"></label>
              <input
                class="form-control"
                type="file"
                id="formFile"
                onChange={uploadImage}
              ></input>
            </div>
>>>>>>> 3426463850d87dad2605b5f013ddc39e546ffd74
            <div className="input-group mb-1 d-flex ">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="formCheck"
                  name="vacunado"
                  onChange={(e) => handlechange(e)}
                ></input>
                <label
                  for="formCheck"
                  className="form-check-label text-warning"
                >
<<<<<<< HEAD
                  <small>Vacunado</small>
=======
                  <small>Vacunado(a)</small>
>>>>>>> 3426463850d87dad2605b5f013ddc39e546ffd74
                </label>
              </div>
            </div>

            <div className="input-group mb-3">
              <button className="btn btn-lg btn-warning w-100 fs-6 text-white fw-bold">
                Crear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
