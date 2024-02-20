import { loadAdopted } from "./actions/actions";

import {
  LOAD_ANIMALS,
  CLEAR_ALL,
  ANIMAL_BY_ID,
  ORDER_BY_AGE,
  ORDER_BY_NAME,
  SET_SEARCHBAR_VALUE,
  SET_CASTRATED_VALUE,
  SET_SPECIES_VALUE,
  SET_SIZE_VALUE,
  SET_ENABLED_VALUE,
  SET_ORDERDIR_VALUE,
  SET_ORDERBY_VALUE,
  CREATE_FORM_SUCCESS,
  CREATE_FORM_FAILURE,
  DELETE_ANIMAL,
  LOAD_USERS,
  LOAD_ESTADISTICAS_DONATIONS,
  SET_ESTADITICAS_DATE_RANGE,
  SET_ESTADITICAS_TAB,
  LOAD_ESTADISTICAS_ADOPTIONS,
  LOAD_PENDING_ADOPTIONS,
  LOAD_ADOPTIONS,
  GET_ALLREVIEWS,
  ACCEPT_ADOPTION_SUCCESS,
  ACCEPT_ADOPTION_FAILURE,
  REFUSE_ADOPTION_FAILURE,
  REFUSE_ADOPTION_SUCCESS,
  UPDATE_ANIMAL,
  USER_BY_MAIL,
  DELETE_USER,
  UPDATE_USER,
  ALLDONATIONS_USER,
  TOTAL_AMOUNT_DONATION_USER,
  TOTAL_ADOPTION_USER,
} from "./actions/types";

const initialState = {
  allAnimals: [],
  alldonations_user: [],
  alldonation_user_copy: [],
  details_adoption_user: [],
  total_amount_donation_user: null,
  total_adoption_user: null,
  statusAnimals: [],
  pagination: {
    total_records: 0,
    current_page: 1,
    total_pages: null,
    next_page: null,
    prev_page: null,
  },
  pagination1: {
    total_records: 0,
    current_page: 1,
    total_pages: null,
    next_page: null,
    prev_page: null,
  },
  searchBarValue: "",
  orderByValue: "",
  orderDirValue: "",
  sizeValue: "Todos",
  speciesValue: "Todos",
  castratedValue: "Todos",
  enabledValue: "Si",
  animalById: [],
  allUsers: [],
  pendingAdoptions: [],
  updatedAnimal: null,
  userByMail: [],
  updatedUser: null,

  estadisticas: {
    donations: [],
    adoptions: [],
    dateFrom: new Date().setFullYear(new Date().getFullYear() - 3),
    dateTo: new Date(),
    tabSelected: "donaciones", // [ 'donaciones', 'adopciones']
  },
  allreviews: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCHBAR_VALUE: {
      return {
        ...state,
        searchBarValue: payload,
      };
    }

    case SET_ORDERBY_VALUE: {
      return {
        ...state,
        orderByValue: payload,
      };
    }

    case SET_ORDERDIR_VALUE: {
      return {
        ...state,
        orderDirValue: payload,
      };
    }

    case SET_SIZE_VALUE: {
      return {
        ...state,
        sizeValue: payload,
      };
    }

    case SET_SPECIES_VALUE: {
      return {
        ...state,
        speciesValue: payload,
      };
    }
    case SET_ENABLED_VALUE: {
      return {
        ...state,
        enabledValue: payload,
      };
    }

    case SET_CASTRATED_VALUE: {
      return {
        ...state,
        castratedValue: payload,
      };
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
        searchBarValue: "",
        allAnimals: [],
        animalById: [],
        allUsers: [],
      };
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
        return payload === "A"
          ? a.estimatedBirthYear - b.estimatedBirthYear
          : b.estimatedBirthYear - a.estimatedBirthYear;
      });
      return {
        ...state,
        allAnimals: animalsByAge,
      };

    case CREATE_FORM_SUCCESS: {
      return state;
    }

    case CREATE_FORM_FAILURE: {
      return state;
    }

    case DELETE_ANIMAL: {
      return state;
    }

    case LOAD_USERS: {
      return {
        ...state,
        allUsers: payload,
      };
    }

    case LOAD_ADOPTIONS: {
      return {
        ...state,
        allAdoptions: payload.adoptions,
        pagination1: payload.pagination,
      };
    }

    case LOAD_PENDING_ADOPTIONS: {
      return {
        ...state,
        pendingAdoptions: payload,
      };
    }

    case LOAD_ESTADISTICAS_DONATIONS: {
      return {
        ...state,
        estadisticas: {
          ...state.estadisticas,
          donations: payload,
        },
      };
    }

    case LOAD_ESTADISTICAS_ADOPTIONS: {
      return {
        ...state,
        estadisticas: {
          ...state.estadisticas,
          adoptions: payload,
        },
      };
    }

    case SET_ESTADITICAS_DATE_RANGE: {
      return {
        ...state,
        estadisticas: {
          ...state.estadisticas,
          dateFrom: payload[0],
          dateTo: payload[1],
        },
      };
    }

    case SET_ESTADITICAS_TAB: {
      return {
        ...state,
        estadisticas: {
          ...state.estadisticas,
          tabSelected: payload,
        },
      };
    }

    case GET_ALLREVIEWS: {
      return {
        ...state,
        allreviews: payload,
      };
    }

    case ACCEPT_ADOPTION_SUCCESS:
      return {
        ...state,
      };

    case ACCEPT_ADOPTION_FAILURE:
      return {
        ...state,
      };

    case REFUSE_ADOPTION_SUCCESS:
      return {
        ...state,
      };

    case REFUSE_ADOPTION_FAILURE:
      return {
        ...state,
      };
    case UPDATE_ANIMAL: {
      return {
        ...state,
        updatedAnimal: payload,
      };
    }

    case USER_BY_MAIL: {
      return {
        ...state,
        userByMail: payload,
      };
    }

    case DELETE_USER: {
      return state;
    }

    case UPDATE_USER: {
      return {
        ...state,
        updatedUser: payload,
      };
    }
    case ALLDONATIONS_USER: {
      return {
        ...state,
        alldonations_user: payload.data,
        alldonation_user_copy: payload.data,
        pagination: {
          ...state.pagination,
          ...payload.pagination,
        },
      };
    }
    case TOTAL_AMOUNT_DONATION_USER: {
      return {
        ...state,
        total_amount_donation_user: payload,
      };
    }
    case TOTAL_ADOPTION_USER: {
      return {
        ...state,
        total_adoption_user: payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
