const { Router } = require('express');

const {
    createHandler,
    getByIdHandler,
    getAllHandler,
} = require('../handlers/donationHandler');
const authMiddleware = require('../middlewares/authMiddleware');

const donationRouter = Router();

donationRouter.post('/', authMiddleware, createHandler);
donationRouter.get('/:id', authMiddleware, getByIdHandler);
donationRouter.get('/', authMiddleware, getAllHandler);

module.exports = donationRouter;
