const { Adoption } = require('../../db');

const items = [];

for (let i = 0; i < 3000; i += 1) {
    const createdAt = new Date(new Date() - Math.random() * 1e12);
    let resolveDate = new Date(createdAt.getTime());
    resolveDate = new Date(
        resolveDate.setDate(
            // createdAt.getDate() + Math.floor(Math.random() * 20) + 1,
            createdAt.getDate() + Math.floor(Math.random() * 20) + 1,
        ),
    );
    items.push({
        userId: Math.ceil(Math.random() * (5 - 0) + 0),
        animalId: Math.ceil(Math.random() * (37 - 0) + 0),
        status: 'aceptada',
        createdAt,
        resolveDate,
        familyIntegrants: Math.floor(Math.random() * 5) + 1,
        allFamilyAgree: true,
        yardTerraceBalcony: true,
        takeResponsibility: true,
    });
}

module.exports = async () => {
    await Adoption.destroy({
        where: {},
        force: true,
    });

    await Adoption.bulkCreate(items);
};
