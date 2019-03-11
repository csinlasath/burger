const connection = require("../config/connection");

var printQuestionMarks = (number) => {
    var arr = [];

    for (var i = 0; i < number; i++) {
        arr.push("?");
    }

    return arr.toString();
}

var convertToSql = (object) => {
    var arr = [];

    for (var key in object) {
        var value = object[key];

        if (Object.hasOwnProperty.call(object, key)) {
            if (typeof value === "string" && value.indexOf(" " >= 0)) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

var orm = {
    readAll: (tableName, callback) => {
        connection.query("SELECT * FROM " + tableName + ";", (err, result) => {
            if (err) {
                throw err;
            }
            else {
                callback(result);
            }
        });
    },
    createOne: (tableName, columnArr, valuesArr, callback) => {
        connection.query("INSERT INTO " + tableName + " (" + columnArr.toString() + ") VALUES (" + printQuestionMarks(valuesArr.length) + ") ", valuesArr, (err, result) => {
            if (err) {
                throw err;
            }
            else {
                callback(result);
            }
        });
    },
    updateOne: (tableName, columnValue, condition, callback) => {
        connection.query("UPDATE " + tableName + " SET " + convertToSql(columnValue) + " WHERE " + condition, (err, result) => {
            if (err) {
                throw err;
            }
            else {
                callback(result);
            }
        });
    }
};

module.exports = orm;
