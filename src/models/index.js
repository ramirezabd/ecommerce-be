/* eslint-disable import/no-dynamic-require */
// import { readdirSync } from "fs";
// import { basename as _basename, join } from "path";
// import Sequelize, { DataTypes } from "sequelize";
// import { fileURLToPath } from "url";
// import { env as _env } from "process";

// const __filename = fileURLToPath(import.meta.url);
// const basename = _basename(__filename);
// const env = _env.NODE_ENV || "development";
// const config = require(`${__dirname}/../config/config.json`)[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(_env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config,
//   );
// }

// readdirSync(__dirname)
//   .filter((file) => {
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     );
//   })
//   .forEach((file) => {
//     // eslint-disable-next-line import/no-dynamic-require, global-require
//     const model = require(join(__dirname, file))(sequelize, DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

import configDB from "../config/config_db";
import { Sequelize} from "sequelize"
// const Sequelize = require("sequelize");
const sequelize = new Sequelize(configDB.DB,configDB.USER,configDB.PASSWORD, {
  host: configDB?.HOST,
  dialect: configDB?.dialect,
  operatorAliases: false,

  pool: {
    max: configDB?.pool?.max,
    min: configDB?.pool?.min,
    acquire: configDB?.pool?.acquire,
    idle: configDB?.pool?.idle,
  },
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
