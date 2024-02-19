// eslint-disable-next-line consistent-return
const adminMiddleware = (req, res, next) => {
    const { user } = req;

    if (!user.isAdmin) {
        return res
            .status(403)
            .json({ message: 'Acceso no autorizado para no administradores' });
    }

    next();
};

module.exports = adminMiddleware;
