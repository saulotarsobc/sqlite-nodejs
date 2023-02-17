"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
const database_1 = require("../database");
const sequelize_1 = require("sequelize");
exports.Document = database_1.db.define("Document", {
    DocumentId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
});
