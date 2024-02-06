const { Animal } = require('../../db');

// este metodo recibe un id en formato Number
module.exports = async (id) => {
    const animal = await Animal.findByPk(id);
    if (!animal) throw new Error(`No se encontro un animal ${id}`);

    animal.enabled = !animal.enabled;
    await animal.save();

    return animal;
};
