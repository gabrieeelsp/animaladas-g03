const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'animal',
        {
            id: {
                type: DataTypes.INTEGER,
                autoincrement: true,
                primaryKey: true,
            },
            // considero que el nombre del animal se puede repetir
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            // cada imagen tiene su función especifica definida en el front
            image1: {
                type: DataTypes.STRING,
            },
            image2: {
                type: DataTypes.STRING,
            },
            image3: {
                type: DataTypes.STRING,
            },
            image4: {
                type: DataTypes.STRING,
            },

            species: {
                type: DataTypes.ENUM,
                values: ['dog', 'cat'],
            },
            status: {
                type: DataTypes.ENUM,
                values: ['transito', 'adoptado'],
            },
            size: {
                type: DataTypes.ENUM,
                values: ['small', 'medium', 'big'],
            },
            weight: {
                type: DataTypes.DOUBLE,
            },

            // este atributo puede servir para saber si un animas es adoptable o no
            vaccines: {
                type: DataTypes.BOOLEAN,
            },
            color: {
                type: DataTypes.ENUM,
                values: ['black', 'white'],
            },
            estimatedBirthDate: {
                type: DataTypes.DATE,
            },
        },
        {},
    );
};
