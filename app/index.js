import fs from "fs/promises";

const data = [];

fs.writeFile("data.json", JSON.stringify(data, null, 2));
