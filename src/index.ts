import { db } from "./database";
import fs from 'fs';


const getFile = async () => {
    const sql = "SELECT * FROM Document;";
    await db.all(sql, [], async (err: Error, data: any) => {
        if (err) { console.log({ msg: err.message, }); return };

        // console.log(data, '\n----\n');

        const Content = data[0].Content;
        // console.log(blob, '\n');
        
        // const buf = new Buffer(blob, 'binary');
        // console.log(buf, '\n');

        // fs.writeFileSync('result.bin', buf);

        let myBlob = new Blob(Content);
        console.log(myBlob);

    });
};

getFile();