const log4j = require("./log");
const sqlLog = log4j.getLogger("sql");
const knex = require("knex")({
  client: "mysql2",
  debug: true,
  connection: {
    host: "localhost",
    user: "demo",
    port: "3306",
    password: "demo",
    database: "demo",
  },
  compileSqlOnError: true,
  log: {
    debug(message) {
      let sql = message.sql;
      message.bindings.forEach((bindingStr) => {
        if (typeof bindingStr == "string") {
          bindingStr = "'" + bindingStr + "'";
        }
        sql = sql.replace(/\?/, bindingStr);
      });
      sqlLog.debug(sql);
    },
  },
});
module.exports = knex;
