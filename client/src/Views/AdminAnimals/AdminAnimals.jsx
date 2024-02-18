import CardAdmin from "../../Components/CardAdmin/CardAdmin";
import Paginacion from "../../Components/Pagination/Pagination";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Loader from "../../Components/Loader/Loader";
import { loadAnimals, clearAll, set_enabled_value, set_orderby_value, set_orderdir_value } from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function AdminAnimals() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const animals = useSelector((state) => state.rootReducer.allAnimals);
    const pagination = useSelector((state) => state.rootReducer.pagination);
    const nameValue = useSelector((state) => state.rootReducer.searchBarValue);
    const orderByValue = useSelector((state) => state.rootReducer.orderByValue);
    const orderDirValue = useSelector((state) => state.rootReducer.orderDirValue);
    const sizeValue = useSelector((state) => state.rootReducer.sizeValue);
    const speciesValue = useSelector((state) => state.rootReducer.speciesValue);
    const castratedValue = useSelector((state) => state.rootReducer.castratedValue);
    const enabledValue = useSelector((state) => state.rootReducer.enabledValue);

    const optionsEnabled = ['Todos', 'Si', 'No'];
    const handleChangeEnabled = (event) => {
        dispatch(set_enabled_value(event.target.value));  
        dispatch(set_orderby_value('id'));
        dispatch(set_orderdir_value('asc'));
        dispatch(loadAnimals(nameValue, '', sizeValue, speciesValue, castratedValue, 1, 3, orderByValue, orderDirValue, event.target.value));
    }

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        dispatch(clearAll());
        dispatch(loadAnimals(nameValue, '', sizeValue, speciesValue, castratedValue, 1, 3, orderByValue, orderDirValue, enabledValue));
        setLoading(false);
      }, 2000);
    
      return () => clearTimeout(timeoutId);
    }, []);
    
    const handleNextPage = (page) => {
        dispatch(loadAnimals(nameValue, '', sizeValue, speciesValue, castratedValue, page, 3, orderByValue, orderDirValue, enabledValue));  
    };
  
    const handlePrevPage = (page) => {
        dispatch(loadAnimals(nameValue, '', sizeValue, speciesValue, castratedValue, page, 3, orderByValue, orderDirValue, enabledValue));
    };
  
    return (
            <div className="container">
                <div className="row mt-0">
                    <div className="col-md-9" style={{height: "550px"}}>
                        <div className="d-flex justify-content-center align-items-center my-2">
                    <div className="mx-5">
                        <SearchBar />
                    </div>
                    <div className="dropdown mx-5">
                        <p className="fw-bold btn-sm m-1">
                            Habilitado
                        </p>
                        <select className="btn btn-dark btn-sm fw-bold text-warning dropdown-toggle m-2" style={{ width: "170px" }} value={enabledValue} onChange={handleChangeEnabled}>
                            {optionsEnabled.map((option) => <option key={option} value={option} >{option}</option>)}
                        </select>
                    </div>
                <NavLink to="/add">
                  <button
                    className="btn bg-dark text-warning fw-bold p-1 mx-5"
                    type="button"
                  >
                    Agregar mascota
                  </button>
                </NavLink>
                    </div>
                    <div className="row">
                        {loading ? (
                            <Loader />
                        ) : (
                            animals && animals.map((animal) => (
                                <div key={animal.id} className="col-md-4 mb-3">
                                    <CardAdmin
                                        key={animal.id}
                                        id={animal.id}
                                        name={animal.name}
                                        species={animal.species}
                                        size={animal.size}
                                        gender={animal.gender}
                                        estimatedBirthYear={animal.estimatedBirthYear}
                                        weight={animal.weight}
                                        rescued_story={animal.rescued_story}
                                        adoption_story={animal.adoption_story}
                                        image1={animal.image1}
                                        image2={animal.image2}
                                        image3={animal.image3}
                                        status={animal.status}
                                        enabled={animal.enabled}
                                        castrated={animal.castrated}
                                        disability_illness={animal.disability_illness}
                                        vaccines={animal.vaccines}
                                    />
                                </div>
                            ))
                        )}
                    </div>
                    <div className="m-5">
                        <Paginacion
                            pagination={pagination}
                            onNextPage={handleNextPage}
                            onPrevPage={handlePrevPage}
                        />
                    </div>
                </div>
                <div className="col-md-2 bg-dark text-warning d-flex flex-column align-items-center justify-content-center mx-3" style={{ border: "2px solid black", borderRadius: "10px", padding: "10px", height: "600px", width: "200px" }}>
                    <NavLink to="/admin">
                        <button className="btn btn-warning btn-block fs-5 fw-bold my-4" style={{ width: "160px" }}>
                            ESTADÍSTICAS
                        </button>
                    </NavLink>
                    <NavLink to="/admin/users">
                        <button className="btn btn-warning btn-block fs-5 fw-bold my-4" style={{ width: "160px" }}>
                            USUARIOS
                        </button>
                    </NavLink>
                    <NavLink to="/admin/animals">
                        <button className="btn btn-warning btn-block fs-5 fw-bold my-4" style={{ width: "160px" }}>
                            ANIMALES
                        </button>
                    </NavLink>
              <NavLink to="/admin/forms">
              <button className="btn btn-warning btn-block fs-5 fw-bold my-4" style={{ width: "160px" }}>
                FORMULARIOS
              </button>
              </NavLink>
              <NavLink to="/admin/reviews">
              <button className="btn btn-warning btn-block fs-5 fw-bold my-4" style={{ width: "160px" }}>
                REVIEWS
              </button>
              </NavLink>
              <NavLink to="/">
              <button className="btn btn-warning btn-block fs-5 fw-bold my-4" style={{ width: "50px" }}>
              <i className="bi-house-door-fill"></i>
              </button>
              </NavLink>
        </div>
      </div>
    </div>
  );
}
