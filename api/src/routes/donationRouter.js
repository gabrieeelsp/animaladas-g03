const { Router } = require('express');

const {
    createHandler,
    getByIdHandler,
    getAllHandler,
} = require('../handlers/donationHandler');

const donationRouter = Router();

donationRouter.post('/', createHandler);
donationRouter.get('/:id', getByIdHandler);
donationRouter.get('/', getAllHandler);

module.exports = donationRouter;
