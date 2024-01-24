const { Animal } = require('../../db');

module.exports = async () => {
    const items = await Animal.findAll();

    return items;
};
