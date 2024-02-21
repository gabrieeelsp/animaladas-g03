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
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

const adoptionRouter = Router();

adoptionRouter.post('/', createHandler);
adoptionRouter.get('/get_pending_adoption', getPendingAdoptionHandler);
adoptionRouter.get('/:id', getByIdHandler);
adoptionRouter.get('/', getAllHandler);
adoptionRouter.get('/total/:id', getTotalByUserId);
adoptionRouter.post('/:id/accept', accept);
adoptionRouter.post('/:id/refuse', refuse);
adoptionRouter.post('/', authMiddleware, createHandler);
adoptionRouter.get(
    '/get_pending_adoption',
    authMiddleware,
    getPendingAdoptionHandler,
);
adoptionRouter.get('/:id', authMiddleware, getByIdHandler);
adoptionRouter.get('/', authMiddleware, getAllHandler);
adoptionRouter.post('/:id/accept', authMiddleware, adminMiddleware, accept);
adoptionRouter.post('/:id/refuse', authMiddleware, adminMiddleware, refuse);

module.exports = adoptionRouter;
