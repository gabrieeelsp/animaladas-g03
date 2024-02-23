import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import Paginacion from "../../Components/Pagination/Pagination";
import Loader from "../../Components/Loader/Loader";
import {
  loadAnimals,
  clearAll,
  set_size_value,
  set_species_value,
  set_castrated_value,
  set_orderdir_value,
  set_orderby_value,
} from "../../redux/actions/actions";
import "./Adoptar.css";
import React from "react";

export default function Adoptar() {
  const nameValue = useSelector((state) => state.rootReducer.searchBarValue);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const animals = useSelector((state) => state.rootReducer.allAnimals);
  const pagination = useSelector((state) => state.rootReducer.pagination);
  const orderByValue = useSelector((state) => state.rootReducer.orderByValue);
  const orderDirValue = useSelector((state) => state.rootReducer.orderDirValue);
  const sizeValue = useSelector((state) => state.rootReducer.sizeValue);
  const speciesValue = useSelector((state) => state.rootReducer.speciesValue);
  const castratedValue = useSelector(
    (state) => state.rootReducer.castratedValue
  );
  const enabledValue = useSelector((state) => state.rootReducer.enabledValue);

  const optionsCastrated = ["Todos", "Si", "No"];
  const handleChangeCastrated = (event) => {
    dispatch(set_castrated_value(event.target.value));
    dispatch(
      loadAnimals(
        nameValue,
        "adoptable",
        sizeValue,
        speciesValue,
        event.target.value,
        1,
        4,
        orderByValue,
        orderDirValue,
        enabledValue
      )
    );
  };

  const optionsSize = ["Todos", "chico", "mediano", "grande"];
  const handleChangeSize = (event) => {
    dispatch(set_size_value(event.target.value));
    dispatch(
      loadAnimals(
        nameValue,
        "adoptable",
        event.target.value,
        speciesValue,
        castratedValue,
        1,
        4,
        orderByValue,
        orderDirValue,
        enabledValue
      )
    );
  };

  const optionsSpecies = ["Todos", "perro", "gato"];
  const handleChangeSpecies = (event) => {
    dispatch(set_species_value(event.target.value));
    dispatch(
      loadAnimals(
        nameValue,
        "adoptable",
        sizeValue,
        event.target.value,
        castratedValue,
        1,
        4,
        orderByValue,
        orderDirValue,
        enabledValue
      )
    );
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(clearAll());
      dispatch(
        loadAnimals(
          nameValue,
          "adoptable",
          sizeValue,
          speciesValue,
          castratedValue,
          1,
          4,
          "",
          "",
          enabledValue
        )
      );
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleNextPage = (page) => {
    dispatch(
      loadAnimals(
        nameValue,
        "adoptable",
        sizeValue,
        speciesValue,
        castratedValue,
        page,
        4,
        orderByValue,
        orderDirValue,
        enabledValue
      )
    );
  };

  const handlePrevPage = (page) => {
    dispatch(
      loadAnimals(
        nameValue,
        "adoptable",
        sizeValue,
        speciesValue,
        castratedValue,
        page,
        4,
        orderByValue,
        orderDirValue,
        enabledValue
      )
    );
  };

  const [orderby, setOrderBy] = useState("");

  const [orderDir, setOrderDir] = useState("asc");

  const handleOrderNameDir = (event) => {
    let orderByValueLocal = event.target.value === "" ? "" : "name";
    dispatch(set_orderby_value(orderByValueLocal));
    dispatch(set_orderdir_value(event.target.value));
    dispatch(
      loadAnimals(
        nameValue,
        "adoptable",
        sizeValue,
        speciesValue,
        castratedValue,
        1,
        4,
        orderByValueLocal,
        event.target.value,
        enabledValue
      )
    );
  };

  const resetFilters = () => {
    dispatch(set_size_value("Todos"));
    dispatch(set_species_value("Todos"));
    dispatch(set_castrated_value("Todos"));
    dispatch(
      loadAnimals(
        nameValue,
        "adoptable",
        "Todos",
        "Todos",
        "Todos",
        1,
        4,
        orderByValue,
        orderDirValue,
        enabledValue
      )
    );
  };

  return (
    <div style={{ paddingTop: "45px" }}>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-100">
              <img
                className="banner-img"
                src="https://iili.io/JcT3TLg.png"
                alt="dogs-image"
              />
            </div>
            <div className="col-10">
              <div className="row w-100">
                <div
                  className="col-12"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    rowGap: "15px",
                    columnGap: "15px",
                  }}
                >
                  {animals &&
                    animals.map((animal) => {
                      return (
                        <Card
                          key={animal.id}
                          id={animal.id}
                          image2={animal.image2}
                          name={animal.name}
                          estimatedBirthYear={animal.estimatedBirthYear}
                          castrated={animal.castrated}
                          size={animal.size}
                          weight={animal.weight}
                          species={animal.species}
                          gender={animal.gender}
                          enabled={animal.enabled}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
            <div
              className="bg-dark col-1 my-3 d-flex flex-column align-items-center justify-content-center"
              style={{ width: "auto", height: "650px", borderRadius: "20px" }}
            >
              <span className="text-warning btn-sm m-3 fw-bold">
                Ordenamiento
              </span>
              <span className="text-warning btn-sm m-3">
                Ordenar por nombre
              </span>
              <div className="dropdown">
                <select
                  className="btn btn-warning btn-sm dropdown-toggle dropdown-menu-dark"
                  onChange={handleOrderNameDir}
                  style={{ width: "170px" }}
                >
                  <option value="" selected>
                    Seleccionar orden
                  </option>
                  <option value="asc">A-Z</option>
                  <option value="desc">Z-A</option>
                </select>
              </div>

              <p></p>
              <hr
                className="col-12 bg-warning"
                style={{ height: "2px", margin: "10px 0" }}
              />
              <span className="text-warning btn-sm m-3 fw-bold">Filtros</span>
              <div className="dropdown">
                <p className="text-warning btn-sm m-3">Tipo de Tamaño</p>
                <select
                  className="btn btn-warning btn-sm dropdown-toggle"
                  style={{ width: "170px" }}
                  value={sizeValue}
                  onChange={handleChangeSize}
                >
                  {optionsSize.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="dropdown">
                <p className="text-warning btn-sm m-3">Tipo de Animal</p>
                <select
                  className="btn btn-warning btn-sm dropdown-toggle"
                  style={{ width: "170px" }}
                  value={speciesValue}
                  onChange={handleChangeSpecies}
                >
                  {optionsSpecies.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="dropdown">
                <p className="text-warning btn-sm m-3">Castrado</p>
                <select
                  className="btn btn-warning btn-sm dropdown-toggle"
                  style={{ width: "170px" }}
                  value={castratedValue}
                  onChange={handleChangeCastrated}
                >
                  {optionsCastrated.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                className="btn btn-danger btn-sm my-5"
                onClick={resetFilters}
                style={{ width: "170px" }}
              >
                Reset Filtros
              </button>
            </div>
          </div>
        </div>
      )}{" "}
      {!loading && (
        <Paginacion
          pagination={pagination}
          onNextPage={handleNextPage}
          onPrevPage={handlePrevPage}
        />
      )}
    </div>
  );
}
