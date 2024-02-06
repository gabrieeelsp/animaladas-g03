import React from "react";
import "./modalprofile.css";

export default function Modalprofile({ children, modalstate, setmodalstate }) {
  return (
    <>
      {modalstate && (
        <div className="overlay">
          <div className="Containermodal">
            <div className="headermodal">
              <h3>EDITAR PERFIL</h3>
            </div>
            <button
              className="buttonclose"
              onClick={(e) => setmodalstate(false)}
            >
              <i class="bi bi-x-lg"></i>
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
