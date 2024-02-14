import { USER_INFO } from "./user_type";
import { SIGN_OUT } from "./user_type";
import { UPDATE_PROFILE } from "./user_type";
import axios from "axios";

export function infologin(data) {
  return async function (dispatch) {
    return dispatch({
      type: USER_INFO,
      payload: data,
    });
  };
}

export function sign_out(value) {}

export function update_userprofile(data) {
  return async function (dispatch) {
    return dispatch({
      type: UPDATE_PROFILE,
      payload: value,
    });
  };
}
