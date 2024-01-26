const { Animal } = require('../../db');

// este metodo recibe un id en formato Number
module.exports = async (id) => {
    const item = await Animal.findByPk(id);

    if (!item) throw new Error('No se encontro una instancia con el id');

    return item;
};
