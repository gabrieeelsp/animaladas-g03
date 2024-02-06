const { Adoption, Animal } = require('../../db');

module.exports = async (
    userId,
    animalId,
    description,
    familyIntegrants,
    allFamilyAgree,
    yardTerraceBalcony,
    takeResponsibility,
) => {
    const animal = await Animal.findByPk(animalId);

    if (animal.status !== 'adoptable')
        throw new Error('El animal no es adoptable por el momento');

    let resp = null;
    try {
        resp = await Adoption.create({
            userId,
            animalId,
            description,
            familyIntegrants,
            allFamilyAgree,
            yardTerraceBalcony,
            takeResponsibility,
        });
    } catch (error) {
        // revisar error.name posibles
        throw new Error(error.message);
    }
    const item = await Adoption.findByPk(resp.id, {
        include: ['user', 'animal'],
    });
    return item;
};
