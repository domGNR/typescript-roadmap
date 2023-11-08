import { randomBytes } from "crypto";
import { readFile, writeFile } from "fs/promises";
import path = require("node:path");

async function readWriteFile(): Promise<void> {
    try {
        const rootPath = path.resolve(__dirname, "..");
        const filePath = path.join(rootPath, "package.json");
        const data = JSON.parse((await readFile(filePath)).toString());
        data.author = randomBytes(Math.ceil(6 / 2))
            .toString("hex")
            .slice(0, 6);
        const newFileName = "package.prg.json";
        await writeFile(path.join(rootPath, newFileName), JSON.stringify(data));
        console.log(
            JSON.parse(
                (await readFile(path.join(rootPath, newFileName))).toString()
            )
        );
    } catch (error) {
        console.log(error);
    }
}

export async function ex6() {
    await readWriteFile();
}
