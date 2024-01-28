import { LOAD_ANIMALS } from "./actions/types";

const initialState = {
  allAnimals: [],
  pagination: {
    total_records: 0,
    current_page: 1,
    total_pages: null,
    next_page: null,
    prev_page: null,
  },
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_ANIMALS: {
      return {
        ...state,
        allAnimals: payload.animals,
        pagination: {
          ...state.pagination,
          ...payload.pagination,
        },
      };
    }
    default:
      return state;
  }
};

export default rootReducer;