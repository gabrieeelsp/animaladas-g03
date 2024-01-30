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
                type: DataTypes.TEXT,
                allowNull: false,
            },
            gender: {
                type: DataTypes.TEXT,
                //values: genderList,
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
                type: DataTypes.TEXT,
                //values: speciesList,
            },
            status: {
                type: DataTypes.TEXT,
                // values: statusList,
            },
            size: {
                type: DataTypes.TEXT,
                // values: sizeList,
            },
            weight: {
                type: DataTypes.TEXT,
            },

            // // este atributo puede servir para saber si un animas es adoptable o no
            vaccines: {
                type: DataTypes.BOOLEAN,
                default: false,
            },

            estimatedBirthYear: {
                type: DataTypes.TEXT,
            },
            castrated: {
                type: DataTypes.BOOLEAN,
                default: false,
            },
            disability_illness: {
                type: DataTypes.BOOLEAN,
                default: false,
            },
            age: {
                type: DataTypes.INTEGER,
                get() {
                    return (
                        new Date().getFullYear() -
                        this.get('estimatedBirthYear')
                    );
                },
            },
        },
        {},
    );
};
