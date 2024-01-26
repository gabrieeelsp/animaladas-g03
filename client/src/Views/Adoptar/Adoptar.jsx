import Cards from "../../Components/Cards/Cards";
import "./Adoptar.css";


import React from 'react';

export default function Rescatado() {
  return (
<div>

    <>
      <div className="img-container">
        <img className="banner-img" src="https://peluditosdesonreus.com/wp-content/uploads/2020/04/footer-slider-peluditos.png" alt="dogs-image"/>
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
            <button type="button" className="btn btn-dark btn-sm" style={{ width: "50px" }}>Reset</button>
          </div>
        </div>

      </div>
    </>
    </div>
    );
}