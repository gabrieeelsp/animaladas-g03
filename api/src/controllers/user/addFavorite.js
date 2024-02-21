const { User, Animal } = require('../../db');

// eslint-disable-next-line camelcase
const addFavoriteController = async (id_user, id_animal) => {
    try {
        const currentUser = await User.findByPk(id_user);
        const animal = await Animal.findByPk(id_animal);

        if (!currentUser || !animal) {
            throw new Error('Usuario o animal no encontrado');
        }

        await currentUser.addAnimal(animal);

        return currentUser;
    } catch (error) {
        throw new Error(error.message);
    }
};
module.exports = addFavoriteController;
