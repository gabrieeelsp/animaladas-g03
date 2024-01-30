import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import "./Donar.css";
library.add(faPaw);

const Donar = () => {
// Inicializar Mercado Pago SDK
useEffect(() => {
  initMercadoPago('TU_CLAVE_PUBLICA_DE_MERCADO_PAGO');
}, []);

const handleDonarClick = (monto) => {
  const wallet = new Wallet();

  // Define la preferencia de pago con el monto correspondiente
  const preference = {
    items: [
      {
        title: "Donación",
        quantity: 1,
        currency_id: 'ARS',
        unit_price: monto,
      },
    ],
  };

  // Inicia el flujo de pago
  wallet.checkout({
    preference,
    render: {
      container: '#wallet_container', // ID del contenedor donde se renderizará el botón de pago
    },
  });
};


  return (
    <div className="container donar-container">
      <div className="row mt-4">
        <div className="col-md-6 mb-4 mt-5">
          <img
            src="https://img.freepik.com/fotos-premium/perro-gato-sobre-fondo-amarillo_875722-12107.jpg?w=740"
            className="img-fluid rounded"
            style={{ border: "2px solid #ffc107",height: "100%" }}
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
                    ¡Gracias por ayudar a nuestros amigos! {" "}
                    <FontAwesomeIcon icon={faPaw} />
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
