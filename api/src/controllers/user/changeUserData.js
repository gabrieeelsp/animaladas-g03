const getUserById = require('./getUserById');
const bcrypt = require('bcryptjs');

const changeUserData = async (
    id,
    name,
    lastName,
    password,
    phone,
    address,
    imageProfile,
) => {
    const user = await getUserById(id);

    user.name = name;
    user.lastName = lastName;
    if (password.length !== 0 && password !== undefined) {
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
    }
    user.phone = phone;
    user.address = address;
    user.imageProfile = imageProfile;

    await user.save();
    return 'Informacion del Usuario actualizada.';
};

module.exports = changeUserData;
