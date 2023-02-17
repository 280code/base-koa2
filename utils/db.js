const mysql = require("mysql2");
const pool = mysql.createPool({
  host: "localhost",
  user: "demo",
  port: "3306",
  password: "demo",
  database: "demo",
});

let query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
          connection.release();
        });
      }
    });
  });
};

module.exports = query;
