import { BibleCitation, Document } from "./models";

Document.count({})
    .then((data) => {
        console.log(data);
    })
    .catch((e: Error) => {
        console.log(e.message);
    });