const { Router } = require('express');
const {
    postUserHandler,
    loginUserHandler,
    putEnabledsUsers,
    getVerifyAccountHandler,
} = require('../handlers/userHandlers');

const userRouter = Router();
userRouter.post('/createUser', postUserHandler);
userRouter.get('/verifyAccount', getVerifyAccountHandler);
userRouter.post('/login', loginUserHandler);
userRouter.put('/users/:id', putEnabledsUsers);
userRouter.get('/google', (req, res) => {
    const { user } = req;
    const serializedUser = JSON.stringify(user);
    const redirectUrl = `${process.env.URL_FRONT}/login/?userGoogle=${encodeURIComponent(serializedUser)}`;
    // const redirectUrl = `https://animaladas03.vercel.app/login/?userGoogle=${encodeURIComponent(serializedUser)}`;
    res.redirect(redirectUrl);
});

module.exports = userRouter;
