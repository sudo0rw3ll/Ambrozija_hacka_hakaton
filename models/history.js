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
    static associate({ UserAgent }) {
      this.belongsTo(UserAgent, { foreignKey: 'userAgentId' });
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