const VisualpartnerService = require("../services/Visualpartner_service");
const Reader = require("../utils/Reader");

const visualpartners = Reader.readJson("visualpartners.json");

class VisualpartnerController {
    static getAllVisualpartners() {
        return VisualpartnerService.getAllVisualpartners(visualpartners);
    }
}

module.exports = VisualpartnerController;
