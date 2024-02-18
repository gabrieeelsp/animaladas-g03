import React from "react";
import CardR from "../../Components/CardR/CardR";
import Paginacion from "../../Components/Pagination/Pagination";
import Loader from "../../Components/Loader/Loader";
import {
  loadAnimals,
  loadAdopted,
  clearAll,
} from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function Rescatado() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const animals = useSelector((state) => state.rootReducer.allAnimals);
  const pagination = useSelector((state) => state.rootReducer.pagination);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(loadAdopted("rescatado"));
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  const [name, setName] = useState("");

  const handleNextPage = (page) => {
    dispatch(loadAnimals(name, "rescatado", "Todos", "Todos", "Todos", page));
  };

  const handlePrevPage = (page) => {
    dispatch(loadAnimals(name, "rescatado", "Todos", "Todos", "Todos", page));
  };

  return (
    <div style={{ paddingTop: "45px" }}>
      {loading ? (
        <Loader />
      ) : (
        <div className="container my-4">
          <div className="row row-cols-1 row-cols-md-4">
            {animals &&
              animals.map((animal) => {
                return (
                  <div key={animal.id} className="col mb-4">
                    <CardR
                      id={animal.id}
                      name={animal.name}
                      image1={animal.image1}
                      rescued_story={animal.rescued_story}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      )}
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
