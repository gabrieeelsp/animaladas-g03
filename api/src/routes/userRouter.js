const { Router } = require('express');
const {
    postUserHandler,
    loginUserHandler,
    getVerifyAccountHandler,
} = require('../handlers/userHandlers');

const userRouter = Router();
userRouter.post('/createUser', postUserHandler);
userRouter.get('/verifyAccount', getVerifyAccountHandler);
userRouter.post('/login', loginUserHandler);

module.exports = userRouter;
