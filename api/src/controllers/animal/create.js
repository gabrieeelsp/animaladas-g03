const { Animal } = require('../../db');

module.exports = async (
    name,
    image1,
    image2,
    image3,
    image4,
    species,
    status,
    size,
    weight,
    vaccines,
    color,
    estimatedBirthDate,
) => {
    let resp = null;

    try {
        resp = await Animal.create({
            name,
            image1,
            image2,
            image3,
            image4,
            species,
            status,
            size,
            weight,
            vaccines,
            color,
            estimatedBirthDate,
        });
    } catch (error) {
        // revisar error.name posibles
        throw new Error(error.message);
    }

    const item = await Animal.findByPk(resp.id);
    return item;
};
