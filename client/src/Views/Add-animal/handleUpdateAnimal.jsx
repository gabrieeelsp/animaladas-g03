
import { useState } from 'react';

const useAnimalUpdate = () => {
  const [error, setError] = useState(null);

  const handleUpdateAnimal = async (id, updatedData) => {
    try {
      const response = await fetch(`http://localhost:3001/animal/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
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
