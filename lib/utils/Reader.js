const fs = require("fs");

class Reader {
    static readJson(path) {
        const visualpartnerData = fs.readFileSync(path);
        return JSON.parse(visualpartnerData);
    }
}

module.exports = Reader;
