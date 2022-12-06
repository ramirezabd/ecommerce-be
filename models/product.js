'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    id_Seller: DataTypes.INTEGER,
    id_Category: DataTypes.INTEGER,
    id_Shop: DataTypes.INTEGER,
    Product_Name: DataTypes.STRING,
    Descr_Product: DataTypes.STRING,
    Quantity_Product: DataTypes.INTEGER,
    Unit_Price: DataTypes.INTEGER,
    Product_Pictures: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};