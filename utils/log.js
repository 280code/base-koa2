const log4js = require("log4js");
const path = require("path");
log4js.configure({
  appenders: {
    sql: {
      type: "file",
      filename: "./logs/sql.log",
      layout: {
        type: "pattern",
        pattern: "[%d{yyyy-MM-dd hh:mm:ss}] [%p] %c %m%n",
      },
    },
  },
  categories: { default: { appenders: ["sql"], level: "debug" } },
});

module.exports = log4js;
