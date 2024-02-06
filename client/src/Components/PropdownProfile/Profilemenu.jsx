import React from "react";

import "./Profilemenu.css";
import { Navigate } from "react-router-dom";

export default function Profilemenu() {
  return (
    <div className="flex flex-col dropDownProfile">
      <ul className="flex flex-col gap-4">
        <li>Perfil</li>
        <li>Mensajes</li>
        <li>Mensajes</li>
        <li onClick={(e) => close_profilemenu(e)}>Cerrar Sesions</li>
      </ul>
    </div>
  );
}
