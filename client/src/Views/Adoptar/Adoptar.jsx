import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import Paginacion from "../../Components/Pagination/Pagination";
import Loader from "../../Components/Loader/Loader"
import { loadAnimals, clearAll, orderByAge, orderByName } from "../../redux/actions/actions";
import "./Adoptar.css";
import React from "react";

export default function Adoptar() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const animals = useSelector((state) => state.allAnimals);
  const pagination = useSelector((state) => state.pagination);

  const [size, setSize] = useState('Todos');
  const optionsSize = ['Todos', 'chico', 'mediano', 'grande'];
  const handleChangeSize = (event) => {
      setSize(event.target.value)
      dispatch(loadAnimals('adoptable', event.target.value, species, castrado));
  }

  const [species, setSpecies] = useState('Todos');
  const optionsSpecies = ['Todos', 'perro', 'gato'];
  const handleChangeSpecies = (event) => {
      setSpecies(event.target.value)
      dispatch(loadAnimals('adoptable', size, event.target.value, castrado));
  }

  const [castrado, setCastrado] = useState('Todos');
  const optionsCastrado = ['Todos', 'Si', 'No'];
  const handleChangeCastrado = (event) => {
      setCastrado(event.target.value)
      dispatch(loadAnimals('adoptable', size, species, event.target.value));
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(loadAnimals('adoptable', size, species, castrado));  
      setLoading(false);
    }, 1000);
  
    return () => clearTimeout(timeoutId);
  }, []);

  const handleNextPage = (page) => {
    dispatch(loadAnimals('adoptable', size, species, castrado, page));
  };

  const handlePrevPage = (page) => {
    dispatch(loadAnimals('adoptable', size, species, castrado, page));
  };

  const handleOrderByName = (order) => {
    dispatch(orderByName(order));
  };

  const handleOrderByAge = (order) => {
    dispatch(orderByAge(order));
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
                  id={animal.id}
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
          className="bg-dark col-1 my-3 d-flex flex-column align-items-center justify-content-center"
          style={{ width: "auto", height: "750px", borderRadius: "20px" }}
        >
          
          <span className="text-warning btn-sm m-3 fw-bold">
            Ordenamiento
          </span>
          <span className="text-warning btn-sm m-3">
            Ordenar por nombre
          </span>       
    <div className="dropdown">
      <select
      className="btn btn-warning btn-sm dropdown-toggle dropdown-menu-dark"
       onChange={(e) => handleOrderByName(e.target.value)}
       style={{ width: "170px"}}>
      <option value="" disabled selected>Seleccionar orden</option>
      <option value="A">A-Z</option>
      <option value="D">Z-A</option>
      </select>
    </div>
          <span className="text-warning btn-sm m-3">
          Ordenar por edad
          </span>
          <div className="dropdown">
      <select
      className="btn btn-warning btn-sm dropdown-toggle dropdown-menu-dark"
       onChange={(e) => handleOrderByAge(e.target.value)}
       style={{ width: "170px"}}>
      <option value="" disabled selected>Seleccionar orden</option>
      <option value="D">Cachorro a adulto</option>
      <option value="A">Adulto a cachorro</option>
      </select>
    </div>
    <p></p>
    <hr className="col-12 bg-warning" style={{ height: "2px", margin: "10px 0" }} />
          <span className="text-warning btn-sm m-3 fw-bold">
            Filtros
          </span>
          <div className="dropdown">
          <p  className="text-warning btn-sm m-3">
                  Tipo de Tamaño
              </p>
              <select className="btn btn-warning btn-sm dropdown-toggle" style={{ width: "170px"}} value={size} onChange={handleChangeSize}>
                  {optionsSize.map((option) => <option key={option} value={option} >{option}</option>)}
              </select>
          </div>
  
          <div className="dropdown">
              <p  className="text-warning btn-sm m-3">
                  Tipo de Animal
              </p>
              <select className="btn btn-warning btn-sm dropdown-toggle" style={{ width: "170px"}} value={species} onChange={handleChangeSpecies}>
                  {optionsSpecies.map((option) => <option key={option} value={option} >{option}</option>)}
              </select>
          </div>
          <div className="dropdown">
          <p  className="text-warning btn-sm m-3">
                 Castrado
              </p>
              <select className="btn btn-warning btn-sm dropdown-toggle" style={{ width: "170px"}} value={castrado} onChange={handleChangeCastrado}>
                  {optionsCastrado.map((option) => <option key={option} value={option} >{option}</option>)}
              </select>
          </div>
        
          <button type="button" className="btn btn-danger btn-sm my-5" style={{ width: "170px"}}>
            Reset Filtros
          </button>
        </div>
      </div>
    </div>
  )} {!loading && (
  <Paginacion
        pagination={pagination}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
        />
)}
</div>
);

          }
