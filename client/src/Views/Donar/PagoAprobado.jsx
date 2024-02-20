import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "./PagoAprobado.css";

export default function PagoAprobado() {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const preferenceId = searchParams.get("preference_id");
  const [totalAmount, setTotalAmount] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const status = searchParams.get("status");
        if (status === "approved") {
          const response = await fetch(
            "http://localhost:3001/mercadopago/pago-aprobado",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                preferenceId,
              }),
            }
          );

          const responseData = await response.json();

          const { totalAmount, status } = responseData;
          if (status === "opened") {
            console.log("La orden se creó con éxito:", responseData);
            setTotalAmount(totalAmount);
          } else {
            console.log(
              "La orden no se creó con éxito. Estado de la orden:",
              responseData.status
            );
          }
        }
      } catch (error) {
        console.error("Error al crear la orden:", error);
        console.error("Respuesta completa del error:", error.response);
      }
    };

    createOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, preferenceId]);

  useEffect(() => {
    const createDonation = () => {
      const userInfoString = localStorage.getItem('user_info');
      const userInfo = userInfoString ? JSON.parse(userInfoString) : '';
      const userId = userInfo.id;
      const amount = totalAmount;
      const animalId = null;

      if (amount) {
        const token = localStorage.getItem('token');
        if (token) {

          const config = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + token
            }
          };
        axios
          .post("http://localhost:3001/donations", { userId, amount, animalId }, config)
          .then((donationResponse) => {
            console.log("Donación creada con éxito:", donationResponse.data);
            navigate("/donar/pago-aprobado");
          })
          .catch((donationError) => {
            console.error("Error al crear la donación:", donationError);
            console.error("Detalles del error:", donationError.response.data);
          });
        } else {
          console.error("Token no encontrado en el Local Storage");
        }
      }
    };

    createDonation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalAmount]);

  return (
    <div className="container mt-5" style={{ paddingTop: "45px" }}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card donar-custom-card mt-3 pago-aprobado-card">
            <div className="card-body card-donar-body text-center">
              <div className="text-warning display-4 mb-3">¡Pago Aprobado!</div>
              <p className="card-text">
                ¡Tu pago ha sido procesado exitosamente!
              </p>
              <p className="card-text">
                Te agradecemos enormemente por tu contribución.
              </p>
              <FontAwesomeIcon icon={faPaw} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
