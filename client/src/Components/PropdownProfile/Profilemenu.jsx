import React from "react";

import "../Profilemenu.css";

export default function Profilemenu() {
  return (
    <div className="flex flex-col dropDownProfile">
      <ul className="flex flex-col gap-4">
        <li>Perfil</li>
        <li>Mensajes</li>
        <li>Cerrar Sesion</li>
      </ul>
    </div>
  );
}
