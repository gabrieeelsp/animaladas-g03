const { Router } = require('express');

const {
    createHandler,
    getByIdHandler,
    getAllHandler,
    getTotalByUserId,
} = require('../handlers/donationHandler');
const authMiddleware = require('../middlewares/authMiddleware');

const donationRouter = Router();

donationRouter.post('/', authMiddleware, createHandler);
donationRouter.get('/:id', authMiddleware, getByIdHandler);
donationRouter.get('/', getAllHandler, authMiddleware);
donationRouter.get('/total/:id', getTotalByUserId, authMiddleware);
donationRouter.get('/', authMiddleware, getAllHandler);

module.exports = donationRouter;
