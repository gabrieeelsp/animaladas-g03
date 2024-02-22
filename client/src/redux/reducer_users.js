import { UPDATE_PROFILE, USER_INFO } from "./actions/user_type";
import { loadState, saveState } from "../scripts/Localstore";
import { SIGN_OUT } from "./actions/user_type";
const initialState = loadState();

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_INFO: {
      return {
        ...state,
        id: payload.id,
        name: payload.name,
        lastName: payload.lastName,
        email: payload.email,
        phone: payload.phone,
        imageProfile: payload.imageProfile,
        address: payload.address,
        isAdmin: payload.isAdmin,
      };
    }
    case SIGN_OUT: {
      return loadState();
    }

    default:
      return state;
  }
};

export default UserReducer;
