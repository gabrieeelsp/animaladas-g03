import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAll, deleteAnimal, loadAnimals } from "../../redux/actions/actions";
import ModalAnimals from "../ModalAnimals/ModalAnimals";

export default function CardAdmin(props) {
  const dispatch = useDispatch();
  const nameValue = useSelector((state) => state.rootReducer.searchBarValue);
  const orderByValue = useSelector((state) => state.rootReducer.orderByValue);
  const orderDirValue = useSelector((state) => state.rootReducer.orderDirValue);
  const sizeValue = useSelector((state) => state.rootReducer.sizeValue);
  const speciesValue = useSelector((state) => state.rootReducer.speciesValue);
  const castratedValue = useSelector((state) => state.rootReducer.castratedValue);

  const {id, name, status, species, size, gender, estimatedBirthYear, weight, image1, image2, image3, rescued_story, adoption_story, castrated, disability_illness, vaccines, enabled} = props;

  const handleDeleteAnimal = () => {
    dispatch(clearAll());
    dispatch(deleteAnimal(id)).then(() => {
      dispatch(
        loadAnimals(
          nameValue,
          "",
          sizeValue,
          speciesValue,
          castratedValue,
          1,
          3,
          orderByValue,
          orderDirValue,
          "Todos"
        )
      );
    });
  };

  return (
    <>
      <div
        className="card text-bg-dark text-warning d-inline-block p-0 mx-1"
        style={{
          width: "310px",
          height: "430px",
          borderRadius: "20px",
          justifyContent: "space-evenly",
        }}
      >
        <img
          className="m-2"
          src={
            status === "rescatado" && image1
              ? image1
              : status === "adoptable" && image2
              ? image2
              : image3
          }
          alt={name}
          style={{
            borderRadius: "20px",
            height: "220px",
            width: "290px",
            objectFit: "cover",
          }}
        />
        <div className="card-body d-flex py-0" style={{ height: "180px" }}>
          <div
            className="align-items-center"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <button
              className="btn btn-warning btn-block text-dark fw-bold my-3"
              data-bs-toggle="modal"
              data-bs-target={`#exampleModal${id}`}
              style={{ width: "120px" }}
            >
              Modificar
            </button>
            <button
              onClick={handleDeleteAnimal}
              className={`btn btn-block fw-bold my-2 ${
                enabled ? "btn-danger text-white" : "btn-success text-white"
              }`}
              style={{ width: "120px" }}
            >
              {enabled === true ? "Deshabilitar" : "Habilitar"}
            </button>
          </div>
          <div style={{ textAlign: "left", marginLeft: "15px" }}>
            <h3 className="card-title">{name}</h3>
            <h6 className="card-text">ID: {id}</h6>
            <h6 className="card-text">Estado: {status}</h6>
            <h6 className="card-text">Habilitado: {enabled ? "Si" : "No"}</h6>
          </div>
        </div>
      </div>
      <ModalAnimals
        id={id}
        name={name}
        species={species}
        size={size}
        gender={gender}
        estimatedBirthYear={estimatedBirthYear}
        weight={weight}
        rescued_story={rescued_story}
        adoption_story={adoption_story}
        image2={image2}
        image3={image3}
        status={status}
        enabled={enabled}
        castrated={castrated}
        disability_illness={disability_illness}
        vaccines={vaccines}
      />
    </>
  );
}
