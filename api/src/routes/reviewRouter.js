const { Router } = require('express');
const {
    createReviewHandler,
    updateReviewHandler,
    getAllReviewsHandler,
} = require('../handlers/reviewHandler');
const authMiddleware = require('../middlewares/authMiddleware');

const reviewRouter = Router();

reviewRouter.post('/createReviews', authMiddleware, createReviewHandler);
reviewRouter.put('/putReviews/:id', authMiddleware, updateReviewHandler);
reviewRouter.get('/allReviews', getAllReviewsHandler);

module.exports = reviewRouter;
