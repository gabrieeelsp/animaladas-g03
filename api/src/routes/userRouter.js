const { Router } = require('express');
const {
    postUserHandler,
    loginUserHandler,
    putEnabledsUsers,
} = require('../handlers/userHandlers');

const userRouter = Router();
userRouter.post('/createUser', postUserHandler);
userRouter.post('/login', loginUserHandler);
userRouter.put('/users/:id', putEnabledsUsers);

module.exports = userRouter;
