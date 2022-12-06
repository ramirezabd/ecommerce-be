'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShipmentCharge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ShipmentCharge.init({
    Location: DataTypes.STRING,
    Ship_Cost: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ShipmentCharge',
  });
  return ShipmentCharge;
};