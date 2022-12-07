// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const process = require('process');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// const configdb = require(".././src/config/config_db");
import configDB from ".././src/config/config_db";
const Sequelize = require('sequelize');
const sequelize = new Sequelize(configDB.DB,configDB.USER,configDB.PASSWORD, {
  host: configDB.HOST,
  dialect: configDB.dialect,
  operatorAliases: false,

  pool: {
    max: configDB.pool.max,
    min: configDB.pool.min,
    acquire: configDB.pool.acquire,
    idle: configDB.pool.idle,
  },
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Cart = require("./cart")(sequelize,Sequelize);
db.Category = require("./category")(sequelize,Sequelize);
db.Checkout = require("./checkout")(sequelize,Sequelize);
db.PersonalInfo = require("./personalinfo")(sequelize,Sequelize);
db.Product = require("./product")(sequelize,Sequelize);
db.Shop = require("./shop")(sequelize,Sequelize);
db.ShipmentCharge = require("./shipmentcharge")(sequelize,Sequelize);
db.Wishlist = require("./wishlist")(sequelize,Sequelize);


module.exports = db;
