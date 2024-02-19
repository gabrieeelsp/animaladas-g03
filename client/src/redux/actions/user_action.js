import { USER_INFO } from "./user_type";
import { SIGN_OUT } from "./user_type";
import { UPDATE_PROFILE } from "./user_type";
import { ALLDONATIONS_USER } from "./user_type";
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

export function alldonations_user(userId, limit, page) {
  console.log("valor de param userId", userId);
  console.log("valor de param limit", limit);
  console.log("valor de param page", page);
  return async function (dispatch) {
    const response = await axios.get(`${urlBaseAxios}/donations`, {
      params: {
        userId,
        limit,
        page,
      },
    });
    const { data } = response;
    console.log("valor de data alldonations_user action", data);
    /*
    return dispatch({
      type: alldonations_user,
      payload: value,
    });
    */
  };
}
