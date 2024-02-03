// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "./Donar.css";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";


library.add(faPaw);

const Donar = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");

  useEffect(() => {
    
    initMercadoPago('APP_USR-9d5c0baf-712b-4827-bac3-0bb21186a695', { locale: "es-AR" });
    console.log("MercadoPago inicializado correctamente.");
  }, []);

  const createPreference = async (amount, userDetails) => {
    try {
      const response = await axios.post("http://localhost:3001/mercadopago/crear-preferencia", {
        title: 'Donación',
        quantity: 1,
        unit_price: amount,
        id: userDetails.id,
        total_amount: userDetails.total_amount,
        name: userDetails.name,
        surname: userDetails.surname,
        email: userDetails.email,
        client_id: userDetails.client_id,
      });
      console.log("Respuesta de createPreference:", response.data);
      const { id } = response.data.responseData;
      console.log(id);
      return id;
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      throw error;
    }
  };

  const handleDonarClick = async (amount) => {
    const userDetails = {
      id: 1,
      total_amount: amount,
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
        console.log("preferenceId actualizado:", id);
        setSelectedAmount(amount);
        setCustomAmount("");
      }
    } catch (error) {
      console.error("Error al crear la preferencia:", error);
    }
  };

  const handleCustomAmountChange = (event) => {
    const value = event.target.value;
    setCustomAmount(value);
  };

  const handleCustomAmountClick = () => {
    const amount = parseFloat(customAmount);
    if (!isNaN(amount)) {
      handleDonarClick(amount);
    }
  };

  return (
    <div className="container donar-container">
      <div className="row mt-3">
        <div className="col-md-6 mb-4 mt-0">
          <img
            src="https://img.freepik.com/fotos-premium/perro-gato-sobre-fondo-amarillo_875722-12107.jpg?w=740"
            className="img-fluid rounded"
            style={{ border: "2px solid #ffc107", height: "100%" }}
            alt="Animales"
          />
        </div>

        <div className="col-md-6 mb-4 mt-5">
          <div className="card h-100 donar-custom-card home-card">
            <div className="card-donar-body d-flex flex-column align-items-center">
              <h2 className="text-warning mt-3 mb-4">¿Cuánto quieres aportar?</h2>

              {selectedAmount !== null ? (
                <p className="text-info mt-3 mb-4">Monto seleccionado: ${selectedAmount}</p>
              ) : (
                <p className="text-info mt-3 mb-4">Monto seleccionado: Ninguno</p>
              )}

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
                  onClick={() => handleDonarClick(3500)}
                >
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
                  onClick={() => handleDonarClick(5000)}
                >
                  Aportar $5000
                </button>

                <h5 className="text-warning mt-3 mb-4">O define un monto personalizado:</h5>

                <div className="donation-component-input-group mb-3 d-flex align-items-center">
                  <input
                    type="number"
                    className="form-control form-control-sm mr-2"
                    placeholder="Monto personalizado"
                    aria-label="Monto personalizado"
                    aria-describedby="basic-addon2"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    min="1"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-warning btn-sm"
                      type="button"
                      onClick={handleCustomAmountClick}
                    >
                      Seleccionar
                    </button>
                  </div>
                </div>

            

                {preferenceId && (
                  <Wallet
                    initialization={{ preferenceId: preferenceId }}
                    customization={{ texts: { valueProp: "smart_option" } }}
                  />
                )}

                <div className="gratitude-message mt-4">
                  <p>
                    ¡Gracias por ayudar a nuestros amigos! <FontAwesomeIcon icon={faPaw} />
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
