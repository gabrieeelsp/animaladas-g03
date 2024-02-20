const { Router } = require('express');

const {
    createHandler,
    getByIdHandler,
    getAllHandler,
    accept,
    refuse,
    getPendingAdoptionHandler,
    getTotalByUserId,
} = require('../handlers/adoptionHandler');

const adoptionRouter = Router();

adoptionRouter.post('/', createHandler);
adoptionRouter.get('/get_pending_adoption', getPendingAdoptionHandler);
adoptionRouter.get('/:id', getByIdHandler);
adoptionRouter.get('/', getAllHandler);
adoptionRouter.get('/total/:id', getTotalByUserId);
adoptionRouter.post('/:id/accept', accept);
adoptionRouter.post('/:id/refuse', refuse);

module.exports = adoptionRouter;
