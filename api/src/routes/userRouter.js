const { Router } = require('express');
const {
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
} = require('../handlers/userHandlers');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

const userRouter = Router();

userRouter.post('/createUser', postUserHandler);
userRouter.get('/verifyAccount', getVerifyAccountHandler);
userRouter.post('/recoverPassword', postRevoverPassword);
userRouter.get('/verifyToken', getVerifyToken);
userRouter.put('/changePassword', putChangePassword);
userRouter.post('/login', loginUserHandler);
userRouter.post('/searchUser', authMiddleware, searchUser);
userRouter.get(
    '/searchAllUsers',
    authMiddleware,
    adminMiddleware,
    searchAllUsers,
);
userRouter.put('/users/:id', authMiddleware, adminMiddleware, putEnabledsUsers);
userRouter.put('/changeUserData', authMiddleware, putChageUserData);
userRouter.post(
    '/:id_user/addFavorite/:id_animal',
    authMiddleware,
    addFavoriteHandler,
);
userRouter.delete(
    '/:id_user/removeFavorite/:id_animal',
    authMiddleware,
    removeFavoriteHandler,
);
userRouter.get('/google', (req, res) => {
    const { user } = req;
    const serializedUser = JSON.stringify(user);
    const redirectUrl = `${process.env.URL_FRONT}/login/?userGoogle=${encodeURIComponent(serializedUser)}`;
    // const redirectUrl = `https://animaladas03.vercel.app/login/?userGoogle=${encodeURIComponent(serializedUser)}`;
    res.redirect(redirectUrl);
});

module.exports = userRouter;
