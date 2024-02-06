import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { clearAll, animalById, createForm } from "../../redux/actions/actions";
import Loader from "../../Components/Loader/Loader";

export default function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const animal = useSelector((state) => state.animalById);
    const loggedInUser = useSelector((state) => state.user);

    const [formData, setFormData] = useState({

        familyMembers: 1,
        allAgree: 'si',
        hasOutdoorSpace: 'si',
        assumesResponsibility: 'si',

    });

    const handleFormSubmit = async (e) => {
        e.preventDefault();


        const adoptionFormData = {
            userId: loggedInUser.id,
            animalId: animal.id,
            familyMembers: formData.familyMembers,
            allAgree: formData.allAgree,
            hasOutdoorSpace: formData.hasOutdoorSpace,
            assumesResponsibility: formData.assumesResponsibility,
        };
        dispatch(createForm(adoptionFormData));


    };


    useEffect(() => {
        const getAnimalDetail = async () => {
            dispatch(clearAll());
            await dispatch(animalById(id));
            setLoading(false);
        };
        getAnimalDetail();
    }, [dispatch, id]);

    const calculateAge = (estimatedBirthYear) => {
        if (!estimatedBirthYear) {
            return "Edad desconocida";
        }

        const currentYear = new Date().getFullYear();
        const age = currentYear - estimatedBirthYear;

        return `${age} años`;
    };



    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div className="container d-flex align-items-center justify-content-center my-5">
                    <div className="row bg-dark p-4 align-items-center justify-content-center" style={{ width: "1000px", borderRadius: "50px" }}>
                        <div className="col">
                            <img src={animal.image2 ? animal.image2 : "https://i.pinimg.com/originals/48/cf/7f/48cf7fff6428fe2b9665c4f6f6d20975.jpg"} className="card-img p-3" alt={animal.image2} style={{ borderRadius: "500px", width: "450px", height: "450px", objectFit: "cover" }} />
                        </div>
                        <div className="col">
                            <div className="row bg-dark p-4 text-warning" style={{ width: "auto", borderRadius: "30px", textAlign: "left" }}>
                                <div className="container bg-warning" style={{marginBottom: "30px", borderRadius: "20px", width: "auto" }}> <h1 className="card-title" style={{ textAlign: "center", alignContent: "center", padding: "5px", color: "#212529" }}>{animal.name}</h1></div>
                                <h4 className="card-text text-left">Sexo: {animal.gender}</h4>
                                <h4 className="card-text text-left">Especie: {animal.species}</h4>
                                <h4 className="card-text text-left">Edad (estimada): {calculateAge(animal.estimatedBirthYear)}</h4>
                                <h4 className="card-text text-left">Tamaño: {animal.size}</h4>
                                <h4 className="card-text text-left">Peso: {animal.weight} kg</h4>
                                <h4 className="card-text text-left">Vacunado/a: {animal.vaccines ? "si" : "no"}</h4>
                                <h4 className="card-text text-left">Castrado/a: {animal.castrated ? "si" : "no"}</h4>
                                <h4 className="card-text text-left">Discapacidad: {animal.disability_illness ? "si" : "no"}</h4>
                                <h4 className="card-text text-left">Historia de rescate: {animal.rescued_story}</h4>

                            </div>
                            <Link to="#" className="btn btn-warning btn-block text-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Adoptar</Link>
                        </div>


                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Adoption Form</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <label htmlFor="familyMembers">Cuantos integrantes por familia:</label>
                                        <input
                                            type="number"
                                            id="familyMembers"
                                            name="familyMembers"
                                            value={formData.familyMembers}
                                            onChange={(e) => setFormData({ ...formData, familyMembers: parseInt(e.target.value, 10) })}
                                        />

                                        <label htmlFor="allAgree">Todos están de acuerdo:</label>
                                        <select
                                            id="allAgree"
                                            name="allAgree"
                                            value={formData.allAgree}
                                            onChange={(e) => setFormData({ ...formData, allAgree: e.target.value })}
                                        >
                                            <option value="si">Si</option>
                                            <option value="no">No</option>
                                        </select>

                                        <label htmlFor="hasOutdoorSpace">Tienes patio/balcón/terraza:</label>
                                        <select
                                            id="hasOutdoorSpace"
                                            name="hasOutdoorSpace"
                                            value={formData.hasOutdoorSpace}
                                            onChange={(e) => setFormData({ ...formData, hasOutdoorSpace: e.target.value })}
                                        >
                                            <option value="si">Si</option>
                                            <option value="no">No</option>
                                        </select>

                                        <label htmlFor="assumesResponsibility">Está dispuesto a asumir la responsabilidad:</label>
                                        <select
                                            id="assumesResponsibility"
                                            name="assumesResponsibility"
                                            value={formData.assumesResponsibility}
                                            onChange={(e) => setFormData({ ...formData, assumesResponsibility: e.target.value })}
                                        >
                                            <option value="si">Si</option>
                                            <option value="no">No</option>
                                        </select>

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Understood</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}



