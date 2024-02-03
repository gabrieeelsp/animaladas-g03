//import { USER_INFO } from "./types";
const initialState = {
  userdata: {
    id: "",
    name: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  },
};

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_INFO: {
      return {
        ...state,
        id: payload.id,
        name: payload.name,
        lastName: payload.lastName,
        email: payload.email,
        password: payload.password,
        phone: payload.phone,
        address: payload.address,
      };
    }
    default:
      return state;
  }
};

export default UserReducer;
