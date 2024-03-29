import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadAnimals, set_searchbar_value } from "../../redux/actions/actions";
import SearchResultNotFoundModal from "./SearchResultNotFoundModal/SearchResultNotFoundModal";



export default function Searchbar() {
  const orderByValue = useSelector((state) => state.rootReducer.orderByValue);
  const orderDirValue = useSelector((state) => state.rootReducer.orderDirValue);
  const sizeValue = useSelector((state) => state.rootReducer.sizeValue);
  const speciesValues = useSelector((state) => state.rootReducer.speciesValues);
  const castratedValue = useSelector((state) => state.rootReducer.castratedValue);
  const enabledValue = useSelector((state) => state.rootReducer.enabledValue);
  const location = useLocation();
  const nameValue = useSelector((state) => state.rootReducer.searchBarValue);
  const animals = useSelector((state) => state.rootReducer.allAnimals);
  const dispatch = useDispatch();


  const [showNoResultsModal, setShowNoResultsModal] = useState(false);

  if (
    location.pathname !== "/adoptar" &&
    location.pathname !== "/admin/users" &&
    location.pathname !== "/admin/animals"
  ) {
    return null;
  }

  const handleChange = (event) => {
    dispatch(set_searchbar_value(event.target.value));
  };

  const onSearch = (event) => {
    event.preventDefault();
    if (location.pathname === "/adoptar") {
      dispatch(
        loadAnimals(
          nameValue,
          "adoptable",
          sizeValue,
          speciesValues,
          castratedValue,
          1,
          4,
          orderByValue,
          orderDirValue,
          enabledValue
        )
      )
        .then(() => {
          if (animals.length === 0) {
      
            setShowNoResultsModal(true);
          }
        })
        .then(() => dispatch(set_searchbar_value("")));
    } else {
      dispatch(
        loadAnimals(
          nameValue,
          "",
          sizeValue,
          speciesValues,
          castratedValue,
          1,
          3,
          orderByValue,
          orderDirValue,
          enabledValue
        )
      ).then(() => {
        if (animals.length === 0) {
          
          setShowNoResultsModal(true);
        }
      });
    }
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      onSearch(event);
    }
  };

  return (
    <>
      <form className="d-flex me-5" role="search" onSubmit={onSearch}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Buscar"
          value={nameValue}
          onChange={handleChange}
          onKeyDown={onKeyDown}
        />
        {location.pathname !== "/admin/animals" ? (
          <button className="btn btn-outline-warning bg-dark" type="submit">
            Buscar
          </button>
        ) : (
          <button className="btn text-warning bg-dark fw-bold" type="submit">
            Buscar
          </button>
        )}
      </form>
     
      <SearchResultNotFoundModal show={showNoResultsModal} handleClose={() => setShowNoResultsModal(false)} />
    </>
  );
}
