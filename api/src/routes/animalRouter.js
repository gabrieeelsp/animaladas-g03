const { Router } = require('express');
const {
    getAllHandler,
    createHandler,
    getByIdHandler,
    putEnabledsAnimals,
    updateAnimalHandler,
} = require('../handlers/animalHandler');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

const animalRouter = Router();

animalRouter.get('/getAnimals', getAllHandler);
animalRouter.post(
    '/createAnimals',
    authMiddleware,
    adminMiddleware,
    createHandler,
);
animalRouter.get('/animals:id', getByIdHandler);
animalRouter.put(
    '/update/:id',
    authMiddleware,
    adminMiddleware,
    updateAnimalHandler,
);
animalRouter.put(
    '/enable/:id',
    authMiddleware,
    adminMiddleware,
    putEnabledsAnimals,
);
module.exports = animalRouter;
