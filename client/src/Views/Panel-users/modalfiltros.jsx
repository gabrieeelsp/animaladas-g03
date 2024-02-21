import React from "react";
import "./modalfiltros.css";
export default function FiltersModal({
  children,
  MessageModal,
  SetShowModalMessage,
  ShowModalMessage,
}) {
  return (
    <>
      {ShowModalMessage ? (
        <div className="overlay">
          <div className="Containermodal" style={{ width: "900px" }}>
            <div className="headermodal"></div>
            <button
              className="buttonclose"
              onClick={(e) => SetShowModalMessage(false)}
            >
              <i class="bi bi-x-lg"></i>
            </button>
            <h3 style={{ color: "#E4A11B" }}>{MessageModal}</h3>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
}
