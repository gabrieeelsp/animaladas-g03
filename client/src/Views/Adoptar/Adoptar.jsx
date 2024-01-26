import Cards from "../../Components/Cards/Cards";
import "./Adoptar.css";
import React from "react";

export default function Rescatado() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-100">
            <img
              className="banner-img"
              src="https://iili.io/JcT3TLg.png"
              alt="dogs-image"
            />
          </div>
          <div class="col-10">
            <div className="row w-100">
              <div className="col-6">
                <Cards />
              </div>
              <div className="col-6">
                <Cards />
              </div>
              <div className="col-6">
                <Cards />
              </div>
              <div className="col-6">
                <Cards />
              </div>
            </div>
          </div>
          <div
            className="bg-dark col-1 my-3 d-flex flex-column justify-content-center"
            style={{ width: "auto", height: "500px", borderRadius: "20px" }}
          >
            <button type="button" className="btn btn-warning btn-sm m-3">
              By smaller Size
            </button>
            <button type="button" className="btn btn-warning btn-sm m-3">
              By larger Size
            </button>
            <button type="button" className="btn btn-warning btn-sm m-3">
              By older Age
            </button>
            <button type="button" className="btn btn-warning btn-sm m-3">
              By younger Age
            </button>
            <button type="button" className="btn btn-warning btn-sm m-3">
              By Type
            </button>
            <button type="button" className="btn btn-warning btn-sm m-3">
              Friendly
            </button>
            <button type="button" className="btn btn-warning btn-sm m-3">
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
