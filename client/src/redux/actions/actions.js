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
} from "./types";

import axios from "axios";

const urlBaseAxios = "http://localhost:3001";

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
  enabled,
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
        case "Si": {
          enabledValue = true;
          break;
        }
        case "No": {
          enabledValue = false;
          break;
        }
      }
      console.log({
        name,
        status,
        size: sizeValue,
        species: speciesValue,
        castrated: castradoValue,
        page,
        limit: animalsPerPage,
        orderby: orderBy,
        orderdir: orderDir,
      });

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
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/adoptions",
        formData
      );
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

export const deleteAnimal = (id,enabled) => {
  return async (dispatch) => {
    try {
      await axios.put(`${urlBaseAxios}/animal/animal/${id}`, { enabled });
      dispatch({
        type: DELETE_ANIMAL,
        payload: {
          id,
          enabled,
        },
      });
    } catch (error) {
      console.error('Error al borrar animal:', error);
    }
  };
};
