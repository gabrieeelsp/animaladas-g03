/* eslint-disable consistent-return */
const create = require('../controllers/donation/create');
const getOneById = require('../controllers/donation/findOneById');
const getAll = require('../controllers/donation/getAll');
const getTotalUserIdDonation = require('../controllers/donation/getAllUserId');

const {
    validateUserId,
    validateAnimalId,
    validateAmount,
} = require('../utils/validations');

const getAllHandler = async (req, res) => {
    try {
        const filters = req.query;
        console.log('valor de filters', filters);
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
    const { userId, amount, animalId } = req.body;
    const userError = await validateUserId(userId);
    const animalError = animalId ? await validateAnimalId(animalId) : null;
    const amountError = validateAmount(amount);

    if (userError || animalError || amountError) {
        return res.status(400).json({
            userId: userError,
            amount: amountError,
            animalId: animalError,
        });
    }
    try {
        const item = await create(userId, amount, animalId);
        return res.status(200).json(item);
    } catch (error) {
        // res.status(500).json('Error al crear Donación');
        res.status(500).json(error.message);
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

const getTotalByUserId = async (req, res) => {
    const { id } = req.params;
    try {
        const total = await getTotalUserIdDonation(id);
        return res.status(200).json(total);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = {
    getAllHandler,
    createHandler,
    getByIdHandler,
    getTotalByUserId,
};
