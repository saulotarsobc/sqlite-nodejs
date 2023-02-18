import FileSaver from "file-saver";
import { db } from "./database";
import fs from 'fs';


const getFile = async () => {
    const sql = "SELECT * FROM Document;";
    await db.all(sql, [], async (err: Error, data: any) => {
        if (err) { console.log({ msg: err.message, }); return };

        let aaa = data[0].Content;

        fs.writeFileSync('dados.jwtkn', aaa)

        console.log(aaa, "\n----\n");
    });
};

getFile();