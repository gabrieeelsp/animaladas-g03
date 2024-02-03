const { Router } = require('express');

const {
    createHandler,
    getByIdHandler,
    getAllHandler,
    accept,
    refuse,
} = require('../handlers/adoptionHandler');

const adoptionRouter = Router();

adoptionRouter.post('/', createHandler);
adoptionRouter.get('/:id', getByIdHandler);
adoptionRouter.get('/', getAllHandler);
adoptionRouter.post('/:id/accept', accept);
adoptionRouter.post('/:id/refuse', refuse);

module.exports = adoptionRouter;
