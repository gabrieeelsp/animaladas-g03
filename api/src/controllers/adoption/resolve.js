const { Op } = require('sequelize');
const { Adoption, Animal } = require('../../db');

module.exports = async (adoptionId, result) => {
    const item = await Adoption.findByPk(adoptionId);

    if (!item) throw new Error('No se encontro una instancia con el id.');

    if (item.status !== 'pendiente')
        throw new Error('La adopción ya fue resuelta.');

    item.status = result;
    item.resolveDate = new Date();

    if (result === 'aceptada') {
        const animal = await Animal.findByPk(item.animalId);
        animal.status = 'adoptado';
        animal.save();
        await Adoption.update(
            { status: 'rechazada' },
            {
                where: {
                    animalId: item.animalId,
                    id: { [Op.ne]: item.id },
                    status: 'pendiente',
                },
            },
        );
    }

    item.save();

    return item;
};
