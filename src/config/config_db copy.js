// import { createConnection } from "mysql";

// const database = createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "miolica",
// });

// database.connect((err) => {
//   if (err) throw err;
//   console.log("mysql is running...");
// });

// export default database;


import { Sequelize } from "sequelize";
const env = process.env.NODE_ENV || "miolica";

import { miolica } from "../../src/config/config.json" assert { type: "json" };

const db = new Sequelize("miolica", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// module.exports = miolica
export default db;
