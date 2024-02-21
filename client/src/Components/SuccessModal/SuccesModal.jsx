import React from "react";
import "../Nav/modalprofile.css";
import sucess_img from "../../img/succes.png";
export default function SuccesModal({
  children,
  MessageModal,
  SetShowModalMessage,
  ShowModalMessage,
  navigateto,
}) {
  console.log("ingreso al succes model", MessageModal);
  return (
    <>
      {ShowModalMessage ? (
        <div className="overlay" style={{ zIndex: "2" }}>
          <div className="Containermodal">
            <div className="headermodal">
              <img src={sucess_img} style={{ width: "100px" }}></img>
            </div>
            <button
              className="buttonclose"
              onClick={(e) => SetShowModalMessage(navigateto)}
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
