'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Checkout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Checkout.init({
    id_Cart: DataTypes.INTEGER,
    id_Product: DataTypes.INTEGER,
    Quantity: DataTypes.INTEGER,
    Total_Price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Checkout',
  });
  return Checkout;
};