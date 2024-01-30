const { Router } = require('express');
const {
    getAllHandler,
    createHandler,
    getByIdHandler,
} = require('../handlers/animalHandler');

const animalRouter = Router();

animalRouter.get('/getAnimals', getAllHandler);
animalRouter.post('/createAnimals', createHandler);
animalRouter.get('/animals:id', getByIdHandler);

module.exports = animalRouter;
