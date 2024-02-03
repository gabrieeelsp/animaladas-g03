import React from "react";
import "./modalprofile.css";

export default function Modalprofile() {
  return (
    <div className="overlay">
      <div className="Containermodal">
        <div className="headermodal">
          <h3>Titutlo</h3>
        </div>
        <button className="buttonclose">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    </div>
  );
}
