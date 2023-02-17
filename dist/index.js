"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
models_1.Document.count({})
    .then((data) => {
    console.log(data);
})
    .catch((e) => {
    console.log(e.message);
});
