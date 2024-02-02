const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('donation', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        animalId: {
            type: DataTypes.INTEGER,
        },
    });
};
