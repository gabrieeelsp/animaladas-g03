const { DataTypes } = require('sequelize');
const { adoptionStatusList } = require('../utils');

module.exports = (sequelize) => {
    sequelize.define('adoption', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        status: {
            type: DataTypes.ENUM,
            values: adoptionStatusList,
            defaultValue: adoptionStatusList[0],
        },
        resolveDate: {
            type: DataTypes.DATE,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        userId: {
            type: DataTypes.INTEGER,
        },
        animalId: {
            type: DataTypes.INTEGER,
        },
        familyIntegrants: {
            type: DataTypes.INTEGER,
        },
        allFamilyAgree: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        yardTerraceBalcony: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        takeResponsibility: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });
};
