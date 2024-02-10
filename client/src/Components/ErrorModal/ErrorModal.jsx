import React from "react";
import "../Nav/modalprofile.css";
import error_img from "../../img/Error.png";
export default function ModalError({
  children,
  MessageModal,
  SetShowModalMessage,
  ShowModalMessage,
}) {
  console.log("el mensaje de error es", MessageModal);
  console.log("se muestra el modal?", ShowModalMessage);
  return (
    <>
      {ShowModalMessage ? (
        <div className="overlay">
          <div className="Containermodal">
            <div className="headermodal">
              <img src={error_img} style={{ width: "100px" }}></img>
            </div>
            <button
              className="buttonclose"
              onClick={(e) => SetShowModalMessage(false)}
            >
              <i class="bi bi-x-lg"></i>
            </button>
            <h3 style={{ color: "#E4A11B" }}>{MessageModal}</h3>
            <span></span>
          </div>
        </div>
      ) : null}
    </>
  );
}
