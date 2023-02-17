"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sqlite3 = require('sqlite3').verbose();
// let sql;
// connnect to db
exports.db = new sqlite3.Database('./db/controle_de_acesso.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err)
        return console.warn(err.message);
});
