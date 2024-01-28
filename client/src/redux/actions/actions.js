import { LOAD_ANIMALS, UPDATE_PAGINATION } from "./types";
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