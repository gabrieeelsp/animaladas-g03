const createUser = require('../controllers/user/createUser');
const loginUser = require('../controllers/user/loginuser.js');
const putEnabledUser = require('../controllers/user/putIsEnabledUser.js');

const postUserHandler = async (req, res) => {
    const { name, lastName, email, password, phone, address, imageProfile } =
        req.body;
    console.log('valor de name', name);
    console.log('valor de lastName', lastName);
    console.log('valor de email', email);
    console.log('valor de password', password);
    console.log('valor de phone', phone);
    console.log('valor de address', address);
    console.log('valor de imageProfile', imageProfile);
    const emailToLowerCase = email.toLowerCase();

    try {
        const newUser = await createUser(
            name,
            lastName,
            emailToLowerCase,
            password,
            phone,
            address,
            imageProfile,
        );
        res.status(200).json(newUser);
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error.message);
    }
};

const loginUserHandler = async (req, res) => {
    const { email, password } = req.body;

    const emailToLowerCase = email.toLowerCase();

    try {
        const newUser = await loginUser(email, password);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const putEnabledsUsers = async (req, res) => {
    const { id } = req.params;
    try {
        const logicDeletion = await putEnabledUser(id);
        res.json(logicDeletion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = {
    postUserHandler,
    loginUserHandler,
    putEnabledsUsers,
};
