const { Router } = require('express');
const {
    postUserHandler,
    loginUserHandler,
    putEnabledsUsers,
    getVerifyAccountHandler,
} = require('../handlers/userHandlers');
const transporter = require('../services/nodemailer');

const userRouter = Router();
userRouter.post('/createUser', postUserHandler);
userRouter.get('/verifyAccount', getVerifyAccountHandler);
userRouter.post('/login', loginUserHandler);
userRouter.put('/users/:id', putEnabledsUsers);
userRouter.get('/google', (req, res) => {
    const { user } = req;
    const serializedUser = JSON.stringify(user);
    // const redirectUrl = `http://localhost:5173/login/?userGoogle=${encodeURIComponent(serializedUser)}`;
    const redirectUrl = `https://animaladas03.vercel.app/login/?userGoogle=${encodeURIComponent(serializedUser)}`;
    res.redirect(redirectUrl);
});

userRouter.post('/mail', async (req, res) => {
    const { email, name, text } = req.body;

    await transporter.sendMail({
        from: 'animaladas132@gmail.com',
        to: email,
        subject: 'verify',
        html: `
        <h1>${name}</h1>
        <p>Bienvenido</p>
        <p>${text}</p>

        `,
    });
});

module.exports = userRouter;
