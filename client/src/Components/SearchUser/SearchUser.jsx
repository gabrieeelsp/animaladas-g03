import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_searchbar_value, loadUsers } from "../../redux/actions/actions";

export default function SearchUser() {
    const nameValue = useSelector((state) => state.rootReducer.searchBarValue);
    const orderByValue = useSelector((state) => state.rootReducer.orderByValue);
    const orderDirValue = useSelector((state) => state.rootReducer.orderDirValue);
    const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(set_searchbar_value(event.target.value));
  };
    
  const onSearch = (event) => {
    event.preventDefault(); 
    dispatch(loadUsers(nameValue, 1, 4, orderByValue, orderDirValue));
    dispatch(set_searchbar_value(''));
  };
  
  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      onSearch(event);
    }
  };

  return (
    <form className="d-flex me-5" role="search" onSubmit={onSearch}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Buscar"
        value={nameValue}
        onChange={handleChange}
        onKeyDown={onKeyDown}
      />
        <button className="btn text-warning bg-dark fw-bold" type="submit">
          Buscar
        </button>
    </form>
  );
}
