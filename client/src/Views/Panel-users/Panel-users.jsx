import React, { useEffect, useState } from "react";
import "./panel-users.css";
import { Navigate, useAsyncError, useNavigate } from "react-router-dom";
import default_img from "../../img/perfil_default.png";
import secondimg from "../../img/logo_google.png";
import thirdimg from "../../img/succes.png";
import logo from "../../img/logo-huella.png";
import Modalprofile from "../../Components/Nav/modalprofile";
import validateform from "../Register/validation_user";
import { useDispatch, useSelector } from "react-redux";
import axios, { all } from "axios";
import SuccesModal from "../../Components/SuccessModal/SuccesModal";
import { infologin } from "../../redux/actions/user_action";
import { alldonations_user } from "../../redux/actions/actions";
import rootReducer from "../../redux/reducer";
import Paginacion from "../../Components/Pagination/Pagination";
import { total_amount_donation_user } from "../../redux/actions/actions";
import { total_adoption_user } from "../../redux/actions/actions";
import FiltersModal from "./modalfiltros";

export default function PanelUsers(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const urlBaseAxios =
    import.meta.env.VITE_ENV === "DEV"
      ? import.meta.env.VITE_URL_DEV
      : import.meta.env.VITE_URL_PROD;
  const user_profile = useSelector((state) => state.UserReducer);

  const all_donations_copy_user = useSelector(
    (state) => state.rootReducer.alldonation_user_copy
  );
  const total_adoptions_user = useSelector(
    (state) => state.rootReducer.total_adoption_user
  );
  console.log("prueba vale:", total_adoptions_user.adoptedAnimals);
  let array_adopted_user = [];
  if (!total_adoptions_user.adoptedAnimals) {
    array_adopted_user = [];
  } else {
    array_adopted_user = total_adoptions_user.adoptedAnimals;
  }
  const total_amount_user = useSelector(
    (state) => state.rootReducer.total_amount_donation_user
  );
  const user_donations = useSelector(
    (state) => state.rootReducer.alldonations_user
  );

  const pagination = useSelector((state) => state.rootReducer.pagination);
  if (user_profile === "") {
    navigate("/");
  }

  const showprofile = props.showprofile;
  const Setshowprofile = props.Setshowprofile;

  const getall_donations = async () => {};
  const [MessageModal, SetMessageModal] = useState(false);
  const [ShowModalSucces, SetShowModalSucces] = useState(false);
  const [showmodalprofile, Setshowmodalprofile] = useState(false);
  const [ShowModalMessage, SetShowModalMessage] = useState(false);
  const [MenuDonations, SetMenudonatios] = useState(true);
  const [MenuAdoptions, SetMenuAdoptions] = useState(true);
  const [Showcards, SetShowcards] = useState(true);
  const [form_edituser, Setformedituser] = useState({
    id: "",
    name: "",
    email: "",
    lastName: "",
    address: "",
    phone: "",
    imageProfile: "",
    password: "",
  });

  const [error, Seterror] = useState({
    name: "",
    lastName: "",
    phone: "",
    address: "",
    showerror_name: false,
    showerror_lastName: false,
    showerror_phone: false,
    showerror_address: false,
  });
  const donate_button = (e) => {
    navigate("/donar");
  };
  const handlechange = (e) => {
    Setformedituser({
      ...form_edituser,
      [e.target.name]: e.target.value,
    });
    let validate = validateform(form_edituser);
    Seterror({
      ...error,
      name: validate.name,
      lastName: validate.lastName,
      phone: validate.phone,
      address: validate.address,
      showerror_name: validate.showerror_name,
      showerror_lastName: validate.showerror_lastName,
      showerror_phone: validate.showerror_phone,
      showerror_address: validate.showerror_address,
    });
  };
  const handleNextPage = (page) => {
    dispatch(alldonations_user(user_profile.id, 5, page));
  };

  const handlePrevPage = (page) => {
    dispatch(alldonations_user(user_profile.id, 5, page));
  };

  const updateprofile = async (e) => {
    const token = localStorage.getItem('token');

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      };
    const response = await axios.put(
      `${urlBaseAxios}/user/changeUserData`,
      form_edituser,
      config
    );
    const { data } = response;
    if (data === "Informacion del Usuario actualizada.") {
      SetMessageModal("¡Bien! se actualizo tu informacion.");
      SetShowModalSucces(true);
      dispatch(infologin(form_edituser));
    }
  };
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "animaldas_pets");
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dwgufqzjd/image/upload",
      data
    );

    Setformedituser({
      ...form_edituser,
      [e.target.name]: response.data.secure_url,
    });
  };
  const orderby = (value) => {
    dispatch(alldonations_user(user_profile.id, 5, 1, value, "created"));
  };

  useEffect(() => {
    Setformedituser({
      id: user_profile.id,
      name: user_profile.name,
      email: user_profile.email,
      lastName: user_profile.lastName,
      address: user_profile.address,
      phone: user_profile.phone,
      imageProfile: user_profile.imageProfile,
      password: "",
    });
  }, [user_profile]);
  console.log("valor de este", total_adoptions_user.adoptedAnimals);

  useEffect(() => {
    dispatch(alldonations_user(user_profile.id, 5, 1));
    dispatch(total_amount_donation_user(user_profile.id));
    dispatch(total_adoption_user(user_profile.id));
  }, [user_profile]);
  const click_menu_option = (option) => {
    if (option === "home") {
      SetMenuAdoptions(true);
      SetMenudonatios(true);
      SetShowcards(true);
    }
    if (option === "donations") {
      SetMenudonatios(true);
      SetMenuAdoptions(false);
      SetShowcards(false);
      dispatch(alldonations_user(user_profile.id, 5, 1));
    }
    if (option === "adoptions") {
      SetMenuAdoptions(true);
      SetMenudonatios(false);
      SetShowcards(false);
    }
  };
  return (
    <>
      <div className="bodypage">
        <div className="side-menu-panel">
          <div className="brand-name">
            <img src={logo}></img>
          </div>
          <ul>
            <li onClick={(e) => click_menu_option("home")}>
              <i className="bi bi-house-door-fill"></i>&nbsp;{" "}
              <span>Inicio</span>
            </li>
            <li onClick={(e) => Setshowmodalprofile(!showmodalprofile)}>
              <i className="bi bi-house-door-fill"></i>&nbsp;{" "}
              <span>Editar Perfil</span>
            </li>
            <li onClick={(e) => click_menu_option("adoptions")}>
              <i class="bi bi-bag-heart-fill"></i>&nbsp;
              <span>Mis Adopciones</span>
            </li>
            <li onClick={(e) => click_menu_option("donations")}>
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
                <a
                  href="#"
                  className="btn-panel"
                  onClick={(e) => donate_button(e)}
                >
                  DONAR
                </a>

                {/*<img src={secondimg}></img>*/}
                <div className="img-case" style={{ borderRadius: "50%" }}>
                  <img
                    src={
                      user_profile.imageProfile
                        ? user_profile.imageProfile
                        : default_img
                    }
                  ></img>
                </div>
              </div>
            </div>
            <SuccesModal
              MessageModal={MessageModal}
              ShowModalMessage={ShowModalSucces}
              SetShowModalMessage={SetShowModalSucces}
            ></SuccesModal>
            <Modalprofile
              modalstate={showmodalprofile}
              setmodalstate={Setshowmodalprofile}
              form_edituser={form_edituser}
            >
              <div style={{ zIndex: "1" }}>
                {error.showerror_name ? (
                  <div
                    class="input-group mb-1 alert alert-warning"
                    role="alert"
                  >
                    {error.name}
                  </div>
                ) : null}
                <div className="input-group mt-4">
                  <div className="input-group-text bg-warning text-white">
                    <i className="bi bi-person-fill-add"></i>
                  </div>
                  <input
                    className="form-control bg-light"
                    type="text"
                    placeholder="Nombre*"
                    name="name"
                    value={form_edituser.name}
                    onChange={(e) => handlechange(e)}
                  />
                </div>
                {error.showerror_lastName ? (
                  <div
                    class="input-group mb-1 alert alert-warning"
                    role="alert"
                  >
                    {error.lastName}
                  </div>
                ) : null}
                <div className="input-group mt-1">
                  <div className="input-group-text bg-warning text-white">
                    <i className="bi bi-person-fill-add"></i>
                  </div>
                  <input
                    className="form-control bg-light"
                    type="text"
                    placeholder="Lastname*"
                    name="lastName"
                    value={form_edituser.lastName}
                    onChange={(e) => handlechange(e)}
                  />
                </div>
                <div className="input-group mt-1">
                  <div className="input-group-text bg-warning text-white">
                    <i className="bi bi-envelope-at"></i>
                  </div>
                  <input
                    className="form-control bg-light"
                    type="email"
                    placeholder="Correo Eletronico*"
                    name="email"
                    value={form_edituser.email}
                    onChange={(e) => handlechange(e)}
                    disabled="disabled"
                  />
                </div>
                {error.showerror_phone ? (
                  <div
                    class="input-group mb-1 alert alert-warning"
                    role="alert"
                  >
                    {error.phone}
                  </div>
                ) : null}
                <div className="input-group mt-1">
                  <div className="input-group-text bg-warning text-white">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <input
                    className="form-control bg-light"
                    type="text"
                    placeholder="Numero de contacto*"
                    name="phone"
                    value={form_edituser.phone}
                    onChange={(e) => handlechange(e)}
                  />
                </div>
                {error.showerror_address ? (
                  <div
                    class="input-group mb-1 alert alert-warning"
                    role="alert"
                  >
                    {error.address}
                  </div>
                ) : null}
                <div className="input-group mt-1">
                  <div className="input-group-text bg-warning text-white">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <input
                    className="form-control bg-light"
                    type="text"
                    placeholder="Direccion*"
                    name="address"
                    value={form_edituser.address}
                    onChange={(e) => handlechange(e)}
                  />
                </div>

                <div className="input-group mt-1">
                  <div className="input-group-text bg-warning text-white">
                    <i className="bi bi-lock"></i>
                  </div>
                  <input
                    className="form-control bg-light"
                    type="password"
                    placeholder="Contraseña*"
                    name="password"
                    value={form_edituser.password}
                    onChange={(e) => handlechange(e)}
                  />
                </div>
                <div class=" input-group mb-1 mt-3">
                  <input
                    class="form-control text-center"
                    type="file"
                    id="formFile"
                    onChange={uploadImage}
                    name="imageProfile"
                  ></input>
                </div>
                <button
                  className="btn text-white w-100 mt-4 fw-bold shadow-sm bg-warning"
                  onClick={(e) => updateprofile(e)}
                >
                  Actualizar
                </button>
              </div>
            </Modalprofile>
          </div>
          <div className="content-panel">
            {Showcards && (
              <div className="cards-panel">
                <div className="card-panel">
                  <div className="box-panel">
                    <h1>${total_amount_user}</h1>
                    <h3 className="titles-panel-h3">Donaciones</h3>
                  </div>
                  <div className="icon-case">
                    <i
                      class="bi bi-box2-heart"
                      style={{ fontSize: "50px", color: "#E4A11B" }}
                    ></i>
                  </div>
                </div>
                <div className="card-panel">
                  <div className="box-panel">
                    <h1>{total_adoptions_user.totalAdoptions}</h1>
                    <h3 className="titles-panel-h3">Adopciones</h3>
                  </div>
                  <div className="icon-case">
                    <i
                      class="bi bi-house-heart"
                      style={{ fontSize: "50px", color: "#E4A11B" }}
                    ></i>
                  </div>
                </div>
              </div>
            )}
            <div className="content-panel-2">
              {MenuDonations && (
                <div className="recent-payments">
                  <div className="title-content-panel">
                    <h2>Mis donaciones</h2>
                  </div>
                  <div
                    style={{
                      paddingRight: "5px",
                      paddingLeft: "5px",
                    }}
                  >
                    <div
                      style={{
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{ float: "right" }}
                        onClick={(e) => {
                          orderby("desc");
                        }}
                      >
                        <a href="#" className="btn-panel">
                          Recientes
                        </a>
                      </div>
                      <div
                        onClick={(e) => {
                          orderby("asc");
                        }}
                      >
                        <a href="#" className="btn-panel">
                          Antiguos
                        </a>
                      </div>
                    </div>
                  </div>
                  <table className="table-content-panel">
                    <tr>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Monto</th>
                      <th>Fecha</th>
                      <th>Hora</th>
                    </tr>
                    {user_donations.map((donation) => {
                      return (
                        <tr>
                          <td>{user_profile.name}</td>
                          <td>{user_profile.lastName}</td>
                          <td>{donation.amount}</td>
                          <td>{donation.createdAt.split("T")[0]}</td>
                          <td>{donation.createdAt.split("T")[1]}</td>
                        </tr>
                      );
                    })}
                  </table>
                  <Paginacion
                    pagination={pagination}
                    onNextPage={handleNextPage}
                    onPrevPage={handlePrevPage}
                  ></Paginacion>
                </div>
              )}

              {MenuAdoptions && (
                <div className="new-students">
                  <div className="title-content-panel">
                    <h2>Adoptados</h2>
                  </div>
                  <div
                    style={{
                      paddingRight: "5px",
                      paddingLeft: "5px",
                    }}
                  >
                    <div
                      style={{
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ float: "right" }}>
                        <a href="#" className="btn-panel">
                          Recientes
                        </a>
                      </div>
                      <div>
                        <a href="#" className="btn-panel">
                          Antiguos
                        </a>
                      </div>
                    </div>
                  </div>
                  <table>
                    <tr>
                      <th>foto</th>
                      <th>Nombre</th>
                      <th>opcion</th>
                    </tr>

                    {array_adopted_user.map((dog) => {
                      return (
                        <tr>
                          <td>
                            <img src={dog.image1}></img>
                          </td>
                          <td> {dog.name}</td>
                          <td>
                            <i className="bi bi-info-circle"></i>
                          </td>
                        </tr>
                      );
                    })}
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
        <FiltersModal
          SetShowModalMessage={SetShowModalMessage}
          ShowModalMessage={ShowModalMessage}
        ></FiltersModal>
      </div>
    </>
  );
}
