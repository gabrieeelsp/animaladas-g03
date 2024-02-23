const { Router } = require('express');

const {
    createHandler,
    getByIdHandler,
    getAllHandler,
    accept,
    refuse,
    getPendingAdoptionHandler,
    getTotalByUserId,
    updateHandler,
} = require('../handlers/adoptionHandler');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

const adoptionRouter = Router();

adoptionRouter.post('/', createHandler);
adoptionRouter.get(
    '/get_pending_adoption',
    authMiddleware,
    getPendingAdoptionHandler,
);
adoptionRouter.get('/:id', getByIdHandler);
adoptionRouter.get('/', getAllHandler);
adoptionRouter.get('/total/:id', authMiddleware, getTotalByUserId);
adoptionRouter.post('/:id/accept', authMiddleware, adminMiddleware, accept);
adoptionRouter.post('/:id/refuse', authMiddleware, adminMiddleware, refuse);
adoptionRouter.post('/', authMiddleware, createHandler);
adoptionRouter.put('/:id', updateHandler);

module.exports = adoptionRouter;
