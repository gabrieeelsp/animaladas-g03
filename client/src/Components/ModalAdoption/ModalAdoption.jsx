
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { allAdoptions, clearAll, acceptAdoption, refuseAdoption } from "../../redux/actions/actions";



export default function ModalAdoption({selectedForm}) {

if(!selectedForm){ return null;}

    const [updatedFormData, setUpdatedFormData] = useState(selectedForm || {
        familyMembers: 0,
        allAgree: "",
        hasOutdoorSpace: "",
        assumesResponsibility: "",
        hasKids: "",
        familyHasAllergies: "",
        hasJob: "",
        howManyHours: 0,
        hasOtherAnimals: "",
        homeVisit: "",
        comment: "",
      });

    useEffect(() => {
        setUpdatedFormData(selectedForm);
      }, [selectedForm]);

    const {id,familyMembers,allAgree,hasOutdoorSpace,assumesResponsibility,hasKids,familyHasAllergies,hasJob,howManyHours,hasOtherAnimals,homeVisit,comment}= selectedForm




    return (
        <div className="modal fade" id={`adoption${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                    <form>
                        <div className="modal-body">
                            <label>Cantidad de miembros de la familia:</label>
                            <input type="number" id="familyMembers" name="familyMembers" value={updatedFormData.familyMembers} onChange={(e) => setUpdatedFormData({ ...updatedFormData, familyMembers: e.target.value })} />

                            <label>¿Están todos de acuerdo con la adopción?</label>
                            <select id="allAgree" name="allAgree" value={updatedFormData.allAgree} onChange={(e) => setUpdatedFormData({ ...updatedFormData, allAgree: e.target.value })}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>

                            <label>¿Tienen patio, terraza o balcón?</label>
                            <select id="allAgree" name="allAgree" value={updatedFormData.hasOutdoorSpace} onChange={(e) => setUpdatedFormData({ ...updatedFormData, hasOutdoorSpace: e.target.value })}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>

                            <label>¿Estas dispuesto/a a asumir esta responsabilidad?</label>
                            <select id="allAgree" name="allAgree" value={updatedFormData.assumesResponsibility} onChange={(e) => setUpdatedFormData({ ...updatedFormData, assumesResponsibility: e.target.value })}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>

                            <label>¿En el hogar hay niños?</label>
                            <select id="hasKids" name="hasKids" value={updatedFormData.hasKids} onChange={(e) => setUpdatedFormData({ ...updatedFormData, hasKids: e.target.value })}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>

                            <label>¿En el hogar hay alguien alérgico?</label>
                            <select id="familyHasAllergies" name="familyHasAllergies" value={updatedFormData.familyHasAllergies} onChange={(e) => setUpdatedFormData({ ...updatedFormData, familyHasAllergies: e.target.value })}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>

                            <label>¿Tiene actualmente un empleo?</label>
                            <select id="hasJob" name="hasJob" value={updatedFormData.hasJob} onChange={(e) => setUpdatedFormData({ ...updatedFormData, hasJob: e.target.value })}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>

                            <label>¿Cuantas horas al día trabaja?</label>
                            <input type="howManyHours" id="howManyHours" name="howManyHours" value={updatedFormData.howManyHours} onChange={(e) => setUpdatedFormData({ ...updatedFormData, howManyHours: e.target.value })} />

                            <label>¿Tiene otras mascotas?</label>
                            <select id="hasOtherAnimals" name="hasOtherAnimals" value={updatedFormData.hasOtherAnimals} onChange={(e) => setUpdatedFormData({ ...updatedFormData, hasOtherAnimals: e.target.value })}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>

                            <label>¿Estarias dispuesto/a a que organicemos una entrevista en su hogar?</label>
                            <select id="homeVisit" name="homeVisit" value={updatedFormData.homeVisit} onChange={(e) => setUpdatedFormData({ ...updatedFormData, homeVisit: e.target.value })}>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>

                            <label htmlFor="comment">Déjanos un breve comentario sobre por qué crees que serías la persona ideal para adoptar a este peludito</label>
                            <textarea
                                id="comment"
                                name="comment"
                                value={updatedFormData.comment}
                                onChange={(e) => setUpdatedFormData({ ...formData, comment: e.target.value })}
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
                            <button
                                type="submit"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}