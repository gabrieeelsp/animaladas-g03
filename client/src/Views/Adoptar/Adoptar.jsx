import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import Paginacion from "../../Components/Pagination/Pagination";
import Loader from "../../Components/Loader/Loader"
import { loadAnimals } from "../../redux/actions/actions";
import "./Adoptar.css";
import React from "react";

export default function Adoptar() {
  const dispatch = useDispatch();
  const animals = useSelector((state) => state.allAnimals);
  const [loading, setLoading] = useState(true);
  const pagination = useSelector((state) => state.pagination);


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(loadAnimals());
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [dispatch]);


  const handleNextPage = (page) => {
    dispatch(loadAnimals(page));
  };

  const handlePrevPage = (page) => {
    dispatch(loadAnimals(page));
  };


return (
  <div>
    {loading ? (
      <Loader />
    ) : (
    <div className="container">
      <div className="row">
        <div className="col-100">
          <img
            className="banner-img"
            src="https://iili.io/JcT3TLg.png"
            alt="dogs-image"
          />
        </div>
        <div className="col-10">
          <div className="row w-100">
            <div className="col-12" style={{display:"flex", flexWrap:"wrap",rowGap:"15px", columnGap:"15px"}}>
            {animals && animals.map((animal) => {
              return(
                <Card
                  key={animal.id}
                  name={animal.name}
                  estimatedBirthYear={animal.estimatedBirthYear}
                  size={animal.size}
                  weight={animal.weight}
                  species={animal.species}
                  gender={animal.gender}
                />)
            })}
            </div>
          </div>
        </div>
        <div
          className="bg-dark col-1 my-3 d-flex flex-column justify-content-center"
          style={{ width: "auto", height: "700px", borderRadius: "20px" }}
        >
<span className="text-warning btn-sm m-3">
            Ordenar por tamaño
          </span>
          <div className="dropdown">
             <button className="btn btn-warning btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tipo de tamaño
             </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="#">Chico</a></li>
              <li><a className="dropdown-item" href="#">Mediano</a></li>
              <li><a className="dropdown-item" href="#">Grande</a></li>
             </ul>
          </div>
          <span className="text-warning btn-sm m-3">
          Ordenar por edad
          </span>
          <div className="dropdown">
             <button className="btn btn-warning btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Rango de edad
             </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="#">Cachorro</a></li>
              <li><a className="dropdown-item" href="#">Joven</a></li>
              <li><a className="dropdown-item" href="#">Adulto</a></li>
             </ul>
          </div>
          <p></p>
          <hr className="col-12" style={{ backgroundColor: "yellow", height: "2px" }} />
          <span className="text-warning btn-sm m-3">
            Filtrar por tamaño
          </span>
          <div className="dropdown">
             <button className="btn btn-warning btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tipo de tamaño
             </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="#">Chico</a></li>
              <li><a className="dropdown-item" href="#">Mediano</a></li>
              <li><a className="dropdown-item" href="#">Grande</a></li>
             </ul>
          </div>
          <span className="text-warning btn-sm m-3">
                Filtrar por edad
          </span>
          <div className="dropdown">
             <button className="btn btn-warning btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Rango de edad
             </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="#">Cachorro</a></li>
              <li><a className="dropdown-item" href="#">Joven</a></li>
              <li><a className="dropdown-item" href="#">Adulto</a></li>
             </ul>
          </div>
          <span className="text-warning btn-sm m-3">
            Filtrar por tipo
          </span>
          <div className="dropdown">
             <button className="btn btn-warning btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tipo de animal
             </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="#">Perro</a></li>
              <li><a className="dropdown-item" href="#">Gato</a></li>
             </ul>
          </div>
          <span className="text-warning btn-sm m-3">
            Comportamiento
          </span>
          <div className="dropdown">
             <button className="btn btn-warning btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Amistoso
             </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="#">Si</a></li>
              <li><a className="dropdown-item" href="#">No</a></li>
             </ul>
          </div>
          
          <button type="button" className="btn btn-warning btn-sm m-5">
            Reset Filtros
          </button>
        </div>
      </div>
    </div>
  )}
  <Paginacion
        pagination={pagination}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
     </div>
  );

          }
