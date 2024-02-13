const { Review } = require('../../db');

const getAllReviews = () => {
    return Review.findAll();
};

module.exports = getAllReviews;