import React from "react";
import "../Nav/modalprofile.css";
export default function GeneralModal({
  children,
  MessageModal,
  SetShowModalMessage,
  ShowModalMessage,
}) {
  return (
    <>
      {ShowModalMessage ? (
        <div className="overlay">
          <div className="Containermodal">
            <div className="headermodal"></div>
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
