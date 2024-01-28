import React from "react";
import './Loader.css';

export default function Loader() {

  return (
    <div className="divLoading">
      <h2 className="h2Loading">Cargando...</h2>
      <img className="imgLoading" src="https://media.baamboozle.com/uploads/images/330877/1621947556_81805_gif-url.gif" alt="Cargando" />
    </div>
  );
}
