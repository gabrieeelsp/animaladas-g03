const { Router } = require('express');
const {
    createReviewHandler,
    updateReviewHandler,
    getAllReviewsHandler,
    acceptHandler,
    refuseHandler,
} = require('../handlers/reviewHandler');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

const reviewRouter = Router();

reviewRouter.post('/createReviews', authMiddleware, createReviewHandler);
reviewRouter.put('/putReviews/:id', authMiddleware, updateReviewHandler);
reviewRouter.get('/allReviews', getAllReviewsHandler);

reviewRouter.post(
    '/:id/accept',
    authMiddleware,
    adminMiddleware,
    acceptHandler,
);
reviewRouter.post(
    '/:id/refuse',
    authMiddleware,
    adminMiddleware,
    refuseHandler,
);

module.exports = reviewRouter;
