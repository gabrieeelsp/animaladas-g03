
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
                            Adoption Form
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
                            <label htmlFor="familyMembers">Cantidad de miembros de la familia:</label>
                            <input type="number" id="familyMembers" name="familyMembers" value={updatedFormData.familyMembers} onChange={handleChange} />

                            <label>¿Están todos de acuerdo con la adopción?</label>
                            <select id="allAgree" name="allAgree" value={updatedFormData.allAgree} onChange={handleChange}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>

                            <label>¿Tienen patio, terraza o balcón?</label>
                            <select id="hasOutdoorSpace" name="hasOutdoorSpace" value={updatedFormData.hasOutdoorSpace} onChange={handleChange}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>

                            <label>¿Estás dispuesto/a a asumir esta responsabilidad?</label>
                            <select id="assumesResponsibility" name="assumesResponsibility" value={updatedFormData.assumesResponsibility} onChange={handleChange}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>

                            <label>¿En el hogar hay niños?</label>
                            <select id="hasKids" name="hasKids" value={updatedFormData.hasKids} onChange={handleChange}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>

                            <label>¿En el hogar hay alguien alérgico?</label>
                            <select id="familyHasAllergies" name="familyHasAllergies" value={updatedFormData.familyHasAllergies} onChange={handleChange}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>

                            <label>¿Tiene actualmente un empleo?</label>
                            <select id="hasJob" name="hasJob" value={updatedFormData.hasJob} onChange={handleChange}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>

                            <label>¿Cuantas horas al día trabaja?</label>
                            <input type="number" id="howManyHours" name="howManyHours" value={updatedFormData.howManyHours} onChange={handleChange} />

                            <label>¿Tiene otras mascotas?</label>
                            <select id="hasOtherAnimals" name="hasOtherAnimals" value={updatedFormData.hasOtherAnimals} onChange={handleChange}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>

                            <label>¿Estarías dispuesto/a a que organicemos una entrevista en su hogar?</label>
                            <select id="homeVisit" name="homeVisit" value={updatedFormData.homeVisit} onChange={handleChange}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>

                            <label htmlFor="comment">Déjanos un breve comentario sobre por qué crees que serías la persona ideal para adoptar a este peludito</label>
                            <textarea
                                id="comment"
                                name="comment"
                                value={updatedFormData.comment}
                                onChange={handleChange}
                                className="form-control"
                                rows="4"
                                placeholder="Ingresa tu comentario aquí">
                            </textarea>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cerrar
                            </button>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}