import { BibleCitation } from "./models";

BibleCitation.count({})
    .then((data: any) => {
        console.log(data);
    })
    .catch((e: Error) => {
        console.log(e.message);
    });