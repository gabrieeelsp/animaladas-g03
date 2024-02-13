export const loadState = () => {
  try {
    const serializedData = localStorage.getItem("user_info");
    if (serializedData === null) {
      return null; // Si no existe el state en el local storage devolvemos undefined para que cargue el state inicial que hayamos definido
    }
    return JSON.parse(serializedData); // Si encontramos con exito nuestro storage lo devolvemos.
  } catch (error) {
    return null; // Si ocurre algun error, devuelvo undefined para cargar el state inicial.
  }
};
export const saveState = (state) => {
  try {
    let serializedData = JSON.stringify(state.UserReducer);
    localStorage.setItem("user_info", serializedData);
  } catch (error) {
    console.log("fallo algo salvando el storage");
    // Acá podemos capturar o crear cualquier log que deseemos en caso de que falle el salvado en el storage.
  }
};
