"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const fs_1 = __importDefault(require("fs"));
const getFile = () => __awaiter(void 0, void 0, void 0, function* () {
    const sql = "SELECT * FROM Document;";
    yield database_1.db.all(sql, [], (err, data) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            console.log({ msg: err.message, });
            return;
        }
        ;
        let aaa = data[0].Content;
        fs_1.default.writeFileSync('dados.jwtkn', aaa);
        console.log(aaa, "\n----\n");
    }));
});
getFile();
//# sourceMappingURL=index.js.map