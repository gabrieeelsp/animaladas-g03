import React, { useState } from "react";
import "./Add-animal.css";
import adoptimg from "../../img/logoanimaladas.png";
import axios from "axios";
export default function Addanimal() {
  const [Url_Imagen, setUrl_Imagen] = useState("");

  const [dogdata, Setdogdata] = useState({
    name: "",
    gender: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    species: "",
    status: "",
    size: "",
    weight: "",
    vaccines: false,
    estimatebirthyear: "",
    castrated: false,
    disability_illness: false,
  });
  //cloud name:dwgufqzjd
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
    Setdogdata({
      ...dogdata,
      [e.target.name]: response.data.secure_url,
    });
  };

  const handlechange = (event) => {
    console.log("ingres a hanldechange", event.target.value);
    let value = event.target.value;
    if (
      event.target.name === "vaccines" ||
      event.target.name === "disability_illness" ||
      event.target.name === "castrated"
    ) {
      value = true;
    }
    console.log("valor de value", value);
    Setdogdata({
      ...dogdata,
      [event.target.name]: value,
    });
  };

  const save_dog = (e) => {
    console.log("ingreo button savedog");
    axios.post("http://localhost:3001/animal/createAnimals", dogdata);
    Setdogdata({
      name: "",
      gender: "",
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      species: "",
      status: "",
      size: "",
      weight: "",
      vaccines: false,
      estimatebirthyear: "",
      castrated: false,
      disability_illness: false,
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
                name="name"
                type="text"
                className="form-control form form-control-lg bg-light fs-6"
                placeholder="Nombre"
                onChange={(e) => handlechange(e)}
              ></input>
            </div>
            <div className="input-group">
              <select
                className=" form-select  mb-1 col-2"
                aria-label="Default select example"
                style={{ width: "" }}
                onChange={(e) => handlechange(e)}
                name="gender"
              >
                <option selected>Selecciona el genero</option>
                <option value="Macho">Macho</option>
                <option value="Hembra">Hembra</option>
              </select>
            </div>
            <div className="input-group">
              <select
                className=" form-select  mb-1 col-2"
                aria-label="Default select example"
                style={{ width: "" }}
                name="species"
                onChange={(e) => handlechange(e)}
              >
                <option selected>Selecciona la especie</option>
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
              </select>
            </div>
            <div className="input-group">
              <select
                className=" form-select  mb-1 col-2"
                aria-label="Default select example"
                style={{ width: "" }}
                name="status"
                onChange={(e) => handlechange(e)}
              >
                <option selected>Selecciona el estado actual</option>
                <option value="Rescatado">Rescatado</option>
                <option value="Adopcion">Adopcion</option>
                <option value="Adoptado">Adoptado</option>
              </select>
            </div>
            <div className="input-group">
              <select
                className=" form-select  mb-1 col-2"
                aria-label="Default select example"
                style={{ width: "" }}
                onChange={(e) => handlechange(e)}
                name="size"
              >
                <option selected>Selecciona peso</option>
                <option value="Pequeño">Pequeño</option>
                <option value="Mediano">Mediano</option>
                <option value="Grande">Grande</option>
              </select>
            </div>
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control form form-control-lg bg-light fs-6"
                placeholder="Año de nacimiento"
                name="estimatebirthyear"
                onChange={(e) => handlechange(e)}
              ></input>
            </div>
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control form form-control-lg bg-light fs-6"
                placeholder="Peso"
                name="weight"
                onChange={(e) => handlechange(e)}
              ></input>
            </div>
            <label className="input-group mb-1 mt-3 text-warning">
              Foto del rescate (opcional):
            </label>
            <div class=" input-group mb-1 mt-3">
              <input
                class="form-control"
                type="file"
                id="formFile"
                onChange={uploadImage}
                name="image1"
              ></input>
            </div>
            <label className="input-group mb-1 mt-3 text-warning">
              Foto para adopcion :
            </label>
            <div class=" input-group mb-1 mt-3">
              <input
                class="form-control"
                type="file"
                id="formFile"
                onChange={uploadImage}
                name="image2"
              ></input>
            </div>
            <label className="input-group mb-1 mt-3 text-warning">
              Foto adoptado:
            </label>
            <div class=" input-group mb-1 mt-3">
              <input
                class="form-control"
                type="file"
                id="formFile"
                onChange={uploadImage}
                name="image3"
              ></input>
            </div>
            <label className="input-group mb-1 mt-3 text-warning">
              Foto adicional (opcional):
            </label>
            <div class=" input-group mb-1 mt-3">
              <input
                class="form-control"
                type="file"
                id="formFile"
                onChange={uploadImage}
                name="image4"
              ></input>
            </div>
            <div className="input-group mb-1 d-flex ">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="formCheck"
                  name="vaccines"
                  onChange={(e) => handlechange(e)}
                ></input>
                <label
                  for="formCheck"
                  className="form-check-label text-warning"
                >
                  <small>Vacunado(a)</small>
                </label>
              </div>
            </div>
            <div className="input-group mb-1 d-flex ">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="formCheck"
                  name="disability_illness"
                  onChange={(e) => handlechange(e)}
                ></input>
                <label
                  for="formCheck"
                  className="form-check-label text-warning"
                >
                  <small>Cuidados especiales</small>
                </label>
              </div>
            </div>
            <div className="input-group mb-1 d-flex ">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="formCheck"
                  name="castrated"
                  onChange={(e) => handlechange(e)}
                ></input>
                <label
                  for="formCheck"
                  className="form-check-label text-warning"
                >
                  <small>Castrado</small>
                </label>
              </div>
            </div>
            <div className="input-group mb-3">
              <button
                onClick={(e) => save_dog(e)}
                className="btn btn-lg btn-warning w-100 fs-6 text-white fw-bold"
              >
                Crear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*terminado*/
