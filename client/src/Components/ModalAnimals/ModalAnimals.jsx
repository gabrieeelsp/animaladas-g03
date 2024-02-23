import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAll, updateAnimal, loadAnimals, set_orderby_value, set_orderdir_value } from "../../redux/actions/actions";

export default function ModalAnimals(props) {

  const {id, name, status, species, size, gender, estimatedBirthYear, weight, image2, image3, rescued_story, adoption_story, castrated, disability_illness, vaccines, enabled} = props;
  const dispatch = useDispatch();
  const [updatedAnimalData, setUpdatedAnimalData] = useState({
    name,
    status,
    species,
    size,
    gender,
    estimatedBirthYear,
    weight,
    image2: { url: image2, file: null },
    image3: { url: image3, file: null },
    rescued_story,
    adoption_story,
    castrated,
    disability_illness,
    vaccines});
  const nameValue = useSelector((state) => state.rootReducer.searchBarValue);
  const orderByValue = useSelector((state) => state.rootReducer.orderByValue);
  const orderDirValue = useSelector((state) => state.rootReducer.orderDirValue);
  const sizeValue = useSelector((state) => state.rootReducer.sizeValue);
  const speciesValue = useSelector((state) => state.rootReducer.speciesValue);
  const castratedValue = useSelector((state) => state.rootReducer.castratedValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedAnimalData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setUpdatedAnimalData((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };
  
  const handleUpdateAnimal = () => {
      dispatch(clearAll());
      dispatch(set_orderby_value('id'));
      dispatch(set_orderdir_value('asc'));
      dispatch(loadAnimals(nameValue, '', sizeValue, speciesValue, castratedValue, 1, 3, orderByValue, orderDirValue, "Todos"));
      dispatch(updateAnimal(id, updatedAnimalData));
    };
  
  return (
      <div>
        <div className="modal fade" id={`exampleModal${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content bg-dark text-warning">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modificar animal - ID {id}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="name" className="col-form-label">Nombre:</label>
                      <input type="text" className="form-control text-center" id="name" name="name" value={updatedAnimalData.name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="species" className="col-form-label">Especie:</label>
                      <input type="text" className="form-control text-center" id="species" name="species" value={updatedAnimalData.species} readOnly />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="gender" className="col-form-label">Género:</label>
                      <input type="text" className="form-control text-center" id="gender" name="gender" value={updatedAnimalData.gender} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="status" className="col-form-label">Estado:</label>
                      <input type="text" className="form-control text-center" id="status" name="status" value={updatedAnimalData.status} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="size" className="col-form-label">Tamaño:</label>
                      <input type="text" className="form-control text-center" id="size" name="size" value={updatedAnimalData.size} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="estimatedBirthYear" className="col-form-label">Año de nacimiento:</label>
                      <input type="text" className="form-control text-center" id="estimatedBirthYear" name="estimatedBirthYear" value={updatedAnimalData.estimatedBirthYear} onChange={handleChange} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="weight" className="col-form-label">Peso (kg):</label>
                      <input type="text" className="form-control text-center" id="weight" name="weight" value={updatedAnimalData.weight} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="rescued_story" className="col-form-label">Historia de rescate:</label>
                      <textarea className="form-control text-center" id="rescued_story" name="rescued_story" value={updatedAnimalData.rescued_story ? updatedAnimalData.rescued_story : "Historia de ejemplo"} onChange={handleChange}></textarea>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="adoption_story" className="col-form-label">Historia de adopción:</label>
                      <textarea className="form-control text-center" id="adoption_story" name="adoption_story" value={updatedAnimalData.adoption_story ? updatedAnimalData.adoption_story : "Historia de ejemplo"} onChange={handleChange}></textarea>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="image2" className="col-form-label">Foto para adopción:</label>
                      <input type="file" className="form-control text-center" id="image2" name="image2" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="image3" className="col-form-label">Foto adoptado:</label>
                      <input type="file" className="form-control text-center" id="image3" name="image3" onChange={handleChange} />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                      <label htmlFor="vaccines" className="col-form-label me-3">Vacunado</label>
                      <input type="checkbox" className="form-check-input" id="vaccines" name="vaccines" checked={updatedAnimalData.vaccines} onChange={handleCheckboxChange} />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                      <label htmlFor="disability_illness" className="col-form-label me-3">Cuidados especiales</label>
                      <input type="checkbox" className="form-check-input" id="disability_illness" name="disability_illness" checked={updatedAnimalData.disability_illness} onChange={handleCheckboxChange} />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                      <label htmlFor="castrated" className="col-form-label me-3">Castrado</label>
                      <input type="checkbox" className="form-check-input my-2" id="castrated" name="castrated" checked={updatedAnimalData.castrated} onChange={handleCheckboxChange} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger fw-bold" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-success fw-bold" data-bs-dismiss="modal" onClick={handleUpdateAnimal}>Guardar cambios</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
    