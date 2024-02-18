import React from "react";
import "./panel-users.css";
import { useNavigate } from "react-router-dom";
import default_img from "../../img/perfil_default.png";
export default function PanelUsers() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bodypage">
        <div className="side-menu-panel">
          <div className="brand-name">
            <h1>Brand</h1>
          </div>
          <ul>
            <li>
              <i className="bi bi-house-door-fill"></i>&nbsp;Inicio
            </li>
            <li>
              <i class="bi bi-bag-heart-fill"></i>&nbsp;Mis Adopciones
            </li>
            <li>
              <i class="bi bi-wallet-fill"></i>&nbsp; Mis Donaciones
            </li>
            <li onClick={() => navigate(-1)}>
              <i class="bi bi-wallet-fill"></i>
              &nbsp; Salir del panel
            </li>
          </ul>
        </div>
        <div className="container-panel">
          <div className="header">
            <div className="nav">
              <div className="search">
                <input type="text"></input>
                <button type="submit">
                  {" "}
                  <i className="bi bi-search-heart-fill"></i>
                </button>
              </div>
              <div className="user">
                <a href="#" className="btn-panel">
                  Add new
                </a>
                <i className="bi bi-bell-fill"></i>
                <div className="imgcase">
                  <img src={default_img}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
