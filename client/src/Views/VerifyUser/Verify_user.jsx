import React from "react";
import { useParams } from "react-router-dom";
import SuccesModal from "../../Components/SuccessModal/SuccesModal";
export default function Verify_user() {
  const { infouser } = useParams();
  console.log(infouser);
  return (
    <div>
      <SuccesModal>
        <h1>Usuario verificado</h1>
        <p></p>

        <button to="/home">Regresar Home</button>
      </SuccesModal>
    </div>
  );
}
