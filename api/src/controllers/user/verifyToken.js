const { tokenDecoded } = require('../../services/jsonWebToken');

const verifyToken = (token) => {
    const decoded = tokenDecoded(token);

    return decoded;
};

module.exports = verifyToken;
