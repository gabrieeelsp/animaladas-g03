const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("dotaniton", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT(2),
      allowNull: true,
      defaultValue: "0",
    },
    destination: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      defaultValue: [
        {
          Foundation: false,
          AnimalFk: null,
        },
      ],
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });
};
