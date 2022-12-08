// import { DataTypes } from "sequelize";
// import { sequelize } from "sequelize"
// import db from "../config/config_db";

// const Users = sequelize.define(
//   "Users",
//   {
//     username: {
//       type: DataTypes.STRING,
//     },
//     email: {
//       type: DataTypes.STRING,
//     },
//     password: {
//       type: DataTypes.STRING,
//     },
//     refreshToken: {
//       type: DataTypes.TEXT,
//     },
//   },
//   { freezeTableName: true },
// );

// (async () => {
//   await db.sync();
// })();

import { DataTypes } from "sequelize";
const Users = sequelize.define(
    "Users",
  {
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    refreshToken: {
      type: DataTypes.TEXT,
    },
  },
  { freezeTableName: true },
)

export default Users;
