const { Donation } = require('../../db');

module.exports = async (id) => {
    const item = await Donation.findByPk(id, {
        include: ['user', 'animal'],
    });

    if (!item) throw new Error('No se encontro una instancia con el id');

    return item;
};
