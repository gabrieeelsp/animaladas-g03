import Cards from "../../Components/Cards/Cards";
import "./Adoptar.css";

import React from 'react';

export default function Rescatado() {
  return (
<div>
    <>
      <div className="img-container">
        <img className="banner-img" src="https://img.freepik.com/psd-gratis/retrato-grupo-adorables-cachorros_53876-73962.jpg?w=1380&t=st=1706220732~exp=1706221332~hmac=c50f7966a6d0a2ce902d40c6f7d32e23a16d4877a457de858e07738a4e912c62" alt="dogs-image"/>
      </div>

      <div className="row" style={{ columnGap: "50px" }}>
        <div className="col-2"><Cards /></div>
        <div className="col-2"><Cards /></div>
        <div className="col-2"><Cards /></div>
        <div className="col-2"><Cards /></div>
        <div className="col-2">
          <div className="button-container-2">
            <button type="button" className="btn btn-dark btn-sm" style={{ width: "50px" }}>Dark</button>
            <button type="button" className="btn btn-dark btn-sm" style={{ width: "50px" }}>Dark</button>
            <button type="button" className="btn btn-dark btn-sm" style={{ width: "50px" }}>Dark</button>
            <div className="button-container-1" >
        <button type="button" className="btn btn-dark btn-sm" style={{ width: "50px" }}>Reset</button>
      </div>
          </div>
        </div>

      </div>
    </>
    </div>
    );
}