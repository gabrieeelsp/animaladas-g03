import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
          const response = await fetch('http://localhost:3001/mercadopago/pago-aprobado', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              preferenceId,
            }),
          });

          const responseData = await response.json();

          const { totalAmount, status } = responseData;
          if (status === 'opened') {
            console.log('La orden se creó con éxito:', responseData);
            setTotalAmount(totalAmount);
          } else {
            console.log('La orden no se creó con éxito. Estado de la orden:', responseData.status);
          }
        }


      } catch (error) {
        console.error('Error al crear la orden:', error);
        console.error('Respuesta completa del error:', error.response);
      }
    };

    createOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, preferenceId]);

  useEffect(() => {
    const createDonation = () => {
      const amount = totalAmount;
      const userId = 1;
      const animalId = null;

      if (amount) {
        axios.post("http://localhost:3001/donations", { userId, amount, animalId })
          .then((donationResponse) => {
            console.log("Donación creada con éxito:", donationResponse.data);
            navigate('/donar/pago-aprobado');


          })
          .catch((donationError) => {
            console.error("Error al crear la donación:", donationError);
            console.error("Detalles del error:", donationError.response.data);
          });
      }
    };

    createDonation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalAmount]);

    return (
      <div>
        <h2>Pago Aprobado</h2>
        <p>¡Gracias por tu donación! Tu pago se ha procesado correctamente.</p>
        <p>¡Gracias por tu apoyo!</p>
      </div>
    );
  }

