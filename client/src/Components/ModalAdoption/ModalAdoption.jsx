
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { submitAdoptionForm } from "../../redux/actions/actions";


export default function ModalAdoption({ id }) {
    const [updatedFormData, setUpdatedFormData] = useState({
        familyMembers: 0,
        allAgree: "false",
        hasOutdoorSpace: "false",
        assumesResponsibility: "false",
        hasKids: "false",
        familyHasAllergies: "false",
        hasJob: "false",
        howManyHours: 0,
        hasOtherAnimals: "false",
        homeVisit: "false",
        comment: "Descripcion",
    });


    useEffect(() => {
        updatedFormData;
      }, []);

    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await dispatch(submitAdoptionForm(id, updatedFormData));
            console.log("Formulario de adopción enviado exitosamente");
            // Puedes agregar aquí cualquier lógica adicional después de enviar el formulario
        } catch (error) {
            console.error("Error al enviar el formulario de adopción:", error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUpdatedFormData({ ...updatedFormData, [name]: value });
    };

    return (
        <div className="modal fade" id={`adopcion${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content bg-dark text-warning">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">
                            Adoption Form - ID {id}
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                        <div className="mb-3">
                            <label  style={{ marginLeft: '5px' }} htmlFor="familyMembers">Cantidad de miembros de la familia:</label>
                            <input style={{ marginLeft: '15px', width:"50px" }} type="number" id="familyMembers" name="familyMembers" value={updatedFormData.familyMembers} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label>¿Están todos de acuerdo con la adopción?</label>
                            <select style={{ marginLeft: '15px', width:"50px" }} id="allAgree" name="allAgree" value={updatedFormData.allAgree} onChange={handleChange}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>
                            </div>
                            <div className="mb-3">
                            <label>¿Tienen patio, terraza o balcón?</label>
                            <select style={{ marginLeft: '15px', width:"50px" }} id="hasOutdoorSpace" name="hasOutdoorSpace" value={updatedFormData.hasOutdoorSpace} onChange={handleChange}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>
                            </div>
                            <div className="mb-3">
                            <label>¿Estás dispuesto/a a asumir esta responsabilidad?</label>
                            <select style={{ marginLeft: '15px', width:"50px" }} id="assumesResponsibility" name="assumesResponsibility" value={updatedFormData.assumesResponsibility} onChange={handleChange}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>
                            </div>
                            <div className="mb-3">
                            <label>¿En el hogar hay niños?</label>
                            <select style={{ marginLeft: '15px', width:"50px" }} id="hasKids" name="hasKids" value={updatedFormData.hasKids} onChange={handleChange}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>
                            </div>
                            <div className="mb-3"></div>
                            <label>¿En el hogar hay alguien alérgico?</label>
                            <select style={{ marginLeft: '15px', width:"50px" }} id="familyHasAllergies" name="familyHasAllergies" value={updatedFormData.familyHasAllergies} onChange={handleChange}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>
                            </div>
                            <div className="mb-3">
                            <label style={{ marginLeft: '15px' }}>¿Tiene actualmente un empleo?</label>
                            <select style={{ marginLeft: '15px', width:"50px" }} id="hasJob" name="hasJob" value={updatedFormData.hasJob} onChange={handleChange}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>
                            </div>
                            <div className="mb-3">
                            <label style={{ marginLeft: '15px' }}>¿Cuantas horas al día trabaja?</label>
                            <input style={{ marginLeft: '15px', width:"50px" }} type="number" id="howManyHours" name="howManyHours" value={updatedFormData.howManyHours} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                            <label style={{ marginLeft: '15px' }}>¿Tiene otras mascotas?</label>
                            <select style={{ marginLeft: '15px', width:"50px" }} id="hasOtherAnimals" name="hasOtherAnimals" value={updatedFormData.hasOtherAnimals} onChange={handleChange}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>
                            </div>
                            <div className="mb-3">
                            <label style={{ marginLeft: '15px' }}>¿Estarías dispuesto/a a que organicemos una entrevista en su hogar?</label>
                            <select style={{ marginLeft: '15px', width:"50px" }} id="homeVisit" name="homeVisit" value={updatedFormData.homeVisit} onChange={handleChange}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>
                            </div>
                            <div className="mb-3">
                            <label htmlFor="comment" style={{ marginLeft: '20px', marginBottom: "10px" }}>Déjanos un breve comentario sobre por qué crees que serías la persona ideal para adoptar a este peludito</label>
                            <textarea
                                id="comment"
                                name="comment"
                                value={updatedFormData.comment}
                                onChange={handleChange}
                                className="form-control m-2"
                                style={{width: "770px"}}
                                rows="4"
                                placeholder="Ingresa tu comentario aquí">
                            </textarea>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Cerrar
                            </button>
                            <button type="button" className="btn btn-success fw-bold" data-bs-dismiss="modal" onClick={handleSubmit}>Guardar cambios</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}