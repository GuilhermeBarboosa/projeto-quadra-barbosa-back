"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.roles, {
        foreignKey: "role",
      });
    }
  }
  user.init(
    {
      nome: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
        isEmail: true,
      },
      senha: DataTypes.STRING,
      idade: DataTypes.INTEGER,
      role: DataTypes.INTEGER,
      actived: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "users",
    },
    {
      defaultScope: {
        where: {
          active: true,
        },
      },
    }
  );
  return user;
};
