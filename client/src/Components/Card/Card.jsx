import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteAnimal } from '../../redux/actions/actions';

export default function Card(props) {
  const dispatch = useDispatch();


  const {id, name, estimatedBirthYear, size, species, gender, image2, castrated, enabled} = props;

  const calculateAge = (estimatedBirthYear) => {
    if (!estimatedBirthYear) {
        return "Edad desconocida";
    }

    const currentYear = new Date().getFullYear();
    const age = currentYear - estimatedBirthYear;

    return `${age} años`;
};

const handleDeleteAnimal = () => {
  dispatch(deleteAnimal(id));
};

if(!enabled){
  return(
    <div className="card text-bg-dark text-warning mb-3 d-inline-block p-0 mt-3 mb-3" style={{ width: "250px", height:"600px", borderRadius: "30px", justifyContent:"space-evenly" }}>
      <img src={image2 ? image2: "https://i.pinimg.com/originals/48/cf/7f/48cf7fff6428fe2b9665c4f6f6d20975.jpg"} className="card-img p-3" alt="..." style={{ borderRadius: "30px", height:"200px", objectFit:"cover" }} />
      <div className="card-body" style={{textAlign:"left", margin:"10px", height:"350px", justifyContent:"space-between", display:"flex", flexDirection: "column"}}>
        <h3 className="card-title">{name.split(" ", 1)}</h3>
        <h6 className="card-text text-left">Edad (estimada): {calculateAge(estimatedBirthYear)}</h6>
        <h6 className="card-text text-left">Sexo: {gender}</h6>
        <h6 className="card-text text-left">Tamaño: {size}</h6>
        <h6 className="card-text text-left">Especie: {species}</h6>
        <h6 className="card-text text-left">Castrado/a: {castrated ? "Si" : "No"}</h6>
        <h6 className="card-text text-left">enabled: {enabled ? "Si" : "No"}</h6>
        <Link to={`/detail/${id}`} className="btn btn-warning btn-block text-dark" style={{margin: "10px"}}>Adoptar</Link>
        <button
          onClick={handleDeleteAnimal}
          className="btn btn-danger btn-block text-dark"
          style={{ margin: "10px" }}
        >
          Eliminar
        </button>
      </div>
    </div>
  )}else{
    return null;
  }
}
