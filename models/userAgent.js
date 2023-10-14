'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAgent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ History }) {
      this.hasMany(History, { foreignKey: 'userAgentId', onDelete: 'CASCADE', hooks: true });
    }
  }
  UserAgent.init({

  }, {
    sequelize,
    modelName: 'UserAgent',
  });
  return UserAgent;
};