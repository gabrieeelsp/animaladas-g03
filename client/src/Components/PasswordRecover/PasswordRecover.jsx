import React from "react";
import GeneralModal from "../GeneralModal/generalmodal";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SuccesModal from "../SuccessModal/SuccesModal";
import axios from "axios";
export default function PasswordRecover(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  let user_connect = false;

  const { MessageModal, SetMessageModal } = props;
  const [ShowModalMessage, SetShowModalMessage] = useState(true);
  const [showGeneralModal, SetShowGeneralModal] = useState(true);
  const [ShowModalSucces, SetShowModalSucess] = useState(false);
  const [userdata, Setuserdata] = useState({
    password: "",
    passwordcopy: "",
    userId: Number(id),
    statusrecovered: false,
  });
  const handlechange = (e) => {
    Setuserdata({
      ...userdata,
      [e.target.name]: e.target.value,
    });
  };
  const navigateto = (e) => {
    SetShowModalSucess(false);
    navigate("/login");
  };

  const urlBaseAxios =
    import.meta.env.VITE_ENV === "DEV"
      ? import.meta.env.VITE_URL_DEV
      : import.meta.env.VITE_URL_PROD;

  const save_newpassword = async (e) => {
    if (userdata.password === userdata.passwordcopy) {
      const response = await axios.put(
        `${urlBaseAxios}/user/changePassword`,
        userdata
      );

      const { data } = response;
      if (data) {
        userdata.statusrecovered = true;
        SetMessageModal(
          "!Bien! se ha cambiado a la contraseña. Ya puedes iniciar Sesión"
        );
        SetShowModalSucess(true);
        SetShowGeneralModal(false);
      }
    }
  };
  if (userdata.statusrecovered === false) {
    SetMessageModal("Por favor ingresa la nueva contraseña");
  }

  return (
    <>
      <GeneralModal
        MessageModal={MessageModal}
        SetShowModalMessage={SetShowGeneralModal}
        ShowModalMessage={showGeneralModal}
      >
        <div className="input-group mt-1">
          <div className="input-group-text bg-warning text-white">
            <i className="bi bi-lock"></i>
          </div>
          <input
            className="form-control bg-light"
            type="password"
            placeholder="Contraseña"
            name="password"
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
            placeholder="Repetir Contraseña"
            name="passwordcopy"
            onChange={(e) => handlechange(e)}
          />
          <div
            className="btn text-dark w-100 mt-4 fw-bold shadow-sm bg-warning"
            onClick={(e) => save_newpassword(e)}
          >
            Guardar
          </div>
        </div>
      </GeneralModal>
      <SuccesModal
        MessageModal={MessageModal}
        SetShowModalMessage={SetShowModalSucess}
        ShowModalMessage={ShowModalSucces}
        navigateto={navigateto}
      ></SuccesModal>
    </>
  );
}
