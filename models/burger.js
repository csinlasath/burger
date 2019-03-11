
const orm = require("../config/orm");

var burger = {
    readAll: (callback) => {
        orm.readAll("burgers", (response) => {
            callback(response);
        });
    },
    createOne: (columnName, values, callback) => {
        orm.createOne("burgers", columnName, values, (response) => {
            callback(response);
        });
    },
    updateOne: (columnValues, condition, callback) => {
        orm.updateOne("burgers", columnValues, condition, (response) => {
            callback(response);
        });
    }
};

module.exports = burger;