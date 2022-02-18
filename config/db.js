const dotenv = require("dotenv").config({ debug: true });
const mysql = require("mysql");
const pool = mysql.createPool({
  host: process.env.HOST_ID,
  user: process.env.USER_ID,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.getConnection(function (err) {
  if (err) {
    console.log("error connecting to db..." + err);
  }
  console.log("connected to db...");
});

// const executeQuery = (query, arraParams) => {
//   return new Promise((resolve, reject) => {
//     try {
//       pool.query(query,arraParams(err,data)=>{
//         if (err) {
//           console.log("error");
//           reject(err);
//         }
//         resolve(data);
//       })
//     } catch (error) {
//       reject(error);
//     }
//   })
// };

module.exports = pool;
