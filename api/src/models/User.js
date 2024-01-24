const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
      },
      imageProfile: {
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.ENUM,
        values: ['admin', 'user'],
        allowNull: false,
      }
      // o, en vez de role:
      // isAdmin: {
      //   type: DataTypes.BOOLEAN,
      //   allowNull: false,
      // }
    },
  );
};
