import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { clearAll, animalById, createForm, allAdoptions, } from "../../redux/actions/actions";
import ModalError from "../../Components/ErrorModal/ErrorModal";
import SuccessModal from "../../Components/SuccessModal/SuccesModal";

export default function Detail(props) {
  const [ShowModalSuccess, SetShowModalSuccess] = useState(false);

  const { MessageModal, SetMessageModal } = props;
  const { id } = useParams();
  const dispatch = useDispatch();
  const [ShowModalError, SetShowModalError] = useState(false);
 
  const animal = useSelector((state) => state.rootReducer.animalById);
  const userId = window.localStorage.getItem("user_info")
    ? JSON.parse(window.localStorage.getItem("user_info")).id
    : null;
  const allAdoptions = useSelector((state) => state.rootReducer.allAdoptions);

  useEffect(() => {
    const getAnimalDetail = () => {
      dispatch(clearAll());
      dispatch(animalById(id));
    };
    getAnimalDetail();
  }, [dispatch, id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const adoptionFormData = {
      userId: userId,
      animalId: animal.id,
      familyMembers: 0,
      allAgree: false,
      hasOutdoorSpace: false,
      assumesResponsibility: false,
    };
    dispatch(createForm(adoptionFormData))
      // agregar modal de agradecimiento
      .then(() => {
        SetShowModalSuccess(true);
        SetMessageModal("Gracias por iniciar el tramite de adopción.");
      })
      // agregar modal de avisoq eu ya existe una slicitud pendiente
      .catch(() => {
        SetShowModalError(true);
        SetMessageModal("Ya tienes una solicitud pendiente para este animal.");
      });
  };

  const calculateAge = (estimatedBirthYear) => {
    if (!estimatedBirthYear) {
      return "Edad desconocida";
    }

    const currentYear = new Date().getFullYear();
    const age = currentYear - estimatedBirthYear;

    return `${age} años`;
  };

  return (
    <div>
      <div
        className="container d-flex align-items-center justify-content-center my-5"
        style={{ paddingTop: "25px" }}
      >
        <div
          className="row bg-dark p-4 align-items-center justify-content-center"
          style={{ width: "80%", height: "5%", borderRadius: "50px" }}
        >
          <div className="col">
            <img
              src={
                animal.image2
                  ? animal.image2
                  : "https://i.pinimg.com/originals/48/cf/7f/48cf7fff6428fe2b9665c4f6f6d20975.jpg"
              }
              className="card-img p-3"
              alt={animal.image2}
              style={{
                borderRadius: "500px",
                width: "450px",
                height: "450px",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="col">
            <div
              className="row bg-dark p-4 text-warning"
              style={{
                width: "auto",
                borderRadius: "30px",
                textAlign: "left",
              }}
            >
              <div
                className="container bg-warning"
                style={{
                  marginBottom: "30px",
                  borderRadius: "20px",
                  width: "auto",
                }}
              >
                {" "}
                <h1
                  className="card-title"
                  style={{
                    textAlign: "center",
                    alignContent: "center",
                    padding: "5px",
                    color: "#212529",
                  }}
                >
                  {animal.name}
                </h1>
              </div>
              <h4 className="card-text text-left">Sexo: {animal.gender}</h4>
              <h4 className="card-text text-left">Especie: {animal.species}</h4>
              <h4 className="card-text text-left">
                Edad (estimada): {calculateAge(animal.estimatedBirthYear)}
              </h4>
              <h4 className="card-text text-left">Tamaño: {animal.size}</h4>
              <h4 className="card-text text-left">Peso: {animal.weight} kg</h4>
              <h4 className="card-text text-left">
                Vacunado/a: {animal.vaccines ? "si" : "no"}
              </h4>
              <h4 className="card-text text-left">
                Castrado/a: {animal.castrated ? "si" : "no"}
              </h4>
              <h4 className="card-text text-left">
                Discapacidad: {animal.disability_illness ? "si" : "no"}
              </h4>
              <h4 className="card-text text-left">
                Historia de rescate: {animal.rescued_story}
              </h4>
              <button
                className="btn btn-warning btn-block text-dark"
                onClick={handleFormSubmit}
                disabled={!userId}
              > Adoptar</button>
              {!userId && (
                <h6 className="text-warning mt-3 text-center">Debe estar logueado para poder adoptar</h6>
              )}
            </div>

          </div>

         
        </div>
      </div>

      {ShowModalError && (
        <ModalError
          MessageModal={MessageModal}
          ShowModalMessage={ShowModalError}
          SetShowModalMessage={SetShowModalError}
        ></ModalError>
      )}
      {ShowModalSuccess && (
        <SuccessModal
          MessageModal={MessageModal}
          ShowModalMessage={ShowModalSuccess}
          SetShowModalMessage={SetShowModalSuccess}
        ></SuccessModal>
      )}
    </div>
  );
}
