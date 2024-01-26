const { Animal } = require('../../db');

// se sebe enviar un objeto conteniendo el id y los atributos que se quieren actualizar
module.exports = async (id, values) => {
    if (typeof id !== 'number') throw new Error('El id debe ser un numero');

    let item = await Animal.findByPk(id);
    if (!item) throw new Error('No se encontro una instancia con el id');

    try {
        await item.update(values);
    } catch (error) {
        throw new Error({ message: error.message });
    }

    item = await Animal.findByPk(id);

    return item;
};
