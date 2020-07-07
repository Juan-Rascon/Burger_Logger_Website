const orm = require('../config/orm');

var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },

    add: function(burger, devoured, cb) {
      orm.add("burgers", burger, devoured, function(res) {
        cb(res);
      });
    },

    update: function(objColVals, cb) {
      orm.update("burgers", objColVals, function(res) {
        cb(res);
      });
    }
  };
  
  module.exports = burger;