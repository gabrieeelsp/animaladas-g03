const { Router } = require('express');

const {
    createHandler,
    getByIdHandler,
    getAllHandler,
} = require('../handlers/donationHandler');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

const donationRouter = Router();

donationRouter.post('/', authMiddleware, createHandler);
donationRouter.get('/:id', authMiddleware, getByIdHandler);
donationRouter.get('/', authMiddleware, adminMiddleware, getAllHandler);

module.exports = donationRouter;
