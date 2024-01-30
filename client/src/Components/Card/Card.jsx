import React from "react";
import { Link } from 'react-router-dom';

export default function Card(props) {

  const {id, name, estimatedBirthYear, size, weight, species, gender, image2} = props;

  return (
    <div className="card text-bg-dark text-warning mb-3 d-inline-block p-0 mt-3 mb-3" style={{ width: "250px", borderRadius: "30px" }}>
      <img src={image2 ? image2: "https://i.pinimg.com/originals/48/cf/7f/48cf7fff6428fe2b9665c4f6f6d20975.jpg"} className="card-img p-3" alt="..." style={{ borderRadius: "30px" }} />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text text-left">Nacimiento (año): {estimatedBirthYear}</p>
        <p className="card-text text-left">Tamaño: {size}</p>
        <p className="card-text text-left">Peso: {weight} kg.</p>
        <p className="card-text text-left">Especie: {species}</p>
        <p className="card-text text-left">Sexo: {gender}</p>
        <Link to={`/detail/${id}`} className="btn btn-warning btn-block text-dark" style={{margin: "10px"}}>Adoptar</Link>
      </div>
    </div>
  );
}
