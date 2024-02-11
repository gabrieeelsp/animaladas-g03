const { Review } = require('../../db');

const updateReview = async (id, score, comment) => {
    const reviewUpdate = await Review.findByPk(id);
    if (!reviewUpdate) {
        throw new Error('Revisión no encontrada');
    }
    reviewUpdate.score = score;
    reviewUpdate.comment = comment;

    await reviewUpdate.save();
    return reviewUpdate;
};

module.exports = updateReview;