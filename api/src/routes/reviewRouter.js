const { Router } = require('express');
const {
    createReviewHandler,
    updateReviewHandler,
    getAllReviewsHandler
} = require('../handlers/reviewHandler');


const reviewRouter = Router();

reviewRouter.post('/createReviews', createReviewHandler);
reviewRouter.put('/putReviews/:id', updateReviewHandler);
reviewRouter.get('/allReviews', getAllReviewsHandler);


module.exports = reviewRouter;