import React from "react";
import "./panel-users.css";
import { useNavigate } from "react-router-dom";
import default_img from "../../img/perfil_default.png";
import secondimg from "../../img/logo_google.png";
import thirdimg from "../../img/succes.png";
export default function PanelUsers() {
  const navigate = useNavigate();

  const getall_donations = async () => {};
  return (
    <>
      <div className="bodypage">
        <div className="side-menu-panel">
          <div className="brand-name">
            <h1>Brand</h1>
          </div>
          <ul>
            <li>
              <i className="bi bi-house-door-fill"></i>&nbsp;{" "}
              <span>Inicio</span>
            </li>
            <li>
              <i class="bi bi-bag-heart-fill"></i>&nbsp;
              <span>Mis Adopciones</span>
            </li>
            <li>
              <i class="bi bi-wallet-fill"></i>&nbsp;<span>Mis Donaciones</span>
            </li>
            <li onClick={() => navigate(-1)}>
              <i class="bi bi-wallet-fill"></i>
              &nbsp;<span>Salir del panel</span>
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
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Monto</th>
                    <th>Opcion</th>
                  </tr>
                  <tr>
                    <td>Jhon Doe</td>
                    <td>S.t James College</td>
                    <td>$12.000</td>
                    <td>
                      <a href="#" className="btn-panel">
                        Ver
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Jhon Doe</td>
                    <td>S.t James College</td>
                    <td>$12.000</td>
                    <td>
                      <a href="#" className="btn-panel">
                        Ver
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Jhon Doe</td>
                    <td>S.t James College</td>
                    <td>$12.000</td>
                    <td>
                      <a href="#" className="btn-panel">
                        Ver
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
              <div className="new-students">
                <div className="title-content-panel">
                  <h2>Adoptados</h2>
                  <a href="#" className="btn-panel">
                    View All
                  </a>
                </div>
                <table>
                  <tr>
                    <th>foto</th>
                    <th>Nombre</th>
                    <th>opcion</th>
                  </tr>
                  <tr>
                    <td>
                      <img src={default_img}></img>
                    </td>
                    <td> Luna</td>
                    <td>
                      <i className="bi bi-info-circle"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={default_img}></img>
                    </td>
                    <td> Dunkan</td>
                    <td>
                      <i className="bi bi-info-circle"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={default_img}></img>
                    </td>
                    <td> Sasha</td>
                    <td>
                      <i className="bi bi-info-circle"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={default_img}></img>
                    </td>
                    <td> Pepe</td>
                    <td>
                      <i className="bi bi-info-circle"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={default_img}></img>
                    </td>
                    <td> Odie</td>
                    <td>
                      <i className="bi bi-info-circle"></i>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
