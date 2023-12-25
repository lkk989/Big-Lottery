const mysql = require("mysql2/promise");

// const connection = mysql.createPool({
//   host: "localhost",
//   user: "tringa",
//   password: "tringa",
//   database: "tringa",
// });

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "biglt",
});

export default connection;
