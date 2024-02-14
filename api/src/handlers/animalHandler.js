/* eslint-disable consistent-return */
const getAllAnimals = require('../controllers/animal/getAll');
const createAnimal = require('../controllers/animal/create');
const getOneById = require('../controllers/animal/getOneById');
const updateAnimalController = require('../controllers/animal/update');
const putIsEnabledAnimal = require('../controllers/animal/putIsEnabledAnimal');
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
    console.log('valor del body', req);
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
        disability_illness,
        adoption_story,
        rescued_story,
    } = req.body;
    console.log('nombre: ', name);
    console.log('gender: ', gender);
    console.log('image1: ', image1);
    console.log('image2: ', image2);
    console.log('image3: ', image3);
    console.log('image4: ', image4);
    console.log('species: ', species);
    console.log('status: ', status);
    console.log('size: ', size);
    console.log('weight: ', weight);
    console.log('vaccines: ', vaccines);
    console.log('species: ', species);

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
    console.log('imprimimo errores:');
    console.log('valor de los errores', nameError);
    console.log('valor de los imageError', imageError);
    console.log('valor de los speciesError', speciesError);
    console.log('valor de los sizeError', sizeError);
    console.log('valor de los weightError', weightError);
    console.log('valor de los statusError', statusError);
    console.log('valor de los genderError', genderError);
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
    console.log('imprimimo errores:');
    console.log('valor de los errores', nameError);
    console.log('valor de los imageError', imageError);
    console.log('valor de los speciesError', speciesError);
    console.log('valor de los sizeError', sizeError);
    console.log('valor de los weightError', weightError);
    console.log('valor de los statusError', statusError);
    console.log('valor de los genderError', genderError);
    try {
        /*
        console.log('valor de name', name);
        console.log('valor de gender', gender);
        console.log('valor de image1', image1);
        console.log('valor de image2', image2);
        console.log('valor de image3', image3);
        console.log('valor de image4', image4);
        console.log('valor de species', species);
        console.log('valor de status', status);
        console.log('valor de size', size);
        console.log('valor de weight', weight);
        console.log('valor de vaccines', vaccines);
        console.log('valor de estimatedBirthYear', estimatedBirthYear);
        console.log('valor de castrated', castrated);
        console.log('valor de disability_illness', disability_illness);
        console.log('valor de adoption_story', adoption_story);
        console.log('valor de rescued_story', rescued_story);
        */
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
            disability_illness,
            adoption_story,
            rescued_story,
        );
        res.status(200).json(createdAnimal);
    } catch (error) {
        res.status(500).json('Error al crear animal');
    }
};

const putEnabledsAnimals = async (req, res) => {
    const { id } = req.params;
    try {
        const logicDeletion = await putIsEnabledAnimal(id);
        res.json(logicDeletion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateAnimalHandler = async (req, res) => {
    const { id } = req.params;
    const updateValues = req.body;

    try {
        const updatedAnimal = await updateAnimalController(id, updateValues);

        res.status(200).json(updatedAnimal);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllHandler,
    createHandler,
    getByIdHandler,
    putEnabledsAnimals,
    updateAnimalHandler,
};
