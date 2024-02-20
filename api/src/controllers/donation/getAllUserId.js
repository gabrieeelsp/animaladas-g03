const { Op } = require('sequelize');
const { Donation } = require('../../db');

module.exports = async (id) => {
    try {
        const totalAmountDonated = await Donation.sum('amount', {
            where: {
                userId: id,
            },
        });
        return totalAmountDonated;
    } catch (error) {
        throw new Error('Error al obtener el total de donaciones del usuario');
    }
};
