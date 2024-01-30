const { Animal } = require('../../db');

module.exports = async (
    name,
    gender,
    image1,
    image2,
    image3,
    image4,
    species,
    status,
    size,
    weight,
    vaccines,
    estimatedBirthYear,
    castrated,
    disability_illness,
    rescued_story,
    adoption_story,
) => {
    let resp = null;

    try {
        resp = await Animal.create({
            name,
            gender,
            image1,
            image2,
            image3,
            image4,
            species,
            status,
            size,
            weight,
            vaccines,
            estimatedBirthYear,
            castrated,
            disability_illness,
            rescued_story,
            adoption_story,
        });
    } catch (error) {
        // revisar error.name posibles
        throw new Error(error.message);
    }

    const item = await Animal.findByPk(resp.id);
    return item;
};
