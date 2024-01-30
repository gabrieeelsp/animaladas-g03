import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadAnimals, set_searchbar_value } from "../../redux/actions/actions";
import { useSelector } from "react-redux";

export default function Searchbar() {
  
  const orderByValue = useSelector((state) => state.orderByValue)
  const orderDirValue = useSelector((state) => state.orderDirValue)
  const sizeValue = useSelector((state) => state.sizeValue)
  const speciesValues = useSelector((state) => state.speciesValues)
  const castratedValue = useSelector((state) => state.castratedValue)
  
  
  const location = useLocation();
  const [name, setName] = useState("");
  const nameValue = useSelector((state) => state.searchBarValue)
  const dispatch = useDispatch();

  if (location.pathname !== "/adoptar") {
    return null;
  }

  const handleChange = (event) => {
    dispatch(set_searchbar_value(event.target.value));
  };

  const onSearch = (event) => {
    event.preventDefault(); 
    dispatch(loadAnimals(nameValue, 'adoptable', sizeValue, speciesValues, castratedValue, 1, 4, orderByValue, orderDirValue));
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      onSearch(event);
    }
  };

  return (
    <form className="d-flex" role="search" onSubmit={onSearch}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Buscar"
        value={nameValue}
        onChange={handleChange}
        onKeyDown={onKeyDown}
      />
      <button className="btn btn-outline-warning" type="submit">
        Buscar
      </button>
    </form>
  );
}
