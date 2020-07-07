const connection = require('./connection');
const mysql = require ('mysql');

const orm = {
    all: function(tableInput, cb) {
      let queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    add: function(table, burger, devoured, cb) {
      let sql = "INSERT INTO ?? (??, ??) VALUES (?, ?);";
      const inserts = [table, 'burger_name', 'devoured', burger, devoured];
      sql = mysql.format(sql, inserts);
  
      connection.query(sql, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);

      });
    },

    update: function(table, objColVals, cb) {
      let sql = "UPDATE ?? SET ?? = ? WHERE id = ?;";
      const inserts = [table, 'devoured', 1, objColVals];
      sql = mysql.format(sql, inserts);

      connection.query(sql, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }
  };
  
  
  module.exports = orm;
  