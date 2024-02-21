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
  ACCEPT_REVIEW_SUCCESS,
  ACCEPT_REVIEW_FAILURE,
  REFUSE_REVIEW_FAILURE,
  REFUSE_REVIEW_SUCCESS,
  UPDATE_ANIMAL,
  USER_BY_MAIL,
  UPDATE_USER,
  ALLDONATIONS_USER,
  ALLADOPTIONS_USER,
  TOTAL_AMOUNT_DONATION_USER,
  TOTAL_ADOPTION_USER,
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
        (adoption) =>
          adoption.userId === userId && adoption.animalId === animalId
      );

      if (isPending) {
        throw new Error(
          "Ya existe una solicitud de adopción pendiente para este usuario y animal."
        );
      }

      // Si no hay adopciones pendientes, procede con el envío del formulario
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      const response = await axios.post(
        `${urlBaseAxios}/adoptions`,
        formData,
        config
      );
      const createdForm = response.data;

      dispatch(createFormSuccess(createdForm));
    } catch (error) {
      console.error("Error creating activity:", error.message);
      dispatch(createFormFailure("Error creating Form"));
      throw new Error(error.message);
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
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      await axios.put(
        `${urlBaseAxios}/animal/enable/${id}`,
        { enabled },
        config
      );
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
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      const response = await axios.get(
        `${urlBaseAxios}/adoptions/get_pending_adoption?userId=${userId}&animalId=${animalId}`,
        config
        // {
        //   params: {
        //     userId: userId,
        //     animalId: animalId,
        //   },
        // },
      );

      const pendingAdoptionsData = response.data.data;

      dispatch({
        type: LOAD_PENDING_ADOPTIONS,
        payload: pendingAdoptionsData,
      });
    } catch (error) {
      console.error("Error fetching adoptions:", error);
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
  orderdir
) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      const response = await axios.get(
        `${urlBaseAxios}/adoptions?userId=${userId}&animalId=${animalId}&page=${page}&limit=${animalsPerPage}&orderby=${orderby}&orderdir=${orderdir}`,
        config
      );

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
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.get(
      `${urlBaseAxios}/user/searchAllUsers`,
      config
    );
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
    const token = localStorage.getItem("token");
    console.log(token);

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.get(
      `${urlBaseAxios}/${tabValue}?dateFrom=${dateFromValue}&dateTo=${dateToValue}`,
      config
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

export const get_allreviews = (
  userId,
  reviewsPerPage = 5,
  page = 1,
  isReviewed,
  // orderby,
  // orderdir
) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      // localhost:3001/review/allReviews?userId=2&limit=2&page=1&isReviewed=pendiente
      const response = await axios.get(`${urlBaseAxios}/review/allReviews?userId=${userId}&limit=${reviewsPerPage}&page=${page}&isReviewed=${isReviewed}`, config);

      const data = response.data;

      dispatch({
        type: GET_ALLREVIEWS,
        payload: {
          reviews: data.data,
          pagination: data.pagination,
        },
      });
      dispatch({
        type: UPDATE_PAGINATION,
        payload: data.pagination,
      });
    } catch (error) {
      console.error("Error al cargar las reviews:", error);
    }
  };
};


export const acceptReview = (id) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      };
      const response = await axios.post(
        `${urlBaseAxios}/review/${id}/accept`, {}, config
      );
      dispatch({
        type: ACCEPT_REVIEW_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: ACCEPT_REVIEW_FAILURE,
        payload: error,
      });
    }
  };
};

export const refuseReview = (id) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      };
      const response = await axios.post(
        `${urlBaseAxios}/review/${id}/refuse`, {}, config
      );
      dispatch({
        type: REFUSE_REVIEW_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: REFUSE_REVIEW_FAILURE,
        payload: error,
      });
    }
  };
};

export const acceptAdoption = (id) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      const response = await axios.post(
        `${urlBaseAxios}/adoptions/${id}/accept`,
        {},
        config
      );
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
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      const response = await axios.post(
        `${urlBaseAxios}/adoptions/${id}/refuse`,
        {},
        config
      );
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

export const updateAnimal = (id, updateValues) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      await axios.put(
        `${urlBaseAxios}/animal/update/${id}`,
        updateValues,
        config
      );
      dispatch({
        type: UPDATE_ANIMAL,
        payload: updateValues,
      });
    } catch (error) {
      console.error("Error al actualizar los datos del animal:", error);
    }
  };
};

export const userByMail = (email) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      const response = await axios.post(
        `${urlBaseAxios}/user/searchUser`,
        {
          email: email,
        },
        config
      );
      dispatch({
        type: USER_BY_MAIL,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error al buscar usuario por correo electrónico:", error);
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      await axios.put(`${urlBaseAxios}/user/users/${id}`, config);
      dispatch({
        type: DELETE_ANIMAL,
        payload: {
          id,
        },
      });
    } catch (error) {
      console.error("Error al borrar usuario:", error);
    }
  };
};

export const updateUser = (updateValues) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      await axios.put(
        `${urlBaseAxios}/user/changeUserData`,
        updateValues,
        config
      );
      dispatch({
        type: UPDATE_USER,
        payload: updateValues,
      });
    } catch (error) {
      console.error("Error al actualizar los datos del usuario:", error);
    }
  };
};

export function alldonations_user(userId, limit, page, orderDir, orderBy) {
  console.log("valor de param userId", userId);
  console.log("valor de param limit", limit);
  console.log("valor de param page", page);
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  return async function (dispatch) {
    const response = await axios.get(
      `${urlBaseAxios}/donations?userId=${userId}&limit=${limit}&page=${page}&orderBy=${orderBy}&orderDir=${orderDir}`,
      config
    );
    const { data } = response;
    console.log(
      "valor de data alldonations_user action",
      data.data[0].createdAt.split("T")[0]
    );

    return dispatch({
      type: ALLDONATIONS_USER,
      payload: data,
    });
  };
}

export function alladoptions_user(userId, limit, page, orderDir, orderBy) {
  console.log("ingreso al reducer alldoption con filtros");
  return async function (dispatch) {
    console.log("valor de orderdir", orderDir);
    console.log("valor de orde orderBy", orderby);
    const response = await axios.get(
      `${urlBaseAxios}/adoptions?userId=${userId}&limit=${limit}&page=${page}&orderBy=${orderBy}&orderDir=${orderDir}`,
      config
    );

    const { data } = response;
    console.log("informacion del data de all adopton", data);

    return dispatch({
      type: ALLADOPTIONS_USER,
      payload: data,
    });
  };
}

export const total_amount_donation_user = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`${urlBaseAxios}/donations/total/${id}`);
    dispatch({
      type: TOTAL_AMOUNT_DONATION_USER,
      payload: response.data,
    });
  };
};
export const total_adoption_user = (id, limit, page, orderDir, orderBy) => {
  console.log("ingreso al reducr", id);
  return async (dispatch) => {
    const response = await axios.get(
      `${urlBaseAxios}/adoptions/total/${id}?limit=${limit}&page=${page}&orderBy=${orderBy}&orderDir=${orderDir}`
    );
    //http://localhost:3001/adoptions/total/2?limit=10&page=1
    dispatch({
      type: TOTAL_ADOPTION_USER,
      payload: response.data,
    });
  };
};
