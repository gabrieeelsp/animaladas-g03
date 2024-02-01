const { Donation, User, Animal } = require('../../db');

module.exports = async (id) => {
    const item = await Donation.findByPk(id, {
        include: [{ model: User }, { model: Animal }],
    });

    if (!item) throw new Error('No se encontro una instancia con el id');

    return item;
};
