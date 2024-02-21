
import { useState } from 'react';

const useAnimalUpdate = () => {
  const [error, setError] = useState(null);

  const urlBaseAxios =
        import.meta.env.VITE_ENV === "DEV"
          ? import.meta.env.VITE_URL_DEV
          : import.meta.env.VITE_URL_PROD;

  const handleUpdateAnimal = async (id, updatedData) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${urlBaseAxios}/animal/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        },
        body: JSON.stringify(updatedData)
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el animal');
      }



    } catch (error) {
      setError('Error al actualizar el animal');
      console.error('Error:', error);
    }
  };

  return { handleUpdateAnimal, error };
};

export default useAnimalUpdate;
