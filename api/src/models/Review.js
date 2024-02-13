const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('review', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        score: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 1,
                max: 5,
            },
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: true, // Puede ser nulo si el usuario no quiere dejar un comentario
        },
        isReviewed: {
            type: DataTypes.ENUM('pendiente', 'aprobado', 'rechazado'),
            defaultValue: 'pendiente',
            allowNull: false,
        },
    });
};
