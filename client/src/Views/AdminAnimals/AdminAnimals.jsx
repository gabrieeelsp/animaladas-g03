import CardAdmin from "../../Components/CardAdmin/CardAdmin";
import { loadAnimals, clearAll } from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Paginacion from "../../Components/Pagination/Pagination";
import Loader from "../../Components/Loader/Loader"
import { NavLink } from "react-router-dom";

export default function AdminAnimals() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const animals = useSelector((state) => state.allAnimals);
    const pagination = useSelector((state) => state.pagination);
    const nameValue = useSelector((state) => state.searchBarValue);
    const orderByValue = useSelector((state) => state.orderByValue);
    const orderDirValue = useSelector((state) => state.orderDirValue);
    const sizeValue = useSelector((state) => state.sizeValue);
    const speciesValue = useSelector((state) => state.speciesValue);
    const castratedValue = useSelector((state) => state.castratedValue);
  
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          dispatch(clearAll());
          dispatch(loadAnimals(nameValue, '', sizeValue, speciesValue, castratedValue, 1, 2, orderByValue, orderDirValue, ''));
          setLoading(false);
        }, 2000);
      
        return () => clearTimeout(timeoutId);
      }, []);
      
  
    const handleNextPage = (page) => {
        dispatch(loadAnimals(nameValue, '', sizeValue, speciesValue, castratedValue, page, 2, orderByValue, orderDirValue, ''));  
    };
  
    const handlePrevPage = (page) => {
        dispatch(loadAnimals(nameValue, '', sizeValue, speciesValue, castratedValue, page, 2, orderByValue, orderDirValue, ''));
    };
  
    return(
    <div className="container">
          <div className="row mt-4">
          {loading ? (
      <Loader />
    ) : (
            <div className="col-md-9 mb-3 mt-2" style={{ padding: "20px" }}>
            {animals && animals.map((animal) => {
                
                return(
                  <CardAdmin
                    key={animal.id}
                    id={animal.id}
                    name={animal.name}
                    image1={animal.image1}
                    image2={animal.image2}
                    image3={animal.image3}
                    status={animal.status}
                    enabled={animal.enabled}
                  />
               
                )
              })}
            </div>
    )}
            <div className="col-md-3 mb-4 mt-3 bg-dark text-warning d-flex flex-column align-items-center justify-content-center fs-5" style={{ border: "2px solid black", borderRadius: "10px", padding: "15px", height: "540px" }}>
              <NavLink to="/admin">
                  <button className="btn btn-warning btn-block fs-5 fw-bold my-5" style={{ width: "180px" }}>
                    ESTADÍSTICAS
                  </button>
                  </NavLink>
                  <NavLink to="/admin/users">
                  <button className="btn btn-warning btn-block fs-5 fw-bold my-5" style={{ width: "180px" }}>
                    USUARIOS
                  </button>
                  </NavLink>
                  <NavLink to="/admin/animals">
                  <button className="btn btn-warning btn-block fs-5 fw-bold my-5" style={{ width: "180px" }}>
                    ANIMALES
                  </button>
                  </NavLink>
                  <NavLink to="/">
                  <button className="btn btn-warning btn-block fs-5 fw-bold my-5" style={{ width: "50px" }}>
                  <i className="bi-house-door-fill"></i>
                  </button>
                  </NavLink>
            </div>
          </div>
          {!loading && (
  <Paginacion
        pagination={pagination}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
        />
)}
        </div>
    )
    };