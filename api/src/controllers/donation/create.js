const { Donation, User, Animal } = require('../../db');

module.exports = async (userId, amount, animalId = null) => {
    console.log(userId, amount, animalId);
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
    console.log('donaitionId ', resp);
    const item = await Donation.findByPk(resp.id, {
        include: [{ model: User }, { model: Animal }],
    });
    return item;
};
