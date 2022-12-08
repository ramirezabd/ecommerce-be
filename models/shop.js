import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Shop.init(
    {
      id_Product: DataTypes.INTEGER,
      id_Seller: DataTypes.INTEGER,
      id_Shipment: DataTypes.INTEGER,
      Shop_Name: DataTypes.STRING,
      Descr_Shop: DataTypes.STRING,
      Shop_Picture: DataTypes.BLOB,
    },
    {
      sequelize,
      modelName: "Shop",
    },
  );
  return Shop;
};
