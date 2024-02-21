/* eslint-disable consistent-return */
const create = require('../controllers/adoption/create');
const getOneById = require('../controllers/adoption/findOneById');
const findPendingAdoption = require('../controllers/adoption/findPendingAdoption');
const getAll = require('../controllers/adoption/getAll');
const resolve = require('../controllers/adoption/resolve');
const getTotalUserIdAdoption = require('../controllers/adoption/getAllUserId');

const {
    validateUserId,
    validateAnimalId,
    validateAdoption,
    validateAdoptionPending,
} = require('../utils/validations');

const getAllHandler = async (req, res) => {
    try {
        const filters = req.query;
        const limit = parseInt(filters.limit, 10) || null;
        const page = parseInt(filters.page, 10) || 1;

        const result = await getAll(filters, limit, page);

        return res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
        // res.status(500).json({ error: 'Error al obtener animales' });
    }
};

const createHandler = async (req, res) => {
    const {
        userId,
        animalId,
        description,
        familyIntegrants,
        allFamilyAgree,
        yardTerraceBalcony,
        takeResponsibility,
    } = req.body;
    const userError = await validateUserId(userId);
    const animalError = await validateAnimalId(animalId);
    const adoptionError = await validateAdoptionPending(userId, animalId);

    if (userError || animalError || adoptionError) {
        return res.status(400).json({
            userId: userError,
            animalId: animalError,
            adoption: adoptionError,
        });
    }
    try {
        const item = await create(
            userId,
            animalId,
            description,
            familyIntegrants,
            allFamilyAgree,
            yardTerraceBalcony,
            takeResponsibility,
        );
        return res.status(200).json(item);
    } catch (error) {
        // res.status(500).json('Error al crear Donación');
        res.status(500).json({ error: error.message });
    }
};

const getByIdHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const item = await getOneById(id);
        return res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getPendingAdoptionHandler = async (req, res) => {
    const { userId, animalId } = req.query;

    try {
        const item = await findPendingAdoption(userId, animalId);
        if (!item)
            return res
                .status(404)
                .json({ error: 'No se encontro una instancia con el id' });
        return res.status(200).json(item);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

const accept = async (req, res) => {
    const { id } = req.params;

    const adoptionError = await validateAdoption(id);

    if (adoptionError) {
        return res.status(400).json({
            adoption: adoptionError,
        });
    }

    try {
        const item = await resolve(id, 'aceptada');
        return res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const refuse = async (req, res) => {
    const { id } = req.params;

    const adoptionError = await validateAdoption(id);

    if (adoptionError) {
        return res.status(400).json({
            adoption: adoptionError,
        });
    }

    try {
        const item = await resolve(id, 'rechazada');
        return res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getTotalByUserId = async (req, res) => {
    const { id } = req.params;
    const { limit, page } = req.query;

    try {
        const result = await getTotalUserIdAdoption(id, limit, page);
        return res.status(200).json(result);
    } catch (error) {
        return res
            .status(500)
            .json({ error: 'Error al obtener las adopciones del usuario' });
    }
};

module.exports = {
    getAllHandler,
    createHandler,
    getByIdHandler,
    accept,
    refuse,
    getPendingAdoptionHandler,
    getTotalByUserId,
};
