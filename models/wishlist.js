import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Wishlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Wishlist.init(
    {
      id_Buyer: DataTypes.INTEGER,
      id_Product: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Wishlist",
    },
  );
  return Wishlist;
};
