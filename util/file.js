const fs = require("fs");
const PATH_FILE = "./db/data.json";

const write = (data) => {
    fs.writeFileSync(PATH_FILE, JSON.stringify(data));
};

const read = () => {
    if (!fs.existsSync(PATH_FILE)) return null;
    const data = fs.readFileSync(PATH_FILE, { encoding: "utf-8" });
    if (data) return JSON.parse(data)
    return [];
};

module.exports = {
    write,
    read,
};
