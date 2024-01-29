import React from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "./Donar.css";

// Agrega el ícono de la pata a la biblioteca
library.add(faPaw);

const Donar = () => {
  return (
    <div className="container donar-container">
      <div className="row mt-4">
        <div className="col-md-6 mb-4 mt-5">
          <img
            src="https://img.freepik.com/fotos-premium/perro-gato-sobre-fondo-amarillo_875722-12107.jpg?w=740"
            className="img-fluid rounded"
            style={{ border: "2px solid #ffc107" }}
            alt="Animales"
          />
        </div>

        <div className="col-md-6 mb-4 mt-5">
          <div className="card h-100 donar-custom-card home-card">
            <div className="card-donar-body d-flex flex-column align-items-center">
              <h2 className="text-warning banner-heading mt-3 mb-4">
                ¿Cuánto quieres aportar?
              </h2>

              <div className="donar-options d-flex flex-wrap justify-content-center">
                {/* Aportes Pequeños */}
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
                  <button className="btn btn-warning donar-custom-button home-button">
                    Aportar $2000
                  </button>
                </Link>
                <Link to="/procesar-pago">
                  <button className="btn btn-warning donar-custom-button-transparent home-button">
                    Aportar $2500
                  </button>
                </Link>

                {/* Aportes Medianos */}
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
                  <button className="btn btn-warning donar-custom-button home-button">
                    Aportar $4000
                  </button>
                </Link>
                <Link to="/procesar-pago">
                  <button className="btn btn-warning donar-custom-button-transparent home-button">
                    Aportar $5000
                  </button>
                </Link>

                {/* Aporte Personalizado */}
                <a
                  href="URL_DE_TU_ENLACE_DE_MERCADO_PAGO"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-warning donar-custom-button home-button">
                    Personalizado
                  </button>
                </a>

                <div className="gratitude-message mt-4">
                  <p>
                    ¡Agradecemos tu generosidad{" "}
                    <FontAwesomeIcon icon={faPaw} />!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donar;
