import React from "react";
import GeneralModal from "../GeneralModal/generalmodal";
import { useState } from "react";
export default function PasswordRecover(props) {
  const { MessageModal, SetMessageModal } = props;
  const [ShowModalMessage, SetShowModalMessage] = useState(true);
  const [showGeneralModal, SetShowGeneralModal] = useState(true);
  SetMessageModal("Por favor ingresa la nueva contraseña");

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
          <div className="btn text-dark w-100 mt-4 fw-bold shadow-sm bg-warning">
            Guardar
          </div>
        </div>
      </GeneralModal>
    </>
  );
}
