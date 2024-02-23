import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/logoanimaladas.png";
import logo_google from "../../img/logo_google.png";
import axios from "axios";
import ModalError from "../../Components/ErrorModal/ErrorModal.jsx";
import { useNavigate } from "react-router-dom";
import GeneralModal from "../../Components/GeneralModal/generalmodal.jsx";
import SuccesModal from "../../Components/SuccessModal/SuccesModal.jsx";
import { useDispatch } from "react-redux";
import { infologin } from "../../redux/actions/user_action.js";

import { validarEmail, validarPassword } from '../../utils/validations'

export default function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { MessageModal, SetMessageModal } = props;



  const [messageLoginResponse, setMessageLoginResponse] = useState('mensaje trasparente');
  const [errors, setErrors] = useState({
      email: '',
      password: '',
  })
  
  
  

  const [ShowModalMessage, SetShowModalMessage] = useState(false);
  const [ShowModalSucces, SetShowModalSucces] = useState(false);
  const [showGeneralModal, SetShowGeneralModal] = useState(false);
  const [userdata, Setuserdata] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    setMessageLoginResponse('mensaje trasparente')

    Setuserdata({
      ...userdata,
      [e.target.name]: e.target.value,
    });

    setErrors({...errors, [e.target.name]: ''});

    // if ( e.target.name === 'password' ) setErrors({...errors, password: ''});
    
  };

  const urlBaseAxios =
    import.meta.env.VITE_ENV === "DEV"
      ? import.meta.env.VITE_URL_DEV
      : import.meta.env.VITE_URL_PROD;

  const login_user = async (e) => {
    setMessageLoginResponse('mensaje trasparente')

    setErrors({...errors, email: validarEmail(userdata.email), password: validarPassword(userdata.password)});

    if ( validarEmail(userdata.email) === '' && validarPassword(userdata.password) === '' ) {
      const response = await axios.post(`${urlBaseAxios}/user/login`, userdata)
        .catch((error) => {
          setMessageLoginResponse(error.response.data)
        })
      const { data } = response;
      if (data.is_verified !== true) {
        // SetShowModalMessage(true);
        SetMessageModal(
          "No puede iniciar sesión sin antes haber verificado su cuenta."
        );
        setMessageLoginResponse('Se requier validar email.')
      } else {
        window.localStorage.setItem("user_info", JSON.stringify(data));
        window.localStorage.setItem("token", data.tokenUser);
        dispatch(infologin(data));
        setTimeout(() => {
          navigate("/");
        }, 1000)

        
      }
    } else {
      setMessageLoginResponse('mensaje trasparente')
    }
    
  };

  const signInWithGoogle = () => {
    window.location.href = `${urlBaseAxios}/user/auth/google`;
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const serializedUser = urlParams.get("userGoogle");
    if (serializedUser) {
      try {
        const userData = JSON.parse(serializedUser);
        window.localStorage.setItem("user_info", JSON.stringify(userData));
        window.localStorage.setItem("token", userData.tokenUser);
        dispatch(infologin(userData));
        navigate("/");
      } catch (error) {
        console.error("Error al iniciar sesión con Google:", error);
      }
    }
  }, []);
  

  const passwordrecover = (e) => {
    SetMessageModal(
      "Por favor ingresa tu correo. Te enviaremos un enlace para recuperar la contraseña"
    );
    SetShowGeneralModal(true);
  };

  const send_recoverpassword = async (e) => {
    if (userdata.email !== "") {
      const response = await axios.post(
        `${urlBaseAxios}/user/recoverPassword`,
        userdata
      );
      const { data } = response;
      if (data) {
        SetMessageModal("Te hemos enviado un correo para cambiar tu contraseña");
        SetShowModalSucces(true);
        SetShowGeneralModal(false);
      }
    } else {
      console.log("no ha ingresado el correo para recuperar contraseña");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center text-warning vh-100">
      <form>
        <div className="bg-dark p-5 rounded-5 shadow" style={{ width: "25rem" }}>
          <div className="d-flex justify-content-center">
            <img src={logo} alt="login-icon" style={{ width: "7rem" }} />
          </div>
          <div>
            <h1 className="text-center fs-1 fw-bold text-warning">Iniciar Sesión</h1>
          </div>

          <div className="input-group mt-4">
            <div className="input-group-text bg-warning text-white">
              <i className="bi bi-person"></i>
            </div>
            <input
              className="form-control bg-light"
              type="text"
              placeholder="Email"
              name="email"
              onChange={(e) => handlechange(e)}
            />
          </div>
          <p className="mb-3"
            style={{opacity: errors.email === '' ? 0 : 1, fontSize: "0.8rem" }}
          >{ errors.email === '' ? 'No error' : errors.email}</p>
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
          <p className="mb-2"
            style={{opacity: errors.password === '' ? 0 : 1, fontSize: "0.8rem" }}
          >{ errors.password === '' ? 'No error' : errors.password}</p>
          <div className="d-flex justify-content-around mt-1">
            <div className="d-flex align-items-center gap-1">
              <input className="form-check-input" type="checkbox" />
              <div className="pt-1 text-warning" style={{ fontSize: "0.8rem" }}>
                Recuérdame
              </div>
            </div>
            <div className="pt-1" onClick={(e) => passwordrecover(e)}>
              <a href="#" className="text-decoration-none fw-semibold text-warning" style={{ fontSize: "0.8rem" }}>
                Olvidé mi contraseña
              </a>
            </div>
          </div>
          <div onClick={(e) => login_user(e)} className="btn text-dark w-100 mt-4 fw-bold shadow-sm bg-warning">
            Iniciar sesión
          </div>
          <p className="mt-1 text-center text-danger"
            style={{opacity: messageLoginResponse === 'mensaje trasparente' ? 0 : 1, fontSize: "0.9rem" }}>{messageLoginResponse}</p>
          <div className="d-flex gap-1 justify-content-center text-warning mt-1" style={{ fontSize: "0.8rem" }}>
            <div>¿No tienes una cuenta?</div>
            <NavLink to="/register" style={{ textDecoration: "none" }} className="text-decoration-none fw-semibold text-warning">
              Regístrate
            </NavLink>
          </div>
          <div className="p-3">
            <div className="text-center text-warning">
              <span className="bg-dark">O también puedes...</span>
            </div>
          </div>
          <div className="btn d-flex gap-2 justify-content-center border mt-3 shadow-sm" onClick={signInWithGoogle}>
            <img src={logo_google} alt="google-icon" style={{ height: "1.6rem" }} />
            <div className="fw-semibold text-secondary text-white">Continuar con Google</div>
          </div>
          <NavLink to="/">
            <div className="btn text-dark w-20 mt-4 fw-bold shadow-sm bg-warning" style={{ display: 'block' }}>
              <i className="bi-house-door-fill"></i>
            </div>
          </NavLink>
        </div>
      </form>
      <SuccesModal
        MessageModal={MessageModal}
        ShowModalMessage={ShowModalSucces}
        SetShowModalMessage={SetShowModalSucces}
      ></SuccesModal>
      <ModalError
        MessageModal={MessageModal}
        ShowModalMessage={ShowModalMessage}
        SetShowModalMessage={SetShowModalMessage}
      >
        <span>holamundo</span>
      </ModalError>
      <GeneralModal
        MessageModal={MessageModal}
        SetShowModalMessage={SetShowGeneralModal}
        ShowModalMessage={showGeneralModal}
      >
        <div className="input-group mt-4">
          <div className="input-group-text bg-warning text-white">
            <i className="bi bi-envelope-at"></i>
          </div>
          <input
            className="form-control bg-light"
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) => handlechange(e)}
          />
        </div>
        <div className="btn text-dark w-100 mt-4 fw-bold shadow-sm bg-warning" onClick={send_recoverpassword}>
          Enviar
        </div>
      </GeneralModal>
    </div>
  );
}
