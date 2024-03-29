import { USER_INFO } from "./user_type";
import { SIGN_OUT } from "./user_type";
import { UPDATE_PROFILE } from "./user_type";

import axios, { all } from "axios";

const urlBaseAxios =
  import.meta.env.VITE_ENV === "DEV"
    ? import.meta.env.VITE_URL_DEV
    : import.meta.env.VITE_URL_PROD;

export function infologin(data) {
  return async function (dispatch) {
    return dispatch({
      type: USER_INFO,
      payload: data,
    });
  };
}

export function sign_out(value) {
  return async function (dispatch) {
    return dispatch({
      type: SIGN_OUT,
      payload: value,
    });
  };
}

export function update_userprofile(data) {
  return async function (dispatch) {
    return dispatch({
      type: UPDATE_PROFILE,
      payload: value,
    });
  };
}
