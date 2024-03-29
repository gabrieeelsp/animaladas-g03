import React, { useState } from "react";
import "./Add-animal.css";
import adoptimg from "../../img/logoanimaladas.png";
import axios from "axios";
import validateform from "./validation";
import SuccesModal from "../../Components/SuccessModal/SuccesModal";
import ModalError from "../../Components/ErrorModal/ErrorModal";
import { useNavigate, NavLink } from 'react-router-dom';

export default function Addanimal(props) {
  const navigate = useNavigate();
  const { MessageModal } = props;
  const { SetMessageModal } = props;
  const [ShowModalSuccess, SetShowModalSucess] = useState(false);
  const [ShowModalErorr, SetShowModalError] = useState(false);
  const array_img = [];
  let showlogo = true;
  const [showimg1, Setshowimg1] = useState(false);
  const [showimg2, Setshowimg2] = useState(false);
  const [showimg3, Setshowimg3] = useState(false);
  const [showimg4, Setshowimg4] = useState(false);
  const [img1, Setimg1] = useState("");
  const [img2, Setimg2] = useState("");
  const [img3, Setimg3] = useState("");
  const [img4, Setimg4] = useState("");
  const [Url_Imagen, setUrl_Imagen] = useState("");
  const [error, setError] = useState({
    name: "",
    species: "",
    status: "",
    size: "",
    weight: "",
    gender: "",
    priority_filds: "",
    estimatedBirthYear: "",
    showerror_priority_filds: false,
    showerror_name: false,
    showerror_species: false,
    showerror_email: false,
    showerror_status: false,
    showerror_weight: false,
    showerror_gender: false,
    showerror_estimatedBirthYear: false,
  });
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
    estimatedBirthYear: "",
    castrated: false,
    disability_illness: false,
    adoption_story: "",
    rescued_story: "",
  });
  if (
    showimg1 === true ||
    showimg2 === true ||
    showimg3 === true ||
    showimg4 === true
  ) {
    showlogo = false;
  } else {
    showlogo = true;
  }
  //cloud name:dwgufqzjd
  const uploadImage = async (e) => {
    const file1 = document.getElementById("image1");
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
    if (e.target.name === "image1") {
      Setimg1(response.data.secure_url);
      Setshowimg1(true);
    }
    if (e.target.name === "image2") {
      Setimg2(response.data.secure_url);
      Setshowimg2(true);
    }
    if (e.target.name === "image3") {
      Setimg3(response.data.secure_url);
      Setshowimg3(true);
    }
    if (e.target.name === "image4") {
      Setimg4(response.data.secure_url);
      Setshowimg4(true);
    }
  };

  const handlechange = (event) => {
    let value = event.target.value;
    if (
      event.target.name === "vaccines" ||
      event.target.name === "disability_illness" ||
      event.target.name === "castrated"
    ) {
      value = true;
    }

    Setdogdata({
      ...dogdata,
      [event.target.name]: value,
    });

    let validate = validateform(dogdata);
    setError({
      ...error,
      name: validate.name,
      species: validate.species,
      status: validate.status,
      size: validate.size,
      weight: validate.weight,
      gender: validate.gender,
      estimatedBirthYear: validate.estimatedBirthYear,
      showerror_name: validate.showerror_name,
      showerror_species: validate.showerror_species,
      showerror_status: validate.showerror_status,
      showerror_weight: validate.showerror_weight,
      showerror_gender: validate.showerror_gender,
      showerror_estimatedBirthYear: validate.showerror_estimatedBirthYear,
    });
  };
  const save_dog = async (e) => {
    if (
      dogdata.name === "" ||
      dogdata.gender === "" ||
      dogdata.species === "" ||
      dogdata.status === "" ||
      dogdata.weight === "" ||
      dogdata.estimatedBirthYear === "" ||
      dogdata.size === ""
    ) {
      /*
      error.priority_filds =
        "Debe completar todo los campos obligatorios ff(*)";
      error.showerror_priority_filds = true;*/
      SetMessageModal("Debe completar todo los campos obligatorios ff(*)");
      SetShowModalError(true);
    } else {
      error.priority_filds = "";
      error.showerror_priority_filds = false;
      const token = localStorage.getItem('token');

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      };
      const urlBaseAxios =
        import.meta.env.VITE_ENV === "DEV"
          ? import.meta.env.VITE_URL_DEV
          : import.meta.env.VITE_URL_PROD;
      const { data } = await axios.post(`${urlBaseAxios}/animal/createAnimals`, dogdata, config);
      if (data) {
        SetMessageModal("!Bien! Se ha cargado con exito.");
        SetShowModalSucess(true);
      } else {
        SetMessageModal("Opps ocurrio un error");
        SetShowModalError(true);
      }
    }

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
      estimatedBirthYear: "",
      castrated: false,
      disability_illness: false,
      rescued_story: "",
      adoption_story: "",
    });
    Setimg1("");
    Setimg2("");
    Setimg3("");
    Setimg4("");
    Setshowimg1(false);
    Setshowimg2(false);
    Setshowimg3(false);
    Setshowimg4(false);

    navigate("/admin/animals");
  };
  const string1 = "hola";
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "700px", marginTop: "35px", marginBottom: "-90px" }}>
      <div className="row rounded-5 p-3 bg-dark border-primary">
        <div className="gallery col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box text-center" style={{ background: "#343a40", width: "600px" }}>
          {showlogo ? (
            <div className="featured-image mb-1">
              <img src={adoptimg} className="img-fluid" style={{ width: "250px" }}></img>
            </div>
          ) : null}
          <div className="containerlg">
            <div className="row gy-4 cols-1 m-2">
              {showimg1 ? (
                <div className="col">
                  <img
                    src={img1}
                    alt=""
                    className="gallery-item"
                    style={{
                      maxWidth: "40vh",
                      maxHeight: "40vh",
                      backgroundColor: "white",
                      padding: "10px",
                      boxShadow: "0px 0px 15px rgba(0,0,0,1)",
                      cursor: "pointer",
                    }}
                  />
                </div>
              ) : null}
              {showimg2 ? (
                <div className="col">
                  <img
                    src={img2}
                    alt=""
                    className="gallery-item"
                    style={{
                      maxWidth: "40vh",
                      maxHeight: "40vh",
                      backgroundColor: "white",
                      padding: "10px",
                      boxShadow: "0px 0px 15px rgba(0,0,0,1)",
                      cursor: "pointer",
                    }}
                  />
                </div>
              ) : null}
              {showimg3 ? (
                <div className="col">
                  <img
                    src={img3}
                    alt=""
                    className="gallery-item"
                    style={{
                      maxWidth: "40vh",
                      maxHeight: "40vh",
                      backgroundColor: "white",
                      padding: "10px",
                      boxShadow: "0px 0px 15px rgba(0,0,0,1)",
                      cursor: "pointer",
                    }}
                  />
                </div>
              ) : null}
              {showimg4 ? (
                <div className="col">
                  <img
                    src={img4}
                    alt=""
                    className="gallery-item"
                    style={{
                      maxWidth: "40vh",
                      maxHeight: "40vh",
                      backgroundColor: "white",
                      padding: "10px",
                      boxShadow: "0px 0px 15px rgba(0,0,0,1)",
                      cursor: "pointer",
                    }}
                  />
                </div>
              ) : null}
            </div>
          </div>
          <p className="text-warning fs-2" style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: "600" }}>
            <i className="bi bi-heart-fill"></i>
          </p>
          <small className="text-warning text-wrap text-center" style={{ width: "17rem", fontFamily: "'Courier New', Courier, monospace" }}>
            "Mi raza favorita es adoptado"
          </small>
        </div>

        <div className="col-md-6 mx-3">
          <div className="row">
            <div className="header-text text-warning">
              <h2>INGRESO DE MASCOTAS</h2>
              <p>Subir una mascota para adopción</p>
            </div>
            {error.showerror_priority_filds ? (
              <div
                className="input-group mb-1 alert alert-warning"
                role="alert"
              >
                {error.priority_filds}
              </div>
            ) : null}
            <div className="col-md-6">
              <div className="input-group mb-1">
                {error.showerror_name ? (
                  <div
                    className="input-group mb-1 alert alert-warning"
                    role="alert"
                  >
                    {error.name}
                  </div>
                ) : null}
                <input
                  name="name"
                  type="text"
                  className="form-control form form-control-lg bg-light fs-6 mx-1"
                  placeholder="*Nombre"
                  onChange={(e) => handlechange(e)}
                ></input>
              </div>
              <div className="input-group">
                <select
                  className=" form-select mb-1 col-2 mx-1"
                  aria-label="Default select example"
                  style={{ width: "" }}
                  onChange={(e) => handlechange(e)}
                  name="gender"
                >
                  <option selected>*Selecciona el genero</option>
                  <option value="macho">Macho</option>
                  <option value="hembra">Hembra</option>
                </select>
              </div>
              <div className="input-group">
                <select
                  className=" form-select mb-1 col-2 mx-1"
                  aria-label="Default select example"
                  style={{ width: "" }}
                  name="species"
                  onChange={(e) => handlechange(e)}
                >
                  <option selected>*Selecciona la especie</option>
                  <option value="perro">Perro</option>
                  <option value="gato">Gato</option>
                </select>
              </div>
              <div className="input-group">
                <select
                  className=" form-select mb-1 col-2 mx-1"
                  aria-label="Default select example"
                  style={{ width: "" }}
                  name="status"
                  onChange={(e) => handlechange(e)}
                >
                  <option selected>*Selecciona el estado actual</option>
                  <option value="rescatado">Rescatado</option>
                  <option value="adoptable">Adoptable</option>
                  <option value="adoptado">Adoptado</option>
                </select>
              </div>
              <div className="input-group">
                <select
                  className=" form-select mb-1 col-2 mx-1"
                  aria-label="Default select example"
                  style={{ width: "" }}
                  onChange={(e) => handlechange(e)}
                  name="size"
                >
                  <option selected>*Selecciona el tamaño</option>
                  <option value="chico">Chico</option>
                  <option value="mediano">Mediano</option>
                  <option value="grande">Grande</option>
                </select>
              </div>
              <div className="input-group mb-1">
                {error.showerror_estimatedBirthYear ? (
                  <div
                    className="input-group mb-1 alert alert-warning mx-1"
                    role="alert"
                  >
                    {error.estimatedBirthYear}
                  </div>
                ) : null}
                <input
                  type="text"
                  className="form-control form form-control-lg bg-light fs-6 mx-1"
                  placeholder="*Año de nacimiento"
                  name="estimatedBirthYear"
                  onChange={(e) => handlechange(e)}
                ></input>
              </div>
              <div className="input-group mb-1">
                {error.showerror_weight ? (
                  <div
                    className="input-group mb-1 alert alert-warning mx-1"
                    role="alert"
                  >
                    {error.weight}
                  </div>
                ) : null}
                <input
                  type="text"
                  className="form-control form form-control-lg bg-light fs-6 mx-1"
                  placeholder="*Peso"
                  name="weight"
                  onChange={(e) => handlechange(e)}
                ></input>
              </div>
              <div className="form-group">
                <label className="input-group mb-1 mt-2 text-warning mx-1">
                  Historia del rescate
                </label>
                <textarea
                  className="form-control mx-1"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="rescued_story"
                  onChange={(e) => handlechange(e)}
                ></textarea>
              </div>
              <div className="form-group">
                <label className="input-group mb-1 mt-2 text-warning mx-1">
                  Historia de la adopción
                </label>
                <textarea
                  className="form-control mx-1"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="adoption_story"
                  onChange={(e) => handlechange(e)}
                ></textarea>
              </div>
            </div>
            <div className="col-md-6">
              <label className="input-group mb-1 mt-2 text-warning mx-1">
                Foto del rescate (opcional):
              </label>
              <div className=" input-group mb-1 mt-2 mx-1">
                <input
                  className="form-control"
                  type="file"
                  id="image1"
                  onChange={uploadImage}
                  name="image1"
                ></input>
              </div>
              <label className="input-group mb-1 mt-2 text-warning mx-1">
                Foto para adopcion :
              </label>
              <div className=" input-group mb-1 mt-2 mx-1">
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  onChange={uploadImage}
                  name="image2"
                ></input>
              </div>
              <label className="input-group mb-1 mt-2 text-warning mx-1">
                Foto adoptado:
              </label>
              <div className="input-group mb-1 mt-2 mx-1">
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  onChange={uploadImage}
                  name="image3"
                ></input>
              </div>
              <label className="input-group mb-1 mt-2 text-warning mx-1">
                Foto adicional (opcional):
              </label>
              <div className=" input-group mb-1 mt-2 mx-1">
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  onChange={uploadImage}
                  name="image4"
                ></input>
              </div>
              <p></p>
              <div className="input-group mb-1 d-flex">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input mx-1"
                    id="formCheck"
                    name="vaccines"
                    onChange={(e) => handlechange(e)}
                  ></input>
                  <label
                    htmlFor="formCheck"
                    className="form-check-label text-warning"
                  >
                    <small>Vacunado(a)</small>
                  </label>
                </div>
              </div>
              <div className="input-group mb-1 d-flex">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input mx-1"
                    id="formCheck"
                    name="disability_illness"
                    onChange={(e) => handlechange(e)}
                  ></input>
                  <label
                    htmlFor="formCheck"
                    className="form-check-label text-warning"
                  >
                    <small>Cuidados especiales</small>
                  </label>
                </div>
              </div>
              <div className="input-group mb-1 d-flex">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input mx-1"
                    id="formCheck"
                    name="castrated"
                    onChange={(e) => handlechange(e)}
                  ></input>
                  <label
                    htmlFor="formCheck"
                    className="form-check-label text-warning mx-1"
                  >
                    <small>Castrado</small>
                  </label>
                </div>
              </div>
            </div>
            <div className="input-group mb-2 mx-1 d-flex justify-content-center">
              <NavLink to="/admin/animals">
                <button className="btn btn-warning btn-block fs-5 fw-bold my-4" style={{ width: "50px" }}>
                  <i className="bi-house-door-fill"></i>
                </button>
              </NavLink>
              <button
                onClick={(e) => save_dog(e)}
                className="btn btn-lg btn-warning rounded-3 fs-6 text-black fw-bold m-4"
                style={{ width: "100px" }}
              >
                Crear
              </button>
            </div>
          </div>
        </div>
      </div>

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

/*terminado*/
/*
            <div className="featured-image mb-3">
              <img
                src="https://res.cloudinary.com/dwgufqzjd/image/upload/v1706718185/Proyecto_animaladas/asiduyraib7esnvk0uza.png"
                className="img-fluid"
                style={{ width: "250px" }}
              ></img>
            </div>

            */
