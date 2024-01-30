import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchAnimal } from "../../redux/actions/actions";


export default function Searchbar() {
  const location = useLocation();
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  if (location.pathname !== "/adoptar") {
    return null;
  }

  const handleChange = (event) => {
    setName(event.target.value);
  };
  
  const onSearch = () => {
    dispatch(searchAnimal(name, "adoptable"));
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      onSearch();
    }
  };

  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Buscar"
        onChange={handleChange}
        onKeyDown={(e) => onKeyDown(e)}
      />
      <button className="btn btn-outline-warning" type="button" onClick={onSearch}>
        Buscar
      </button>
    </form>
  );
}
