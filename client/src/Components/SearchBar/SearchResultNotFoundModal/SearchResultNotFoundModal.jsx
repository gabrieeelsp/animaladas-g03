import React from "react";
import noResultImg from "../../../img/no-result.png";
import "./searchResultModal.css"; 

export default function SearchResultNotFoundModal({ show, handleClose }) {
    return (
      <>
        {show ? (
          <div className="overlay">
            <div className="Containermodal">
              <div className="headermodal">
                <img src={noResultImg} alt="No results" />
              </div>
              <button className="buttonclose" onClick={handleClose}>
                <i className="bi bi-x-lg"></i>
              </button>
              <h3>¡Vaya! No se encontraron resultados. Por favor, intenta con otro término.</h3>
              <span></span>
            </div>
          </div>
        ) : null}
      </>
    );
}