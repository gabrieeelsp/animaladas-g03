const { DataTypes } = require('sequelize');
const { sizeList, statusList, speciesList, genderList } = require('../utils');

module.exports = (sequelize) => {
    sequelize.define(
        'animal',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            // considero que el nombre del animal se puede repetir
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            gender: {
                type: DataTypes.ENUM,
                values: genderList,
            },
            // cada imagen tiene su función especifica definida en el front
            image1: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            image2: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            image3: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            image4: {
                type: DataTypes.STRING,
                allowNull: true,
            },

            species: {
                type: DataTypes.ENUM,
                values: speciesList,
            },
            status: {
                type: DataTypes.ENUM,
                values: statusList,
            },
            size: {
                type: DataTypes.ENUM,
                values: sizeList,
            },
            weight: {
                type: DataTypes.DOUBLE,
            },

            // // este atributo puede servir para saber si un animas es adoptable o no
            vaccines: {
                type: DataTypes.BOOLEAN,
                default: false,
            },

            estimatedBirthYear: {
                type: DataTypes.INTEGER,
            },
            castrated: {
                type: DataTypes.BOOLEAN,
                default: false,
            },
            disability_illness: {
                type: DataTypes.BOOLEAN,
                default: false,
            },
        },
        {},
    );
};
