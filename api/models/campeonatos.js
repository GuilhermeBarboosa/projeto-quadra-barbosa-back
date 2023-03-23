'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class campeonatos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  campeonatos.init({
    campeonato: DataTypes.STRING,
    actived: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }},
    {
    sequelize,
    modelName: 'campeonatos',
  });
  return campeonatos;
};