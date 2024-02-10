import React, { useEffect, useState } from "react";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "./Donar.css";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import ModalError from "../../Components/ErrorModal/ErrorModal";
import ModalProcessing from "./ModalProcessing";
import ModalRejected from "./ModalRejected";
import PagoAprobado from "./PagoAprobado";


library.add(faPaw);

const Donar = (props) => {
  const { MessageModal } = props;
  const { SetMessageModal } = props;
  console.log("valor de messagemmodal", MessageModal);
  console.log("setmessamodal", SetMessageModal);
  const [preferenceId, setPreferenceId] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [showGratitudeMessage, setShowGratitudeMessage] = useState(true);
  const [ShowModalErorr, SetShowModalError] = useState(false);
  const [showProcessingModal, setShowProcessingModal] = useState(false);
  const [showRejectedModal, setShowRejectedModal] = useState(false);



  useEffect(() => {
    initMercadoPago(import.meta.env.VITE_API_KEY_MERCADOPAGO, {
      locale: "es-AR",
    });
    console.log("MercadoPago inicializado correctamente.");
  }, []);

  const urlBaseAxios =
    import.meta.env.VITE_ENV === "DEV"
      ? import.meta.env.VITE_URL_DEV
      : import.meta.env.VITE_URL_PROD;

  const createPreference = async (amount, userDetails) => {
    try {
      const response = await axios.post(
        `${urlBaseAxios}/mercadopago/crear-preferencia`,
        {
          title: "Donación",
          quantity: 1,
          unit_price: amount,
          id: userDetails.id,
          total_amount: userDetails.total_amount,
          name: userDetails.name,
          surname: userDetails.surname,
          email: userDetails.email,
          client_id: userDetails.client_id,
        }
      );
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
    if (!window.localStorage.userinfo) {
      SetMessageModal(
        "Para hacer una donacion debe registrarse o iniciar sesión con su cuenta"
      );
      setShowErrorModal(true);
      return;
    }
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
      setShowProcessingModal(true); 
      const id = await createPreference(amount, userDetails);
      console.log("ID de preferencia obtenida:", id);
      if (id) {
        setPreferenceId(id);
        console.log("preferenceId actualizado:", id);
        setSelectedAmount(amount);
        setCustomAmount("");
        setShowGratitudeMessage(false);
        setShowProcessingModal(false); 
      }
    } catch (error) {
      console.error("Error al crear la preferencia:", error);
      setShowErrorModal(true);
      setShowProcessingModal(false); 
      setShowRejectedModal(true); 
    }
  };
  

  const handleCustomAmountChange = (event) => {
    const value = event.target.value;
    setCustomAmount(value);
  };

  const handleCustomAmountClick = () => {
    const amount = parseFloat(customAmount);

    if (!isNaN(amount) && amount >= 100) {
      handleDonarClick(amount);
    } else {
      console.log("ingreso al error del monto");
      document.getElementById("customAmountError").innerText =
        "El monto personalizado debe ser al menos de 100 pesos.";
    }
  };

  return (
    <div className="container donar-container">
      <div className="row mt-3">
        <div className="col-md-6 mb-4 mt-5" style={{ height: "700px" }}>
          <img
            src="https://img.freepik.com/fotos-premium/perro-gato-sobre-fondo-amarillo_875722-12107.jpg?w=740"
            className="img-fluid"
            style={{
              border: "2px solid #ffc107",
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "30px",
            }}
            alt="Animales"
          />
        </div>

        <div className="col-md-6 mb-4 mt-5" style={{ height: "700px" }}>
          <div
            className="card h-100 donar-custom-card home-card"
            style={{ borderRadius: "30px" }}
          >
            <div className="card-donar-body d-flex flex-column align-items-center">
              <h3 className="text-warning mt-3 mb-4">
                ¿Cuánto quieres aportar?
              </h3>

              <div
                className="donar-options d-flex flex-wrap justify-content-center"
                style={{ width: "90%" }}
              >
                <button
                  className="btn btn-warning donar-custom-button home-button col-sm-6 col-md-4"
                  onClick={() => handleDonarClick(1000)}
                >
                  Aportar $1000
                </button>

                <button
                  className="btn btn-warning donar-custom-button-transparent home-button col-sm-6 col-md-4"
                  onClick={() => handleDonarClick(1500)}
                >
                  Aportar $1500
                </button>

                <button
                  className="btn btn-warning donar-custom-button-transparent home-button col-sm-6 col-md-4"
                  onClick={() => handleDonarClick(2000)}
                >
                  Aportar $2000
                </button>

                <button
                  className="btn btn-warning donar-custom-button home-button col-sm-6 col-md-4"
                  onClick={() => handleDonarClick(2500)}
                >
                  Aportar $2500
                </button>

                <button
                  className="btn btn-warning donar-custom-button home-button col-sm-6 col-md-4"
                  onClick={() => handleDonarClick(3000)}
                >
                  Aportar $3000
                </button>

                <button
                  className="btn btn-warning donar-custom-button-transparent home-button col-sm-6 col-md-4"
                  onClick={() => handleDonarClick(3500)}
                >
                  Aportar $3500
                </button>

                <button
                  className="btn btn-warning donar-custom-button-transparent home-button col-sm-6 col-md-4"
                  onClick={() => handleDonarClick(4000)}
                >
                  Aportar $4000
                </button>

                <button
                  className="btn btn-warning donar-custom-button home-button col-sm-6 col-md-4"
                  onClick={() => handleDonarClick(5000)}
                >
                  Aportar $5000
                </button>
              </div>

              <div className="donar-options d-flex flex-wrap justify-content-center">
                <h5 className="text-warning mt-3 mb-4">
                  O define un monto personalizado:
                </h5>
              </div>

              <div className="donation-component-input-group mb-3 d-flex flex-column align-items-center">
                <input
                  type="number"
                  className="form-control form-control-sm mb-2"
                  placeholder="Monto personalizado"
                  aria-label="Monto personalizado"
                  aria-describedby="basic-addon2"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  min="100"
                />

                <div className="input-group-append">
                  <button
                    className="btn btn-warning donar-custom-button home-button"
                    type="button"
                    onClick={handleCustomAmountClick}
                  >
                    Seleccionar
                  </button>
                </div>
                <p className="text-light small">
                  El monto mínimo es de $100 ARS.
                </p>
              </div>


              {selectedAmount !== null ? (
                <p className="text-info mt-3 mb-4">
                  Monto seleccionado: ${selectedAmount}
                </p>
              ) : (
                <p className="text-info mt-3 mb-4">
                  Monto seleccionado: Ninguno
                </p>
              )}





              <div className="wallet-container">
                {preferenceId && (
                  <Wallet
                    initialization={{ preferenceId: preferenceId }}
                    customization={{ texts: { valueProp: "smart_option" } }}
                    style={{ width: "70%", height: "400px" }}
                  />
                )}
                {showGratitudeMessage && (
                  <div className="gratitude-message mt-4">
                    <p>
                      ¡Gracias por ayudar a nuestros amigos!{" "}
                      <FontAwesomeIcon icon={faPaw} />
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedAmount && (
        <div className="row mt-3">
          <div className="col-md-12">
            <PagoAprobado />
          </div>
        </div>
      )}

<ModalProcessing
  show={showProcessingModal}
  setShow={setShowProcessingModal}
/>

<ModalRejected
  show={showRejectedModal}
  setShow={setShowRejectedModal}
/>

      {ShowModalErorr && (
        <ModalError
          MessageModal={MessageModal}
          ShowModalMessage={ShowModalErorr}
          SetShowModalMessage={SetShowModalError}
        />
      )}
    </div>
  );
};

export default Donar;
