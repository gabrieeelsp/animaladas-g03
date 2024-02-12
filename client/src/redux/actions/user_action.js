import { USER_INFO } from "./user_type";

import axios from "axios";

export const infologin = (data) => {
  const id = data.userId;
  console.log("esta es la data del action reduce user", id);

  /*
  return (dispatch) => {
    dispatch({
      type: USER_INFO,
      payload: data,
    });
  };
  */
};
