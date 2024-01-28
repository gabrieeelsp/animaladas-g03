import React from "react";
import { Link } from "react-router-dom";
import "./Donar.css"; 

const Donar = () => {
  return (
    <div className="container donar-container">
    <div className="card-body">
    <h2 className="text-warning banner-heading">
    ¿Cómo quieres aportar?
</h2>
      <div className="row mt-4">


          <div className="col-md-4 mb-4">
            <div className="card h-100 donar-custom-card home-card">
              <div className="card-donar-body d-flex flex-column">
                <h5 className="card-donar-title">Aporte Pequeño</h5>
                <p className="card-donar-text">Para ayudar con pequeñas contribuciones.</p>
                <div className="donar-options mt-auto">
                  <Link to="/procesar-pago">
                    <button className="btn btn-warning donar-custom-button home-button">
                      Aportar $1000
                    </button>
                  </Link>
                  <Link to="/procesar-pago">
                    <button className="btn btn-warning donar-custom-button-transparent home-button">
                      Aportar $1500
                    </button>
                  </Link>
                  <Link to="/procesar-pago">
                  <button className="btn btn-warning donar-custom-button-transparent home-button">
                      Aportar $2000
                    </button>
                  </Link>
                  <Link to="/procesar-pago">
                  <button className="btn btn-warning donar-custom-button home-button">
                      Aportar $2500
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 donar-custom-card home-card">
              <div className="card-donar-body d-flex flex-column">
                <h5 className="card-donar-title">Aporte Mediano</h5>
                <p className="card-donar-text">Realiza una contribución de tamaño intermedio.</p>
                <div className="donar-options mt-auto">
                  <Link to="/procesar-pago">
                  <button className="btn btn-warning donar-custom-button home-button">
                      Aportar $3000
                    </button>
                  </Link>
                  <Link to="/procesar-pago">
                  <button className="btn btn-warning donar-custom-button-transparent home-button">
                      Aportar $3500
                    </button>
                  </Link>
                  <Link to="/procesar-pago">
                    <button className="btn btn-warning donar-custom-button-transparent home-button">
                      Aportar $4000
                    </button>
                  </Link>
                  <Link to="/procesar-pago">
                    <button className="btn btn-warning donar-custom-button home-button">
                      Aportar $4500
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

     
          <div className="col-md-4 mb-4">
            <div className="card h-100 donar-custom-card home-card">
              <div className="card-donar-body d-flex flex-column">
                <h5 className="card-donar-title">Aporte Personalizado</h5>
                <p className="card-donar-text">Puedes aportar la cantidad que quieras o puedas.</p>
                <div className="donar-options mt-auto d-flex justify-content-center"> {/* Agrega las clases d-flex y justify-content-center */}
                  <a
                    href="URL_DE_TU_ENLACE_DE_MERCADO_PAGO"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn btn-warning donar-custom-button home-button">
                      Aportar
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Donar;


