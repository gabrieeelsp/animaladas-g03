import { useEffect, useState } from "react";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "./Donar.css";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

library.add(faPaw);

const Donar = () => {
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {

    initMercadoPago('TEST-bcede1c4-b735-45f5-8ef1-0866cc790bc4', { locale: 'es-AR' });
  }, []);


  const createPreference = async (amount, userDetails) => {
    try {
      const response = await axios.post('http://localhost:3001/mercadopago/crear-preferencia', {
        title: `Donación por $ ${amount}`,
        quantity: 1,
        unit_price: amount,
        id: userDetails.id,
        total_amount: userDetails.total_amount,
        name: userDetails.name,
        surname: userDetails.surname,
        // identification: userDetails.identification,
        email: userDetails.email,
        client_id: userDetails.client_id,
      });
      console.log("Respuesta de createPreference:", response.data);
      const { id } = response.data.responseData;
      console.log(id);
      return id;
    } catch (error) {
      console.error("Error al enviar la solicitud:", error)
      throw error;
    }
  };

  const handleDonarClick = async (amount) => {
    const userDetails = {
      id: 1,
      total_amount: {amount},
      name: "Nombre",
      surname: "Apellido",
      identification: "12345678",
      email: "correo@ejemplo.com",
      client_id: "cliente123",
    };
    
    try {
      
      const id = await createPreference(amount, userDetails);
      console.log("ID de preferencia obtenida:", id);
      if (id) {
        
        setPreferenceId(id);
      }
    } catch (error) {
      console.error("Error al crear la preferencia:", error);
    }
  };

  const handlePersonalizadoClick = () => {
    // Lógica para el botón personalizado
  };

  return (
    <div className="container donar-container align-items-center justify-content-center">
      <div className="row mt-4">
        <div className="col-md-6 mb-3 mt-2">
          <img
            src="https://img.freepik.com/fotos-premium/perro-gato-sobre-fondo-amarillo_875722-12107.jpg?w=740"
            className="img-fluid rounded"
            style={{ border: "2px solid #ffc107", height: "390px" }}
            alt="Animales"
          />
        </div>

        <div className="col-md-6 mb-4 mt-3  align-items-center justify-content-center">
          <div className="card h-100 donar-custom-card home-card">
            <div className="card-donar-body d-flex flex-column align-items-center">
              <h2 className="text-warning  mt-4 mb-5">
                ¿Cuánto quieres aportar?
              </h2>

              <div className="donar-options d-flex flex-wrap justify-content-center">
                <div className="donar-button-group">
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
                </div>

                <div className="donar-button-group">
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
                  onClick={() => handleDonarClick(3500)}
                >
                  Aportar $3500
                </button>
                </div>

                <div className="donar-button-group">
                <button
                  className="btn btn-warning donar-custom-button home-button"
                  onClick={() => handleDonarClick(4000)}
                >
                  Aportar $4000
                </button>

                <button
                  className="btn btn-warning donar-custom-button-transparent home-button"
                  onClick={() => handleDonarClick(5000)}
                >
                  Aportar $5000
                </button>

                <a
                  href="URL_DE_TU_ENLACE_DE_MERCADO_PAGO"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-warning donar-custom-button home-button" onClick={handlePersonalizadoClick}>
                    Personalizado
                  </button>
                </a>
                </div>
              </div>

         {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />}

                <div className="gratitude-message mt-4">
                  <p>
                    ¡Gracias por ayudar a nuestros amigos!{" "}
                    <FontAwesomeIcon icon={faPaw} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Donar;
