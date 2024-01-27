import Cards from "../../Components/Cards/Cards";
import "./Adoptar.css";
import React from "react";

export default function Rescatado() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-100">
            <img
              className="banner-img"
              src="https://iili.io/JcT3TLg.png"
              alt="dogs-image"
            />
          </div>
          <div class="col-10">
            <div className="row w-100">
              <div className="col-6">
                <Cards />
              </div>
              <div className="col-6">
                <Cards />
              </div>
              <div className="col-6">
                <Cards />
              </div>
              <div className="col-6">
                <Cards />
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
            <div class="dropdown">
               <button class="btn btn-warning btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tipo de tamaño
               </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Chico</a></li>
                <li><a class="dropdown-item" href="#">Mediano</a></li>
                <li><a class="dropdown-item" href="#">Grande</a></li>
               </ul>
            </div>
            <span className="text-warning btn-sm m-3">
            Ordenar por edad
            </span>
            <div class="dropdown">
               <button class="btn btn-warning btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Rango de edad
               </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Cachorro</a></li>
                <li><a class="dropdown-item" href="#">Joven</a></li>
                <li><a class="dropdown-item" href="#">Adulto</a></li>
               </ul>
            </div>
            <p></p>
            <hr className="col-12" style={{ backgroundColor: "yellow", height: "2px" }} />
            <span className="text-warning btn-sm m-3">
              Filtrar por tamaño
            </span>
            <div class="dropdown">
               <button class="btn btn-warning btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tipo de tamaño
               </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Chico</a></li>
                <li><a class="dropdown-item" href="#">Mediano</a></li>
                <li><a class="dropdown-item" href="#">Grande</a></li>
               </ul>
            </div>
            <span className="text-warning btn-sm m-3">
                  Filtrar por edad
            </span>
            <div class="dropdown">
               <button class="btn btn-warning btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Rango de edad
               </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Cachorro</a></li>
                <li><a class="dropdown-item" href="#">Joven</a></li>
                <li><a class="dropdown-item" href="#">Adulto</a></li>
               </ul>
            </div>
            <span className="text-warning btn-sm m-3">
              Filtrar por tipo
            </span>
            <div class="dropdown">
               <button class="btn btn-warning btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tipo de animal
               </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Perro</a></li>
                <li><a class="dropdown-item" href="#">Gato</a></li>
               </ul>
            </div>
            <span className="text-warning btn-sm m-3">
              Comportamiento
            </span>
            <div class="dropdown">
               <button class="btn btn-warning btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Amistoso
               </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Si</a></li>
                <li><a class="dropdown-item" href="#">No</a></li>
               </ul>
            </div>
            
            <button type="button" className="btn btn-warning btn-sm m-5">
              Reset Filtros
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
