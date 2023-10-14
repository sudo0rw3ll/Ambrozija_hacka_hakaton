'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.belongsTo(Plant, {foreignKey: 'plantId', as: 'plant'});
        this.belongsTo(Medicine, {foreignKey: 'medicineId', as: 'medicine'});
        this.hasMany(UserAgent, { foreignKey: 'agentId' });
    }
  }
  Agent.init({

  }, {
    sequelize,
    modelName: 'Agent',
  });
  return Agent;
};