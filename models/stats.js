'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stats.init({
    date: DataTypes.DATE,
    temp: DataTypes.FLOAT,
    wsdp: DataTypes.FLOAT,
    pres: DataTypes.FLOAT,
    ambrosia: DataTypes.FLOAT,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Stats',
  });
  return Stats;
};