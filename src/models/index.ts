import { db } from '../../database';
import { DataTypes } from 'sequelize';

export const BibleCitation = db.define("BibleCitation", {
    BibleCitationId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export const Document = db.define("Document", {
    DocumentId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});