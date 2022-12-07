// 'use strict';
// const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    id_Seller: { type: DataTypes.INTEGER },
    id_Category: { type: DataTypes.INTEGER },
    id_Shop: {type: DataTypes.INTEGER},
    Product_Name: {type: DataTypes.STRING},
    Descr_Product: {type: DataTypes.STRING},
    Quantity_Product: {type: DataTypes.INTEGER},
    Unit_Price: {type: DataTypes.INTEGER},
    Product_Pictures: {type: DataTypes.BLOB("long")}
  }, {
    freezeTableName: true
  });

  return Product
}


// export default (sequelize, DataTypes) => {
//   class Product extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Product.init({
    // id_Seller: DataTypes.INTEGER,
    // id_Category: DataTypes.INTEGER,
    // id_Shop: DataTypes.INTEGER,
    // Product_Name: DataTypes.STRING,
    // Descr_Product: DataTypes.STRING,
    // Quantity_Product: DataTypes.INTEGER,
    // Unit_Price: DataTypes.INTEGER,
    // Product_Pictures: DataTypes.BLOB
//   }, {
//     sequelize,
//     modelName: 'Product',
//   });
//   return Product;
// };