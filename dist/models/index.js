"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = exports.BibleCitation = void 0;
const database_1 = require("../database");
const sequelize_1 = require("sequelize");
exports.BibleCitation = database_1.db.define("BibleCitation", {
    BibleCitationId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
});
exports.Document = database_1.db.define("Document", {
    DocumentId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
});
//# sourceMappingURL=index.js.map