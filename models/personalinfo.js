/* eslint-disable no-unused-vars */
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class PersonalInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PersonalInfo.init(
    {
      id_Wishlist: DataTypes.INTEGER,
      id_Cart: DataTypes.INTEGER,
      Email: DataTypes.STRING,
      Personal_Address: DataTypes.STRING,
      Profile_Picture: DataTypes.BLOB,
      Gender: DataTypes.INTEGER,
      SALDO: DataTypes.INTEGER,
      Username: DataTypes.STRING,
      Password: DataTypes.STRING,
      Role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "PersonalInfo",
    },
  );
  return PersonalInfo;
};
