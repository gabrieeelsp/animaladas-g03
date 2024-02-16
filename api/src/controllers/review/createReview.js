const { Review } = require('../../db');

const createReview = async (
    score,
    comment,
    userId,
    user_name,
    user_lastName,
    user_img,
) => {
    const newReview = await Review.create({
        score, // Score de la revisión
        comment, // Comentario de la revisión
        userId,
        user_name,
        user_lastName,
        user_img,
        // Asocia la revisión con el usuario que la creó
    });
    return newReview;
};

module.exports = createReview;
