import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PagoDesaprobado.css"; 

export default function PagoDesaprobado() {
  const location = useLocation();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const status = searchParams.get("status");

    const handlePaymentRejection = async () => {
      if (status === "rejected") {
        try {
          setErrorMessage("Lo sentimos, tu pago ha sido rechazado. Por favor, intenta nuevamente.");
        } catch (error) {
          console.error("Error al manejar el pago desaprobado:", error);
          setErrorMessage("Ha ocurrido un error al procesar tu pago. Por favor, inténtalo nuevamente o contacta al soporte.");
        } finally {
          navigate("/donar");
        }
      }
    };

    handlePaymentRejection();
  }, [location, navigate]);

  return (
    <div className="pago-desaprobado-container">
      <h2>Pago Desaprobado</h2>
      {errorMessage && <p className="pago-desaprobado-message">{errorMessage}</p>}
    </div>
  );
}
