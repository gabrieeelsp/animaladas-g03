import { LOAD_ANIMALS, CLEAR_ALL, ANIMAL_BY_ID } from "./actions/types";

const initialState = {
  allAnimals: [],
  pagination: {
    total_records: 0,
    current_page: 1,
    total_pages: null,
    next_page: null,
    prev_page: null,
  },
  animalById: [],
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

    case ANIMAL_BY_ID: {
      return {
        ...state,
        animalById: payload,
      };
    }

     case CLEAR_ALL: {
      return {
            ...state,
            allAnimals: [],
            animalById: [],
          }
      }

    default:
      return state;
  }
};

export default rootReducer;