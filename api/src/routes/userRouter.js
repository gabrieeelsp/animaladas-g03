const { Router } = require('express');
const {
    postUserHandler,
    loginUserHandler,
} = require('../handlers/userHandlers');

const userRouter = Router();
userRouter.post('/createUser', postUserHandler);
userRouter.post('/login', loginUserHandler);

module.exports = userRouter;
