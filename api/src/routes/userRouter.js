const { Router } = require('express');
const { postUserHandler } = require('../handlers/userHandlers');

const userRouter = Router();

userRouter.post('/createUser', postUserHandler);

module.exports = userRouter;
