const { Router } = require('express');

const {
    createHandler,
    getByIdHandler,
    getAllHandler,
    accept,
    refuse,
    getPendingAdoptionHandler,
} = require('../handlers/adoptionHandler');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

const adoptionRouter = Router();

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
