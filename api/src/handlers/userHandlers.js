const changeUserData = require('../controllers/user/changeUserData');
const createUser = require('../controllers/user/createUser');
const getAllUsers = require('../controllers/user/getAllUsers');
const getUserByEmail = require('../controllers/user/getUserByEmail');
const loginUser = require('../controllers/user/loginuser');
const mailRecoveryPassword = require('../controllers/user/mailRecoveryPassword');
const putChangePass = require('../controllers/user/putChangePass');
const putEnabledUser = require('../controllers/user/putIsEnabledUser');
const verifyToken = require('../controllers/user/verifyToken');
const verifyUser = require('../controllers/user/verifyUser');
const addFavoriteController = require('../controllers/user/addFavorite');
const removeFavoriteController = require('../controllers/user/removeFavorite');
/*
const {
    default: Profilemenu,
} = require('../../../client/src/Components/PropdownProfile/Profilemenu');
*/
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
        res.redirect(
            302,
            `${process.env.URL_FRONT}/verifyUser/${verifyAccount}`,
        );
    } catch (error) {
        res.redirect(
            302,
            `${process.env.URL_FRONT}/verifyUser/${error.message}`,
        );
    }
};

const getVerifyToken = async (req, res) => {
    const { token } = req.query;

    try {
        const verify = await verifyToken(token);
        const { userId } = verify;
        res.redirect(302, `${process.env.URL_FRONT}/changePassword/${userId}`);
    } catch (error) {
        // error.message = jwt expired
        res.redirect(
            302,
            `${process.env.URL_FRONT}/changePassword/${error.message}`,
        );
    }
};

const loginUserHandler = async (req, res) => {
    const { email, password } = req.body;

    const emailToLowerCase = email.toLowerCase();

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

    try {
        const newPassword = await putChangePass(userId, password);
        res.status(200).json(newPassword);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
};

const searchAllUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
};

const searchUser = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await getUserByEmail(email);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
};

const putChageUserData = async (req, res) => {
    const { id, name, lastName, password, phone, address, imageProfile } =
        req.body;
    console.log('valor del id', id);
    console.log('valor del name', name);
    console.log('valor del lastName', lastName);
    console.log('valor del password', password);
    console.log('valor del phone', phone);
    console.log('valor del address', address);
    console.log('valor del imageprofile', imageProfile);
    try {
        const user = await changeUserData(
            id,
            name,
            lastName,
            password,
            phone,
            address,
            imageProfile,
        );
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
};

const addFavoriteHandler = async (req, res) => {
    // eslint-disable-next-line camelcase
    const { id_user, id_animal } = req.params;
    try {
        const result = await addFavoriteController(id_user, id_animal);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const removeFavoriteHandler = async (req, res) => {
    // eslint-disable-next-line camelcase
    const { id_user, id_animal } = req.params;
    try {
        const result = await removeFavoriteController(id_user, id_animal);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
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
    searchAllUsers,
    searchUser,
    putChageUserData,
    addFavoriteHandler,
    removeFavoriteHandler,
};
