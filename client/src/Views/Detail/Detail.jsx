import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { clearAll, animalById } from "../../redux/actions/actions";
import Loader from "../../Components/Loader/Loader";

export default function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const animal = useSelector((state) => state.animalById);
  
    useEffect(() => {
        const getAnimalDetail = async () => {
          dispatch(clearAll());
          await dispatch(animalById(id));
          setLoading(false);
        };
        getAnimalDetail();
      }, [dispatch, id]);
    

    return (
        <div>
        {loading ? (
            <Loader />
          ) : (
        <div className="container d-flex align-items-center justify-content-center my-5">
            <div className="row bg-dark p-4 align-items-center justify-content-center" style={{ width: "2000px", borderRadius: "30px" }}>
                <div className="col">
                    <img src={animal.image2 ? animal.image2: "https://i.pinimg.com/originals/48/cf/7f/48cf7fff6428fe2b9665c4f6f6d20975.jpg"} className="card-img p-3" alt={animal.image2} style={{ borderRadius: "100%",width: "70%" }} />
                </div>
                <div className="col">
                    <div className="row bg-dark p-4 text-warning" style={{ width:"auto", borderRadius: "30px", textAlign:"left" }}>
                    <div className="container " style={{backgroundColor:"#FFC107",marginBottom: "30px", borderRadius:"30px", width:"auto"}}> <h1 className="card-title" style={{textAlign:"center", alignContent:"center", padding:"5px", color:"#212529"}}>{animal.name}</h1></div>
                        <p className="card-text text-left">Sexo: {animal.gender}</p>
                        <p className="card-text text-left">Año de nacimiento: {animal.estimatedBirthYear}</p>
                        <p className="card-text text-left">Tamaño: {animal.size}</p>
                        <p className="card-text text-left">Peso: {animal.weight} kg</p>
                        <p className="card-text text-left">Especie: {animal.species}</p>
                        <p className="card-text text-left">Estado: {animal.status}</p>
                    </div>
                    <Link to="/requisitos" className="btn btn-warning btn-block text-dark">Adoptar</Link>
                </div>
            </div>
            </div>
            )}
        </div>
    );
}



