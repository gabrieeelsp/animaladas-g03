const { Router } = require('express');
const {
    createReviewHandler,
    updateReviewHandler,
    getAllReviewsHandler,
    acceptHandler,
    refuseHandler,
} = require('../handlers/reviewHandler');
const authMiddleware = require('../middlewares/authMiddleware');

const reviewRouter = Router();

reviewRouter.post('/createReviews', authMiddleware, createReviewHandler);
reviewRouter.put('/putReviews/:id', authMiddleware, updateReviewHandler);
reviewRouter.get('/allReviews', getAllReviewsHandler);

reviewRouter.post('/:id/accept', acceptHandler);
reviewRouter.post('/:id/refuse', refuseHandler);

module.exports = reviewRouter;
