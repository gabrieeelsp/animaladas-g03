import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAll,
  animalById,
  createForm,
  pendingAdoptions,
} from "../../redux/actions/actions";
import ModalError from "../../Components/ErrorModal/ErrorModal";
import SuccessModal from "../../Components/SuccessModal/SuccesModal";

export default function Detail(props) {
  const { MessageModal, SetMessageModal } = props;
  const { id } = useParams();
  const dispatch = useDispatch();
  const [ShowModalError, SetShowModalError] = useState(false);
  const [ShowModalSuccess, SetShowModalSuccess] = useState(false);
  const [formData, setFormData] = useState({
    familyMembers: 0,
    allAgree: "si",
    hasOutdoorSpace: "si",
    assumesResponsibility: "si",
  });
  const animal = useSelector((state) => state.rootReducer.animalById);
  const userId = window.localStorage.getItem("user_info")
    ? JSON.parse(window.localStorage.getItem("user_info")).id
    : null;
  const pendingAdoptionData = useSelector(
    (state) => state.rootReducer.pendingAdoptionData
  );

  useEffect(() => {
    const getAnimalDetail = () => {
      dispatch(clearAll());
      dispatch(animalById(id));
    };
    getAnimalDetail();
  }, [dispatch, id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      if (userId && animal.id) {
        const pendingAdoptionsData = await dispatch(
          pendingAdoptions(userId, id)
        );
        if (pendingAdoptionsData && pendingAdoptionsData.length > 0) {
          const hasPendingAdoption = pendingAdoptionsData.some(
            (adoption) =>
              adoption.userId === userId &&
              adoption.animalId === parseInt(id) &&
              adoption.status === "pendiente"
          );
          if (hasPendingAdoption) {
            SetMessageModal(
              "Ya tienes una solicitud de adopción pendiente para este animal."
            );
            SetShowModalError(true);
            return;
          }
        }
      }

      const adoptionFormData = {
        userId: userId,
        animalId: parseInt(id),
        familyMembers: formData.familyMembers,
        allAgree: formData.allAgree,
        hasOutdoorSpace: formData.hasOutdoorSpace,
        assumesResponsibility: formData.assumesResponsibility,
      };

      dispatch(createForm(adoptionFormData));

      SetMessageModal("¡El formulario de adopción se envió con éxito!");
      SetShowModalSuccess(true);
    } catch (error) {
      console.error("Error al enviar el formulario de adopción:", error);
      SetShowModalError(true);
      SetMessageModal("Error al enviar el formulario de adopción");
    }
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
    <div style={{ paddingTop: "45px" }}>
      <div className="container d-flex align-items-center justify-content-center my-5">
        <div
          className="row bg-dark p-4 align-items-center justify-content-center"
          style={{ width: "1000px", borderRadius: "50px" }}
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
            </div>
            <Link
              to="#"
              className="btn btn-warning btn-block text-dark"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Adoptar
            </Link>
          </div>

          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Adoption Form
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <form onSubmit={handleFormSubmit}>
                  <div className="modal-body">
                    <label htmlFor="familyMembers">
                      Cuantos integrantes por familia:
                    </label>
                    <input
                      type="number"
                      id="familyMembers"
                      name="familyMembers"
                      value={formData.familyMembers}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          familyMembers: parseInt(e.target.value, 10),
                        })
                      }
                    />

                    <label htmlFor="allAgree">Todos están de acuerdo:</label>
                    <select
                      id="allAgree"
                      name="allAgree"
                      value={formData.allAgree}
                      onChange={(e) =>
                        setFormData({ ...formData, allAgree: e.target.value })
                      }
                    >
                      <option value="si">Si</option>
                      <option value="no">No</option>
                    </select>

                    <label htmlFor="hasOutdoorSpace">
                      Tienes patio/balcón/terraza:
                    </label>
                    <select
                      id="hasOutdoorSpace"
                      name="hasOutdoorSpace"
                      value={formData.hasOutdoorSpace}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          hasOutdoorSpace: e.target.value,
                        })
                      }
                    >
                      <option value="si">Si</option>
                      <option value="no">No</option>
                    </select>

                    <label htmlFor="assumesResponsibility">
                      Está dispuesto a asumir la responsabilidad:
                    </label>
                    <select
                      id="assumesResponsibility"
                      name="assumesResponsibility"
                      value={formData.assumesResponsibility}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          assumesResponsibility: e.target.value,
                        })
                      }
                    >
                      <option value="si">Si</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Agregar el SuccessModal */}
      {ShowModalSuccess && (
        <SuccessModal
          MessageModal={MessageModal}
          SetShowModalMessage={SetShowModalSuccess}
          ShowModalMessage={ShowModalSuccess}
        />
      )}

      {/* Agregar el ModalError */}
      {ShowModalError && (
        <ModalError
          MessageModal={MessageModal}
          ShowModalMessage={ShowModalError}
          SetShowModalMessage={SetShowModalError}
        />
      )}
    </div>
  );
}
