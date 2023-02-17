const sqlite3 = require('sqlite3').verbose();
// let sql;

// connnect to db
export const db = new sqlite3.Database('./db/controle_de_acesso.db', sqlite3.OPEN_READWRITE, (err: any) => {
    if (err) return console.warn(err.message);
});