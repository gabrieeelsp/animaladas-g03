import { LOAD_ANIMALS, UPDATE_PAGINATION, ANIMAL_BY_ID, CLEAR_ALL } from "./types";
import axios from 'axios';

export const loadAnimals = (page = 1, animalsPerPage = 4) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/animal/getanimals?page=${page}&limit=${animalsPerPage}`);
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
