import React, { useState } from "react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadAnimals } from "../../redux/actions/actions";

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

  const onSearch = (event) => {
    event.preventDefault(); 
    dispatch(loadAnimals(name, 'adoptable', 'Todos', 'Todos', 'Todos'));
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
        value={name}
        onChange={handleChange}
        onKeyDown={onKeyDown}
      />
      <button className="btn btn-outline-warning" type="submit">
        Buscar
      </button>
    </form>
  );
}
