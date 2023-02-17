const sqlite3 = require('sqlite3').verbose();
// let sql;

// connnect to db
export const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err: any) => {
    if (err) return console.warn(err.message);
});