import React, { useEffect, useState } from "react";
import axios from "axios"; 
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import "./Donar.css";

library.add(faPaw);

const Donar = () => {
  const [montoPersonalizado, setMontoPersonalizado] = useState(0);


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
const handlePersonalizadoClick = () => {
  // Llamada al backend para crear la preferencia con el monto personalizado usando Axios
  axios.post('/api/crear-preferencia', { monto: montoPersonalizado })
    .then(response => {
      // Iniciar el flujo de pago con la preferencia devuelta
      handleDonarClick(montoPersonalizado);
    })
    .catch(error => {

      console.error("Error al enviar la solicitud:", error);
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
              <h2 className="text-warning  mt-3 mb-4">
                ¿Cuánto quieres aportar?
              </h2>

              <div className="donar-options d-flex flex-wrap justify-content-center">
           
              <button
                  className="btn btn-warning donar-custom-button home-button"
                  onClick={() => handleDonarClick(1000)}
                >
                  Aportar $1000
                </button>

               
                  <button 
                  className="btn btn-warning donar-custom-button-transparent home-button"
                   onClick={() => handleDonarClick(1500)}
                   >
                  Aportar $1500
                  </button>
                
                  <button 
                  className="btn btn-warning donar-custom-button home-button"
                  onClick={() => handleDonarClick(2000)}
                  >
                  Aportar $2000
                  </button>
                
                  <button
                   className="btn btn-warning donar-custom-button-transparent home-button"
                   onClick={() => handleDonarClick(2500)}
                   >
                    Aportar $2500
                  </button>
              
                  <button
                   className="btn btn-warning donar-custom-button home-button"
                   onClick={() => handleDonarClick(3000)}
                   >
                    Aportar $3000
                  </button>
                
                  <button 
                  className="btn btn-warning donar-custom-button-transparent home-button"
                   onClick={() => handleDonarClick(3500)}>
                    Aportar $3500
                  </button>
          
                  <button 
                  className="btn btn-warning donar-custom-button home-button"
                  onClick={() => handleDonarClick(4000)}
                  >
                    Aportar $4000
                  </button>
                
               
                  <button 
                  className="btn btn-warning donar-custom-button-transparent home-button"
                  onClick={() => handleDonarClick(5000)}>
                    Aportar $5000
                  </button>
                

        
                <a
                  href="URL_DE_TU_ENLACE_DE_MERCADO_PAGO"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-warning donar-custom-button home-button"
                   onClick={() => handleDonarClick( montoPersonalizado )}>
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
