import React from "react";
import "./panel-users.css";
import { useNavigate } from "react-router-dom";
import default_img from "../../img/perfil_default.png";
import secondimg from "../../img/logo_google.png";
import thirdimg from "../../img/succes.png";
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
                  <i className="bi bi-search-heart-fill"></i>
                </button>
              </div>
              <div className="user">
                <a href="#" className="btn-panel">
                  Addnew
                </a>
                {/*<img src={secondimg}></img>*/}
                <div className="img-case">
                  <img src={default_img}></img>
                </div>
              </div>
            </div>
          </div>
          <div className="content-panel">
            <div className="cards-panel">
              <div className="card-panel">
                <div className="box-panel">
                  <h1>2194</h1>
                  <h3 className="titles-panel-h3">Donaciones</h3>
                </div>
                <div className="icon-case">
                  <i class="bi bi-heart-fill"></i>
                </div>
              </div>
              <div className="card-panel">
                <div className="box-panel">
                  <h1>2194</h1>
                  <h3 className="titles-panel-h3">Adopciones</h3>
                </div>
                <div className="icon-case">
                  <i class="bi bi-heart-fill"></i>
                </div>
              </div>
            </div>
            <div className="content-panel-2">
              <div className="recent-payments">
                <div className="title-content-panel">
                  <h2>Recent payments</h2>
                  <a href="#" className="btn-panel">
                    View All
                  </a>
                </div>
                <table className="table-content-panel">
                  <tr>
                    <th>Name</th>
                    <th>school</th>
                    <th>Amount</th>
                    <th>Option</th>
                  </tr>
                  <tr>
                    <td>Jhon Doe</td>
                    <td>S.t James College</td>
                    <td>$12.000</td>
                    <td>
                      <a href="#" className="btn-panel">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Jhon Doe</td>
                    <td>S.t James College</td>
                    <td>$12.000</td>
                    <td>
                      <a href="#" className="btn-panel">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Jhon Doe</td>
                    <td>S.t James College</td>
                    <td>$12.000</td>
                    <td>
                      <a href="#" className="btn-panel">
                        View
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
              <div className="new-students">
                <div className="title-content-panel">
                  <h2>New-students</h2>
                  <a href="#" className="btn-panel">
                    View All
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
