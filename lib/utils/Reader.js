const fs = require('fs');

class Reader {
  static readJson(path) {
    const visualpartner_data = fs.readFileSync(path);
    return JSON.parse(visualpartner_data)
  }
}

module.exports = Reader;
