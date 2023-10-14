'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medicine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.hasOne(Agents, {foreignKey: 'medicineId', onDelete: 'cascade', hooks: true});
    }
  }
  Medicine.init({
    search: DataTypes.STRING,
    name: DataTypes.STRING,
    amount: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Medicine',
  });
  return Medicine;
};