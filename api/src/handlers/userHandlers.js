const createUser = require('../controllers/user/createUser');
const loginUser = require('../controllers/user/loginuser');
const postUserHandler = async (req, res) => {
    const { name, lastName, email, password, phone, address, imageProfile } =
        req.body;

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
module.exports = {
    postUserHandler,
    loginUserHandler,
};
