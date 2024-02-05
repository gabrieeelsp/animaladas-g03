const { User } = require('../../db');

// este metodo recibe un id en formato Number
module.exports = async (id) => {
    const user = await User.findByPk(id);
    if (!user) throw new Error('No se encontro una instancia con el id');

    user.enabled = !user.enabled;
    await user.save();
    return user;
};
