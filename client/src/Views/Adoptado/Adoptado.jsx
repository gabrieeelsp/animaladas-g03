import React from "react";
import CardA from "../../Components/CardR/CardR";
import Paginacion from "../../Components/Pagination/Pagination";
import Loader from "../../Components/Loader/Loader"
import { loadAnimals, clearAll, adoptableAnimals } from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function Rescatado() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const animals = useSelector((state) => state.allAnimals);
  const pagination = useSelector((state) => state.pagination);


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(loadAnimals());  
      setLoading(false);
    }, 1000);
  
    return () => clearTimeout(timeoutId);
  }, [dispatch]);
  
  const adopted = animals.filter((animal) => animal.status === "adopted");

  const handleNextPage = (page) => {
    dispatch(loadAnimals(page));
  };

  const handlePrevPage = (page) => {
    dispatch(loadAnimals(page));
  };

  return (
    <div>
    {loading ? (
      <Loader />
    ) : (
      <div>
        <div className="container my-3">
            <div className="row w-100">
              <div className="col">
              {adopted && adopted.map((animal) => {
              return(
                <CardA
                  key={animal.id}
                  id={animal.id}
                  name={animal.name}
                />)
            })}
              </div>
            </div>
          </div>
        </div>
        )} {!loading && (
  <Paginacion
        pagination={pagination}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
        />
)}
      </div>
  );
}
