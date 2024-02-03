import React from "react";
import { useParams } from "react-router-dom";
export default function Verify_user() {
  const { infouser } = useParams();
  console.log(infouser);
  return (
    <div>
      <h1>Usuario verificado</h1>
      <p></p>

      <button to="/home">Regresar Home</button>
    </div>
  );
}
