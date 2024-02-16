const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('review', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_img: {
            type: DataTypes.STRING,
            allowNull: false,
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
