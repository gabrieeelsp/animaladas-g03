const { Review } = require('../../db');

module.exports = async (reviewId, result) => {
    const item = await Review.findByPk(reviewId);

    if (!item) throw new Error('No se encontro una instancia con el id.');

    item.isReviewed = result;

    item.save();

    return item;
};
