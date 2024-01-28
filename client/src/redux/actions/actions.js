import { LOAD_ANIMALS } from "./types";
import axios from 'axios';

export const loadAnimals = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/animal/getanimals');
      dispatch({
        type: LOAD_ANIMALS,
        payload: response.data.data,
      });
    } catch (error) {
      console.error("Error al cargar los animales:", error);
    }
  };
};
