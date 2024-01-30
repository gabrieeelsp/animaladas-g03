import { LOAD_ANIMALS, CLEAR_ALL, ANIMAL_BY_ID, ORDER_BY_AGE, ORDER_BY_NAME } from "./actions/types";

const initialState = {
  allAnimals: [],
  statusAnimals: [],
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
        statusAnimals: payload.animals,
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

    case ORDER_BY_NAME:
      let animalsByName = [...state.allAnimals].sort((a, b) => {
        if (payload === "A") {
          return a.name.localeCompare(b.name);
        } else if (payload === "D") {
          return b.name.localeCompare(a.name);
        } else {
          return 0;
        }
      });
      return {
        ...state,
        allAnimals: animalsByName,
      };
    

case ORDER_BY_AGE:
  const animalsByAge = [...state.allAnimals].sort((a, b) => {
    return payload === "A" ? a.estimatedBirthYear - b.estimatedBirthYear : b.estimatedBirthYear - a.estimatedBirthYear;
  });
  return {
    ...state,
    allAnimals: animalsByAge,
  };
  




    default:
      return state;
  }
};


export default rootReducer;