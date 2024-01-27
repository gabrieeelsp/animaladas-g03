import React from "react";
import "./Add-animal.css";
import adoptimg from "../../img/logoanimaladas.png";
export default function Addanimal() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 mb-2 mt-2">
      <div className="row  rounded-5 p-3 bg-dark shadow box-area border-primary">
        <div
          className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
          style={{ background: "#343a40" }}
        >
          <div className="featured-image mb-3">
            <img
              src={adoptimg}
              className="img-fluid"
              style={{ width: "250px" }}
            ></img>
          </div>
          <p
            className="text-warning fs-2"
            style={{
              fontFamily: "font-family: 'Courier New', Courier, monospace",
              fontWeight: "600",
            }}
          >
            <i className="bi bi-heart-fill"></i>
          </p>
          <small
            className="text-warning text-wrap text-center"
            style={{
              width: "17rem",
              fontFamily: "Courier New', Courier, monospace",
            }}
          >
            "my favorite breed is adopted"
          </small>
        </div>
        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <div className="header-tex text-warning mb4">
              <h2>Hello,Again </h2>
              <p>Creating pet for adoption</p>
            </div>
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control form form-control-lg bg-light fs-6"
                placeholder="Name"
              ></input>
            </div>
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control form form-control-lg bg-light fs-6"
                placeholder="Age"
              ></input>
            </div>
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control form form-control-lg bg-light fs-6"
                placeholder="Size"
              ></input>
            </div>
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control form form-control-lg bg-light fs-6"
                placeholder="weigth"
              ></input>
            </div>
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control form form-control-lg bg-light fs-6"
                placeholder="Color"
              ></input>
            </div>
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control form form-control-lg bg-light fs-6"
                placeholder="Comentario"
              ></input>
            </div>
            /*
            <div className="input-group mb-1 d-flex ">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="formCheck"
                ></input>
                <label
                  for="formCheck"
                  className="form-check-label text-warning"
                >
                  <small>Vaccinated</small>
                </label>
              </div>
            </div>
            */
            <div className="input-group mb-3">
              <button className="btn btn-lg btn-warning w-100 fs-6 text-white fw-bold">
                CREATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
