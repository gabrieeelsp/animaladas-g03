const { Router } = require('express');
const {
    postUserHandler,
    loginUserHandler,
    getVerifyAccountHandler,
} = require('../handlers/userHandlers');

const userRouter = Router();
userRouter.post('/createUser', postUserHandler);
userRouter.get('/verifyAccount', getVerifyAccountHandler);
// userRouter.get('/verifyAccount', (req, res) => {
//     console.log(req.query);
//     res.json(req.query);
// });
userRouter.post('/login', loginUserHandler);

module.exports = userRouter;
