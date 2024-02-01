const { Router } = require('express');
const { postUserHandler } = require('../handlers/userHandlers');
const { loginUserHandler } = require('../handlers/userHandlers');
const userRouter = Router();

userRouter.post('/createUser', postUserHandler);
userRouter.post('/login', postUserHandler);

module.exports = userRouter;
