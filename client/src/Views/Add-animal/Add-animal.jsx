import React, { useState } from "react";
import "./Add-animal.css";
import adoptimg from "../../img/logoanimaladas.png";
import axios from "axios";
import validateform from "./validation";
import SuccesModal from "../../Components/SuccessModal/SuccesModal";
import ModalError from "../../Components/ErrorModal/ErrorModal";
export default function Addanimal(props) {
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
    email: "",
    number_required: "",
    priority_filds: "",
    showerror: false,
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
      number_required: validate.number_required,
      priority_filds: validate.priority_filds,
      showerror: validate.showerror,
    });
  };
  const save_dog = async (e) => {
    if (error.showerror) {
      console.log("ingreso ");
      SetMessageModal("Opps, hay errores en el formulario");
      SetShowModalError(true);
    } else {
      const { data } = await axios.post(
        "http://localhost:3001/animal/createAnimals",
        dogdata
      );
      if (data) {
        SetMessageModal("!Bien! Se ha cargado con exito.");
        SetShowModalSucess(true);
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
  };
  const string1 = "hola";

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 mb-2 mt-2">
      <div className="row  rounded-5 p-3 bg-dark shadow box-area border-primary">
        <div
          className=" gallery col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
          style={{ background: "#343a40" }}
        >
          {showlogo ? (
            <div className="featured-image mb-3">
              <img
                src={adoptimg}
                className="img-fluid"
                style={{ width: "250px" }}
              ></img>
            </div>
          ) : null}
          <div className="containerlg">
            <div className="row gy-4 cols-1 ">
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
            {error.showerror ? (
              <div
                className="input-group mb-1 alert alert-warning"
                role="alert"
              >
                {error.number_required}
                {error.priority_filds}
                {error.email}
              </div>
            ) : null}
            <div className="input-group mb-1">
              <input
                name="name"
                type="text"
                className="form-control form form-control-lg bg-light fs-6"
                placeholder="*Nombre"
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
                <option selected>*Selecciona el genero</option>
                <option value="macho">Macho</option>
                <option value="hembra">Hembra</option>
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
                <option selected>*Selecciona la especie</option>
                <option value="perro">Perro</option>
                <option value="gato">Gato</option>
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
                <option selected>*Selecciona el estado actual</option>
                <option value="rescatado">Rescatado</option>
                <option value="adoptable">Adoptable</option>
                <option value="adoptado">Adoptado</option>
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
                <option selected>*Selecciona peso</option>
                <option value="chico">Chico</option>
                <option value="mediano">Mediano</option>
                <option value="grande">Grande</option>
              </select>
            </div>
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control form form-control-lg bg-light fs-6"
                placeholder="Año de nacimiento"
                name="estimatedBirthYear"
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
            <div className="form-group">
              <label className="input-group mb-1 mt-3 text-warning">
                Historia del rescate
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="rescued_story"
                onChange={(e) => handlechange(e)}
              ></textarea>
            </div>
            <div className="form-group">
              <label className="input-group mb-1 mt-3 text-warning">
                Historia de la adopción
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="adoption_story"
                onChange={(e) => handlechange(e)}
              ></textarea>
            </div>
            <label className="input-group mb-1 mt-3 text-warning">
              Foto del rescate (opcional):
            </label>
            <div className=" input-group mb-1 mt-3">
              <input
                className="form-control"
                type="file"
                id="image1"
                onChange={uploadImage}
                name="image1"
              ></input>
            </div>
            <label className="input-group mb-1 mt-3 text-warning">
              Foto para adopcion :
            </label>
            <div className=" input-group mb-1 mt-3">
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={uploadImage}
                name="image2"
              ></input>
            </div>
            <label className="input-group mb-1 mt-3 text-warning">
              Foto adoptado:
            </label>
            <div className=" input-group mb-1 mt-3">
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={uploadImage}
                name="image3"
              ></input>
            </div>
            <label className="input-group mb-1 mt-3 text-warning">
              Foto adicional (opcional):
            </label>
            <div className=" input-group mb-1 mt-3">
              <input
                className="form-control"
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
                  htmlFor="formCheck"
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
                  htmlFor="formCheck"
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
                  htmlFor="formCheck"
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

      <SuccesModal
        MessageModal={MessageModal}
        ShowModalMessage={ShowModalSuccess}
        SetShowModalMessage={SetShowModalSucess}
      ></SuccesModal>
      <ModalError
        MessageModal={MessageModal}
        ShowModalMessage={ShowModalErorr}
        SetShowModalMessage={SetShowModalError}
      ></ModalError>
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
