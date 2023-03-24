'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jogadores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      jogadores.belongsTo(models.users, {
        foreignKey: "user",
        as : "userResponse"
      });
      jogadores.belongsTo(models.posicoes, {
        foreignKey: "posicao",
        as : "posicaoResponse"
      });
      jogadores.belongsTo(models.times, {
        foreignKey: "time",
        as : "timeResponse"
      });
      // jogadores.belongsTo(models.user, {
      //   foreignKey: "user",
      //   as : "userResponse"
      // });
      // jogadores.belongsTo(models.posicoes, {
      //   foreignKey: "posicao",
      //   as : "posicaoResponse"
      // });
      // jogadores.belongsTo(models.times, {
      //   foreignKey: "time",
      //   as : "timeResponse"
      // });
    }
  }
  jogadores.init({
    posicao: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
    user: DataTypes.INTEGER,
    actived: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  }, {
    sequelize,
    modelName: 'jogadores',
  });
  return jogadores;
};