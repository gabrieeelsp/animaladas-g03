const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const secret = process.env.JWT_SECRET;
    const payload = {
        userId: user.id,
        isAdmin: user.isAdmin,
    };

    const options = {
        expiresIn: '24h',
    };

    const token = jwt.sign(payload, secret, options);

    return token;
};

const generateTokenVerifyAccount = (user) => {
    const secret = process.env.JWT_SECRET;
    const payload = {
        userId: user.id,
    };

    const options = {};

    const token = jwt.sign(payload, secret, options);

    return token;
};

const tokenDecoded = (token) => {
    const secret = process.env.JWT_SECRET;

    const decoded = jwt.verify(token, secret);

    return decoded;
};

module.exports = { generateToken, generateTokenVerifyAccount, tokenDecoded };
