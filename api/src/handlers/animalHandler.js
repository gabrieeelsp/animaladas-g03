const getAllAnimals = require('../controllers/animal/getAll');
const createAnimal = require('../controllers/animal/create');

const getAllHandler = async (req, res) => {
    try {
        const filters = req.query;
        const limit = parseInt(filters.limit, 4) || 6;
        const page = parseInt(filters.page, 2) || 1;

        const result = await getAllAnimals(filters, limit, page);

        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener animales' });
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
        res.status(500).json('error al crear animal');
    }
};

module.exports = {
    getAllHandler,
    createHandler,
};
