const { Op } = require('sequelize');
const { Adoption, Animal } = require('../../db');

module.exports = async (id) => {
    try {
        // Obtener la cantidad total de adopciones
        const totalAdoptions = await Adoption.count({
            where: {
                userId: id,
            },
        });

        // Obtener la información detallada de cada animal adoptado por el usuario
        const adoptedAnimals = await Adoption.findAll({
            where: {
                userId: id,
            },
            include: [
                {
                    model: Animal,
                    as: 'animal',
                    attributes: [
                        'id',
                        'name',
                        'gender',
                        'image1',
                        'image2',
                        'image3',
                        'image4',
                        'species',
                        'status',
                        'size',
                        'weight',
                        'vaccines',
                        'estimatedBirthYear',
                        'castrated',
                        'rescued_story',
                        'adoption_story',
                    ],
                },
            ],
        });

        // Objeto con cantidad total de adopciones y array de detail animales adoptados
        return {
            totalAdoptions: totalAdoptions,
            adoptedAnimals: adoptedAnimals.map((adoption) => adoption.animal),
        };
    } catch (error) {
        throw new Error('Error al obtener el total de adopciones del usuario');
    }
};
