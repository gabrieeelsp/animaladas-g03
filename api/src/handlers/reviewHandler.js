const createReview = require('../controllers/review/createReview');
const getAllReviews = require('../controllers/review/getAllReview');
const updateReview = require('../controllers/review/updateReview');
const resolve = require('../controllers/review/resolve');

const createReviewHandler = async (req, res) => {
    try {
        const { score, comment, userId, user_name, user_img, user_lastName } =
            req.body;
        console.log('valor de score en back', score);
        console.log('valor de comment en back', comment);
        console.log('valor de userid en back', userId);
        console.log('valor de name en back', user_name);
        console.log('valor de lastname en back', user_lastName);
        console.log('valor de img en back', user_img);

        const newReview = await createReview(
            score,
            comment,
            userId,
            user_name,
            user_lastName,
            user_img,
        );
        res.status(201).json(newReview);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error interno del servidor al crear la review',
        });
    }
};

const updateReviewHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { score, comment } = req.body;

        // Llama al controlador para actualizar la revisión
        const result = await updateReview(id, score, comment);

        // Verifica si se actualizó correctamente
        // Verifica si se actualizó correctamente
        res.status(200).json({
            message: 'Revisión actualizada correctamente',
            review: result,
        });
    } catch (error) {
        console.error('Error al actualizar la revisión:', error);
        res.status(500).json({
            message: 'Error interno del servidor al actualizar la revisión',
        });
    }
};

// Controlador para recuperar todas las revisiones
const getAllReviewsHandler = async (req, res) => {
    try {
        const filters = req.query;
        const limit = parseInt(filters.limit, 10) || null;
        const page = parseInt(filters.page, 10) || 1;

        const reviews = await getAllReviews(filters, limit, page);
        res.status(200).json(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error interno del servidor al recuperar las reviews',
        });
    }
};

const acceptHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const item = await resolve(id, 'aprobado');
        return res.status(200).json(item);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

const refuseHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const item = await resolve(id, 'rechazado');
        return res.status(200).json(item);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = {
    createReviewHandler,
    updateReviewHandler,
    getAllReviewsHandler,
    acceptHandler,
    refuseHandler,
};
