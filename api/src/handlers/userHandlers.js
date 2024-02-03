const createUser = require('../controllers/user/createUser');
const loginUser = require('../controllers/user/loginuser');
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
    const { userEmail } = req.query;

    try {
        // change status verify account
        const verifyAccount = await verifyUser(userEmail);
        console.log(verifyAccount);
        res.redirect(302, `http://localhost:5173/verifyUser/${verifyAccount}`);
    } catch (error) {
        // const errorMessage = error.message || "An unknown error occurred.";
        console.log(error);
        res.redirect(302, `http://localhost:5173/verifyUser/${error.message}`);
    }
};

const loginUserHandler = async (req, res) => {
    const { email, password } = req.body;

    const emailToLowerCase = email.toLowerCase();

    try {
        const newUser = await loginUser(emailToLowerCase, password);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json(error.message);
    }
};
module.exports = {
    postUserHandler,
    loginUserHandler,
    getVerifyAccountHandler,
};
