// const dotenv = require("dotenv").config({ debug: true });
const mysql = require("mysql");
const pool = mysql.createPool({
  host: "148.72.232.172",
  user: "Chusaadb",
  password: "Mahibaby@123",
  database: "Chusaa",
});

pool.getConnection(function (err) {
  if (err) {
    console.log("error connecting to db..." + err);
  }
  console.log("connected to db...");
});

const executeQuery = (query, arraParms) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, arraParms, (err, data) => {
        if (err) {
          console.log("error");
          reject(err);
        }
        resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { executeQuery };
