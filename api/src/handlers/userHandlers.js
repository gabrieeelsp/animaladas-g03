const createUser = require('../controllers/user/createUser');
const loginUser = require('../controllers/user/loginuser');
const mailRecoveryPassword = require('../controllers/user/mailRecoveryPassword');
const putChangePass = require('../controllers/user/putChangePass');
const putEnabledUser = require('../controllers/user/putIsEnabledUser');
const verifyToken = require('../controllers/user/verifyToken');
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

const getVerifyToken = async (req, res) => {
    const { token } = req.query;

    try {
        const verify = await verifyToken(token);
        const { userId } = verify;
        res.redirect(302, `http://localhost:5173/changePassword/${userId}`);
    } catch (error) {
        // error.message = jwt expired
        res.redirect(
            302,
            `http://localhost:5173/changePassword/${error.message}`,
        );
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

const postRevoverPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const sendMail = await mailRecoveryPassword(email);
        res.status(200).json(sendMail);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
};

const putChangePassword = async (req, res) => {
    const { userId, password } = req.body;
    console.log('valor de user id en back', userId);
    console.log('valor de password en back', password);
    try {
        const newPassword = await putChangePass(userId, password);
        res.status(200).json(newPassword);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
};

module.exports = {
    postUserHandler,
    loginUserHandler,
    putEnabledsUsers,
    getVerifyAccountHandler,
    postRevoverPassword,
    getVerifyToken,
    putChangePassword,
};
