import React from "react";
import CardA from "../../Components/CardR/CardR";
import Paginacion from "../../Components/Pagination/Pagination";
import Loader from "../../Components/Loader/Loader"
import { loadAnimals, loadAdopted, clearAll } from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function Rescatado() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const animals = useSelector((state) => state.allAnimals);
  const pagination = useSelector((state) => state.pagination);


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(loadAdopted('adoptado'));  
      setLoading(false);
    }, 1000);
  
    return () => clearTimeout(timeoutId);
  }, []);
  
  

  const handleNextPage = (page) => {
    dispatch(loadAnimals('adoptado', 'Todos', 'Todos', 'Todos', page));
  };

  const handlePrevPage = (page) => {
    dispatch(loadAnimals('adoptado', 'Todos', 'Todos', 'Todos', page));
  };

  return (
    <div>
    {loading ? (
      <Loader />
    ) : (
      <div>
        <div className="col-10">
          <div className="row w-100">
              <div className="col">
              {animals && animals.map((animal) => {
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
