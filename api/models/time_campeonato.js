'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class time_campeonato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      time_campeonato.belongsTo(models.times, {
        foreignKey: "time",
        as : "timeResponse"
      });
      time_campeonato.belongsTo(models.campeonatos, {
        foreignKey: "campeonato",
        as : "campeonatoResponse"
      });
    }
  }
  time_campeonato.init({
    time: DataTypes.INTEGER,
    campeonato: DataTypes.INTEGER,
    actived: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'time_campeonato',
  });
  return time_campeonato;
};