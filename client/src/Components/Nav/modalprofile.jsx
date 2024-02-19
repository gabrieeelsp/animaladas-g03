import React from "react";
import "./modalprofile.css";
import defaul_img_user from "../../img/perfil_default.png";
export default function Modalprofile({
  children,
  modalstate,
  setmodalstate,
  form_edituser,
  doit,
}) {
  return (
    <>
      {modalstate && (
        <div className="overlay">
          <div className="Containermodal">
            <div className="headermodal">
              <img
                src={
                  form_edituser.imageProfile === null
                    ? defaul_img_user
                    : form_edituser.imageProfile
                }
                style={{
                  width: "80px",
                  borderRadius: "50%",
                  height: "80px",
                }}
              ></img>
            </div>
            <button
              className="buttonclose"
              onClick={(e) => setmodalstate(doit)}
            >
              <i class="bi bi-x-lg"></i>
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
