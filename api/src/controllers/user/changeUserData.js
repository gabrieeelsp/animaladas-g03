const getUserById = require('./getUserById');

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
    user.password = password;
    user.phone = phone;
    user.address = address;
    user.imageProfile = imageProfile;

    await user.save();
    return 'Informacion del Usuario actualizada.';
};

module.exports = changeUserData;
