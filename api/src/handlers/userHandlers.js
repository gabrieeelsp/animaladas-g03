const createUser = require('../controllers/user/createUser');
const loginUser = require('../controllers/user/loginuser');
const putEnabledUser = require('../controllers/user/putIsEnabledUser');
const verifyUser = require('../controllers/user/verifyUser');

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
        console.log(error.message);
        res.status(400).json(error.message);
    }
};

const getVerifyAccountHandler = async (req, res) => {
    const { token, userId } = req.query;

    try {
        // change status verify account
        const verifyAccount = await verifyUser(token, userId);
        res.redirect(302, `http://localhost:5173/verifyUser/${verifyAccount}`);
    } catch (error) {
        res.redirect(302, `http://localhost:5173/verifyUser/${error.message}`);
    }
};

const loginUserHandler = async (req, res) => {
    const { email, password } = req.body;

    const emailToLowerCase = email.toLowerCase();
    console.log('Ingreso loginHandler');

    try {
        const user = await loginUser(emailToLowerCase, password);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
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
    getVerifyAccountHandler,
};
