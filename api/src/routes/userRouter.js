const { Router } = require("express");

const userRouter = Router();

userRouter.post("/createUser" , postUserHandler);

module.exports = userRouter;