import { LOAD_ANIMALS, UPDATE_PAGINATION, ANIMAL_BY_ID, CLEAR_ALL, ADOPTABLE_ANIMALS } from "./types";
import axios from 'axios';

export const loadAnimals = (status, size, species, castrado, page = 1, animalsPerPage = 4) => {
  return async (dispatch) => {
    try {

      const sizeValue = size === 'Todos' ? '' : size;

      const speciesValue = species === 'Todos' ? '' : species;
      
      let castradoValue = null;
      switch (castrado) {
        case 'Todos': {
          castradoValue = '';
          break;
        }
        case 'Si': {
          castradoValue = true;
          break;
        }
        case 'No': {
          castradoValue = false;
          break;
        }
      }

      const response = await axios.get(`http://localhost:3001/animal/getanimals?status=${status}&size=${sizeValue}&species=${speciesValue}&castrated=${castradoValue}&page=${page}&limit=${animalsPerPage}`);
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
const response = await axios.get(`http://localhost:3001/animal/getanimals?status=${status}&page=${page}&limit=${animalsPerPage}`);
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
    const response = await axios.get(`http://localhost:3001/animal/animals${id}`);
    dispatch({
      type: ANIMAL_BY_ID,
      payload: response.data,
    });
};
}

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

export const adoptableAnimals = (status) => {
  return {
      type: ADOPTABLE_ANIMALS,
      payload: status,
  };
};