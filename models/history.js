'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.hasMany(UserAgent, {foreignKey: 'userAgentId', onDelete: 'cascade', hooks: true});
    }
  }
  History.init({
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};