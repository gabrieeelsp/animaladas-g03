// Reducer
import { LOAD_ANIMALS } from "./actions/types";

const initialState = {
  allAnimals: [], 
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_ANIMALS: {
      return {
        ...state,
        allAnimals: payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
