const { Adoption } = require('../../db');

module.exports = async (userId, animalId) => {
    const items = await Adoption.findAll({
        where: {
            userId,
            animalId,
            status: 'pendiente',
        },
    });

    if (items.lenght === 0)
        throw new Error('No se encontro una instancia con el id');

    return items[0];
};
