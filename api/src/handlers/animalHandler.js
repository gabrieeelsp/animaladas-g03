/* eslint-disable consistent-return */
const getAllAnimals = require('../controllers/animal/getAll');
const createAnimal = require('../controllers/animal/create');
const getOneById = require('../controllers/animal/getOneById');
const {
    validateName,
    validateImage,
    validateSpecies,
    validateStatus,
    validateSize,
    validateWeight,
    validateGender,
} = require('../utils/validations');

const getAllHandler = async (req, res) => {
    try {
        const filters = req.query;
        const limit = parseInt(filters.limit, 10) || null;
        const page = parseInt(filters.page, 10) || 1;

        const result = await getAllAnimals(filters, limit, page);

        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
        // res.status(500).json({ error: 'Error al obtener animales' });
    }
};
const getByIdHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const animal = await getOneById(id);
        res.json(animal);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const createHandler = async (req, res) => {
    const {
        name,
        gender,
        image1,
        image2,
        image3,
        image4,
        species,
        status,
        size,
        weight,
        vaccines,
        estimatedBirthYear,
        castrated,
        disabilityIllness,
    } = req.body;

    console.log(req);
    const nameError = validateName(name);
    const imageError =
        validateImage(image1) ||
        validateImage(image2) ||
        validateImage(image3) ||
        validateImage(image4);
    const speciesError = validateSpecies(species);
    const statusError = validateStatus(status);
    const sizeError = validateSize(size);
    const weightError = validateWeight(weight);
    const genderError = validateGender(gender);

    if (
        nameError ||
        imageError ||
        speciesError ||
        statusError ||
        sizeError ||
        weightError
    ) {
        return res.status(400).json({
            name: nameError,
            image: imageError,
            species: speciesError,
            status: statusError,
            size: sizeError,
            weight: weightError,
            gender: genderError,
        });
    }

    try {
        const createdAnimal = await createAnimal(
            name,
            gender,
            image1,
            image2,
            image3,
            image4,
            species,
            status,
            size,
            weight,
            vaccines,
            estimatedBirthYear,
            castrated,
            disabilityIllness,
        );
        res.status(200).json(createdAnimal);
    } catch (error) {
        res.status(500).json('Error al crear animal');
    }
};

module.exports = {
    getAllHandler,
    createHandler,
    getByIdHandler,
};
