import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer.js";
import UserReducer from "./reducer_users.js";
import { loadState, saveState } from "../scripts/Localstore.js";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS

const reducer = combineReducers({
  rootReducer,
  UserReducer,
});
const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk)) // esta línea es para poder hacer peticiones a un server
);

store.subscribe(function () {
  saveState(store.getState(UserReducer));
});
export default store;
