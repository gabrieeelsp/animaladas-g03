const { Router } = require('express');

const { genderList, speciesList, sizeList, statusList } = require('../utils');

const initRouter = Router();

initRouter.get('/', (req, res) => {
    const values = {
        gender: genderList,
        species: speciesList,
        size: sizeList,
        status: statusList,
    };

    return res.status(200).json(values);
});

module.exports = initRouter;
