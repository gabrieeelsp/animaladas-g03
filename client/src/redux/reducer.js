import { LOAD_ANIMALS, CLEAR_ALL, ANIMAL_BY_ID, ORDER_BY_AGE, ORDER_BY_NAME, SET_SEARCHBAR_VALUE, SET_CASTRATED_VALUE, SET_SPECIES_VALUE, SET_SIZE_VALUE, SET_ORDERDIR_VALUE, SET_ORDERBY_VALUE, CREATE_FORM_SUCCESS, CREATE_FORM_FAILURE, DELETE_ANIMAL } from "./actions/types";

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
  searchBarValue: '',
  orderByValue: '',
  orderDirValue: '',
  sizeValue: 'Todos',
  speciesValue: 'Todos',
  castratedValue: 'Todos',
  enabledValue: 'Si',
  animalById: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCHBAR_VALUE: {
      return {
        ...state,
        searchBarValue: payload,
      }
    }

    case SET_ORDERBY_VALUE: {
      return {
        ...state,
        orderByValue: payload,
      }
    }

    case SET_ORDERDIR_VALUE: {
      return {
        ...state,
        orderDirValue: payload,
      }
    }

    case SET_SIZE_VALUE: {
      return {
        ...state,
        sizeValue: payload,
      }
    }

    case SET_SPECIES_VALUE: {
      return {
        ...state,
        speciesValue: payload,
      }
    }

    case SET_CASTRATED_VALUE: {
      return {
        ...state,
        castratedValue: payload,
      }
    }


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
            searchBarValue: '',
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

  case CREATE_FORM_SUCCESS: {
    return state;
  }
  
  case CREATE_FORM_FAILURE: {
    console.error('Error creating form:', payload);
    return state;
  }
  case DELETE_ANIMAL: {
   return state;
  }



    default:
      return state;
  }
};


export default rootReducer;