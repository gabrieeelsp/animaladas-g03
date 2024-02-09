import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteAnimal, loadAnimals } from '../../redux/actions/actions';


export default function CardAdmin(props) {
  const dispatch = useDispatch();
  const nameValue = useSelector((state) => state.searchBarValue);
  const orderByValue = useSelector((state) => state.orderByValue);
  const orderDirValue = useSelector((state) => state.orderDirValue);
  const sizeValue = useSelector((state) => state.sizeValue);
  const speciesValue = useSelector((state) => state.speciesValue);
  const castratedValue = useSelector((state) => state.castratedValue);

  const { id, name, status, image1, image2, image3, enabled } = props;

  const handleDeleteAnimal = () => {
    dispatch(deleteAnimal(id)).then(() => {
      dispatch(loadAnimals(nameValue, '', sizeValue, speciesValue, castratedValue, 1, 2, orderByValue, orderDirValue, ''));
    });
  };

  return (
      <div className="card text-bg-dark text-warning mb-3 d-inline-block p-0 mx-3 mt-3 mb-3" style={{ width: "350px", height: "430px", borderRadius: "30px", justifyContent: "space-evenly" }}>
        <img className="my-3" src={status==="rescatado" && image1 ? image1 : status==="adoptable" && image2 ? image2 : image3} alt={name} style={{ borderRadius: "20px", height:"220px", width: "310px", objectFit:"cover" }}/>
        <div className="card-body d-flex py-0" style={{ height: "350px"}}>
          <div className="align-items-center" style={{ display: "flex", flexDirection: "column" }}>
            <button
              className="btn btn-success btn-block text-dark my-3"
              style={{ width: "100px" }}
            >
              Modificar
            </button>
            <button
              onClick={handleDeleteAnimal}
              className="btn btn-danger btn-block text-dark my-2"
              style={{ width: "100px"  }}
            >
              Eliminar
            </button>
          </div>
          <div className="my-0" style={{ textAlign: "left", marginLeft: "35px" }}>
            <h3 className="card-title">{name}</h3>
            <h6 className="card-text">ID: {id}</h6>
            <h6 className="card-text">Estado: {status}</h6>
            <h6 className="card-text">Habilitado: {enabled ? "Si" : "No"}</h6>
          </div>
        </div>
      </div>
    );
}
