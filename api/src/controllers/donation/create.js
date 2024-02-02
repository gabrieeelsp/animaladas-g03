const { Donation } = require('../../db');

module.exports = async (userId, amount, animalId = null) => {
    let resp = null;
    try {
        resp = await Donation.create({
            userId,
            amount,
            animalId,
        });
    } catch (error) {
        // revisar error.name posibles
        throw new Error(error.message);
    }
    const item = await Donation.findByPk(resp.id, {
        include: ['user', 'animal'],
    });
    return item;
};
