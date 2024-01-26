const { Router } = require('express');
const { getAllHandler, createHandler } = require('../handlers/animalHandler');

// const getCatByIdHandler = require("../handlers/getCatByIdHandler");
// const getDogByIdHandler = require("../handlers/getDogByIdHandler");

const animalRouter = Router();

animalRouter.get('/animals', getAllHandler);
animalRouter.post('/animals', createHandler);
// animalRouter.post('/dogs:id', getDogByIdHandler);
// animalRouter.post('/cats:id', getCatByIdHandler);

module.exports = animalRouter;
