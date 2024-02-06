const { Router } = require('express');
const {
    getAllHandler,
    createHandler,
    getByIdHandler,
    putEnabledsAnimals,
} = require('../handlers/animalHandler');

const animalRouter = Router();

animalRouter.get('/getAnimals', getAllHandler);
animalRouter.post('/createAnimals', createHandler);
animalRouter.get('/animals:id', getByIdHandler);
animalRouter.put('/animal/:id', putEnabledsAnimals);

module.exports = animalRouter;
