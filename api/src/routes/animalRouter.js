const { Router } = require('express');
const {
    getAllHandler,
    createHandler,
    getByIdHandler,
    putEnabledsAnimals,
    updateAnimalHandler,
} = require('../handlers/animalHandler');

const animalRouter = Router();

animalRouter.get('/getAnimals', getAllHandler);
animalRouter.post('/createAnimals', createHandler);
animalRouter.get('/animals:id', getByIdHandler);
animalRouter.put('/update/:id', updateAnimalHandler);
animalRouter.put('/enable/:id', putEnabledsAnimals);

module.exports = animalRouter;
