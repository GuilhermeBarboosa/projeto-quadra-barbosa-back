'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class times extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  times.init({
    time: DataTypes.STRING,
    qtd_jogadores: DataTypes.INTEGER,
    qtd_pontos: DataTypes.INTEGER,
    partidas_jogadas: DataTypes.INTEGER,
    vitorias: DataTypes.INTEGER,
    perdidas: DataTypes.INTEGER,
    empate: DataTypes.INTEGER,
    actived: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'times',
  });
  return times;
};