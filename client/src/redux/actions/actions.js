import {
  LOAD_ANIMALS,
  UPDATE_PAGINATION,
  ANIMAL_BY_ID,
  CLEAR_ALL,
  ORDER_BY_AGE,
  ORDER_BY_NAME,
  SET_SEARCHBAR_VALUE,
  SET_ORDERBY_VALUE,
  SET_ORDERDIR_VALUE,
  SET_SIZE_VALUE,
  SET_SPECIES_VALUE,
  SET_CASTRATED_VALUE,
  CREATE_FORM_SUCCESS,
  CREATE_FORM_FAILURE,
  DELETE_ANIMAL,
  SET_ENABLED_VALUE,
  LOAD_USERS,
  SET_ESTADITICAS_DATE_RANGE,
  SET_ESTADITICAS_TAB,
  LOAD_ESTADISTICAS_DONATIONS,
  LOAD_ESTADISTICAS_ADOPTIONS,
  LOAD_PENDING_ADOPTIONS,
  GET_ALLREVIEWS,
  LOAD_ADOPTIONS,
  ACCEPT_ADOPTION_SUCCESS,
  ACCEPT_ADOPTION_FAILURE,
  REFUSE_ADOPTION_FAILURE,
  REFUSE_ADOPTION_SUCCESS,
} from "./types";

import axios from "axios";

const urlBaseAxios =
  import.meta.env.VITE_ENV === "DEV"
    ? import.meta.env.VITE_URL_DEV
    : import.meta.env.VITE_URL_PROD;

export const set_searchbar_value = (value) => {
  return (dispatch) => {
    dispatch({
      type: SET_SEARCHBAR_VALUE,
      payload: value,
    });
  };
};

export const set_orderby_value = (value) => {
  return (dispatch) => {
    dispatch({
      type: SET_ORDERBY_VALUE,
      payload: value,
    });
  };
};

export const set_orderdir_value = (value) => {
  return (dispatch) => {
    dispatch({
      type: SET_ORDERDIR_VALUE,
      payload: value,
    });
  };
};

export const set_size_value = (value) => {
  return (dispatch) => {
    dispatch({
      type: SET_SIZE_VALUE,
      payload: value,
    });
  };
};

export const set_species_value = (value) => {
  return (dispatch) => {
    dispatch({
      type: SET_SPECIES_VALUE,
      payload: value,
    });
  };
};

export const set_castrated_value = (value) => {
  return (dispatch) => {
    dispatch({
      type: SET_CASTRATED_VALUE,
      payload: value,
    });
  };
};
export const set_enabled_value = (value) => {
  return (dispatch) => {
    dispatch({
      type: SET_ENABLED_VALUE,
      payload: value,
    });
  };
};

export const loadAnimals = (
  name,
  status,
  size,
  species,
  castrado,
  page = 1,
  animalsPerPage = 4,
  orderBy = null,
  orderDir = "",
  enabled
) => {
  return async (dispatch) => {
    try {
      const sizeValue = size === "Todos" ? "" : size;

      const speciesValue = species === "Todos" ? "" : species;

      let castradoValue = null;
      switch (castrado) {
        case "Todos": {
          castradoValue = "";
          break;
        }
        case "Si": {
          castradoValue = true;
          break;
        }
        case "No": {
          castradoValue = false;
          break;
        }
      }

      let enabledValue = null;
      switch (enabled) {
        case "Todos": {
          enabledValue = "";
          break;
        }
        case "Si": {
          enabledValue = true;
          break;
        }
        case "No": {
          enabledValue = false;
          break;
        }
      }

      const response = await axios.get(`${urlBaseAxios}/animal/getanimals`, {
        params: {
          name,
          status,
          size: sizeValue,
          species: speciesValue,
          castrated: castradoValue,
          page,
          limit: animalsPerPage,
          orderby: orderBy,
          orderdir: orderDir,
          enabled: enabledValue,
        },
      });

      const data = response.data;

      // Despacha la acción para cargar los animales
      dispatch({
        type: LOAD_ANIMALS,
        payload: {
          animals: data.data,
          pagination: data.pagination,
        },
      });

      // Despacha la acción para actualizar la paginación
      dispatch({
        type: UPDATE_PAGINATION,
        payload: data.pagination,
      });
    } catch (error) {
      console.error("Error al cargar los animales:", error);
    }
  };
};

export const loadAdopted = (status, page = 1, animalsPerPage = 4) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${urlBaseAxios}/animal/getanimals?status=${status}&page=${page}&limit=${animalsPerPage}`
      );
      const data = response.data;

      // Despacha la acción para cargar los animales
      dispatch({
        type: LOAD_ANIMALS,
        payload: {
          animals: data.data,
          pagination: data.pagination,
        },
      });

      // Despacha la acción para actualizar la paginación
      dispatch({
        type: UPDATE_PAGINATION,
        payload: data.pagination,
      });
    } catch (error) {
      console.error("Error al cargar los animales:", error);
    }
  };
};

export const animalById = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`${urlBaseAxios}/animal/animals${id}`);
    dispatch({
      type: ANIMAL_BY_ID,
      payload: response.data,
    });
  };
};

export const clearAll = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_ALL,
    });
  };
};

export const orderByName = (order) => {
  return {
    type: ORDER_BY_NAME,
    payload: order,
  };
};

export const orderByAge = (order) => {
  return {
    type: ORDER_BY_AGE,
    payload: order,
  };
};

export const createForm = (formData) => {
  return async (dispatch, getState) => {
    try {
      const { animalById } = getState().rootReducer;
      const userId = formData.userId;
      const animalId = formData.animalId;

      // Verificar adopciones pendientes
      const pendingAdoptions = getState().rootReducer.pendingAdoptions;
      const isPending = pendingAdoptions.some(
        (adoption) => adoption.userId === userId && adoption.animalId === animalId
      );

      if (isPending) {
        throw new Error("Ya existe una solicitud de adopción pendiente para este usuario y animal.");
      }

      // Si no hay adopciones pendientes, procede con el envío del formulario
      const response = await axios.post(`${urlBaseAxios}/adoptions`, formData);
      const createdForm = response.data;

      dispatch(createFormSuccess(createdForm));
    } catch (error) {
      console.error("Error creating activity:", error.message);
      dispatch(createFormFailure("Error creating Form"));
    }
  };
};

export const createFormSuccess = (form) => ({
  type: CREATE_FORM_SUCCESS,
  form,
});

export const createFormFailure = (error) => ({
  type: CREATE_FORM_FAILURE,
  error,
});

export const deleteAnimal = (id, enabled) => {
  return async (dispatch) => {
    try {
      await axios.put(`${urlBaseAxios}/animal/enable/${id}`, { enabled });
      dispatch({
        type: DELETE_ANIMAL,
        payload: {
          id,
          enabled,
        },
      });
    } catch (error) {
      console.error("Error al borrar animal:", error);
    }
  };
};


export const pendingAdoptions = (userId, animalId) => {
  return async (dispatch) => {
    try {

      const response = await axios.get(`${urlBaseAxios}/adoptions/get_pending_adoption`, {
        params: {
          userId: userId,
          animalId: animalId,
        },
      });

      const pendingAdoptionsData = response.data.data;


      dispatch({
        type: LOAD_PENDING_ADOPTIONS,
        payload: pendingAdoptionsData,
      });
    } catch (error) {
      console.error('Error fetching adoptions:', error);
      throw error;
    }
  };
};

export const allAdoptions = (
  userId,
  animalId,
  page = 1,
  animalsPerPage = 5,
  orderby,
  orderdir,
) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${urlBaseAxios}/adoptions`, {
        params: {
          userId,
          animalId,
          page,
          limit: animalsPerPage,
          orderby,
          orderdir,
        },
      });

      const data = response.data;

      dispatch({
        type: LOAD_ADOPTIONS,
        payload: {
          adoptions: data.data,
          pagination: data.pagination,
        },
      });

      dispatch({
        type: UPDATE_PAGINATION,
        payload: data.pagination,
      });
    } catch (error) {
      console.error("Error al cargar las adopciones:", error);

    }
  };
};


export const loadUsers = () => {
  return async (dispatch) => {
    const response = await axios.get(`${urlBaseAxios}/user/searchAllUsers`);
    dispatch({
      type: LOAD_USERS,
      payload: response.data,
    });
  };
};

export const setEstadisticasDateRange = (value) => {
  return { type: SET_ESTADITICAS_DATE_RANGE, payload: value };
};

export const setEstadisticasTab = (value) => {
  return { type: SET_ESTADITICAS_TAB, payload: value };
};

export const loadEstadisticas = (dateFrom, dateTo, tabSelected) => {
  const tabValue = tabSelected === "donaciones" ? "donations" : "adoptions";

  const dateFromD =
    typeof dateFrom === "number" ? new Date(dateFrom) : dateFrom;
  const dateToD = typeof dateTo === "number" ? new Date(dateTo) : dateTo;

  const dateFromValue =
    dateFromD.getFullYear() +
    "-" +
    (1 + dateFromD.getMonth()) +
    "-" +
    dateFromD.getDate();

  const dateToValue =
    dateToD.getFullYear() +
    "-" +
    (1 + dateToD.getMonth()) +
    "-" +
    dateToD.getDate();

  return async (dispatch) => {
    const response = await axios.get(
      `${urlBaseAxios}/${tabValue}?dateFrom=${dateFromValue}&dateTo=${dateToValue}`
    );

    if (tabSelected === "donaciones") {
      dispatch({
        type: LOAD_ESTADISTICAS_DONATIONS,
        payload: response.data.data,
      });
    } else {
      dispatch({
        type: LOAD_ESTADISTICAS_ADOPTIONS,
        payload: response.data.data,
      });
    }
  };
};

export const get_allreviews = () => {
  return async (dispatch) => {
    const response = await axios.get(`${urlBaseAxios}/review/allReviews`);
    dispatch({
      type: GET_ALLREVIEWS,
      payload: response.data,
    });
  };
};

export const acceptAdoption = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${urlBaseAxios}/adoptions/${id}/accept`);
      dispatch({
        type: ACCEPT_ADOPTION_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: ACCEPT_ADOPTION_FAILURE,
        payload: error,
      });
    }
  };
};

export const refuseAdoption = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${urlBaseAxios}/adoptions/${id}/refuse`);
      dispatch({
        type: REFUSE_ADOPTION_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: REFUSE_ADOPTION_FAILURE,
        payload: error,
      });
    }
  };
};