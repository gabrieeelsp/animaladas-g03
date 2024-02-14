import { React } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteAnimal, loadAnimals } from '../../redux/actions/actions';
import ModalAnimals from "../ModalAnimals/ModalAnimals";

export default function CardAdmin(props) {
  const dispatch = useDispatch();
  const nameValue = useSelector((state) => state.rootReducer.searchBarValue);
  const orderByValue = useSelector((state) => state.rootReducer.orderByValue);
  const orderDirValue = useSelector((state) => state.rootReducer.orderDirValue);
  const sizeValue = useSelector((state) => state.rootReducer.sizeValue);
  const speciesValue = useSelector((state) => state.rootReducer.speciesValue);
  const castratedValue = useSelector((state) => state.rootReducer.castratedValue);

  const { id, name, status, image1, image2, image3, enabled } = props;

  const handleDeleteAnimal = () => {
    dispatch(deleteAnimal(id)).then(() => {
      dispatch(loadAnimals(nameValue, '', sizeValue, speciesValue, castratedValue, 1, 3, orderByValue, orderDirValue, 'Todos'));
    });
  };

  return (
    <>
      <div className="card text-bg-dark text-warning d-inline-block p-0 mx-1" style={{ width: "310px", height: "430px", borderRadius: "20px", justifyContent: "space-evenly" }}>
        <img className="my-2" src={status==="rescatado" && image1 ? image1 : status==="adoptable" && image2 ? image2 : image3} alt={name} style={{ borderRadius: "20px", height:"220px", width: "290px", objectFit:"cover" }}/>
        <div className="card-body d-flex py-0" style={{ height: "180px"}}>
          <div className="align-items-center" style={{ display: "flex", flexDirection: "column" }}>
            <button
              className="btn btn-warning btn-block text-dark fw-bold my-3"
              data-bs-toggle="modal" 
              data-bs-target="#exampleModal"
              style={{ width: "120px" }}
            >
              Modificar
            </button>
            <button
              onClick={handleDeleteAnimal}
              className={`btn btn-block fw-bold my-2 ${enabled ? 'btn-danger text-white' : 'btn-success text-white'}`}
              style={{ width: "120px"  }}
            >
              {enabled === true ? 'Deshabilitar' : 'Habilitar'}
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
      <ModalAnimals />
    </>
  );
}
