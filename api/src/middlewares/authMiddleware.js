const { tokenDecoded } = require('../services/jsonWebToken');

// eslint-disable-next-line consistent-return
const authMiddleware = (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }

    const tokenParts = authorizationHeader.split(' ');

    const token = tokenParts[1];

    try {
        const decoded = tokenDecoded(token);
        req.user = decoded;
        console.log('decoded:', decoded);
    } catch (error) {
        return res.status(403).json({ message: error.message });
    }
    next();
};

module.exports = authMiddleware;
