const { Review } = require('../../db');

const createReview = async (score, comment, userId) => {
    const newReview = await Review.create({
        score, // Score de la revisión
        comment, // Comentario de la revisión
        userId: userId, // Asocia la revisión con el usuario que la creó
    });
    return newReview;
};

module.exports = createReview;
