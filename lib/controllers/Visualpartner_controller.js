const VisualpartnerService = require("../services/Visualpartner_service");
const Reader = require("../utils/Reader");

class VisualpartnerController {
    
    static getAllVisualpartners() {
        const visualpartners = Reader.readJson("visualpartners.json");
        return VisualpartnerService.getAllVisualpartners(visualpartners);
    }

    static getStudentsWithCertification(){
        const visualpartners = Reader.readJson("visualpartners.json");
        return VisualpartnerService.getStudentsWithCertification(visualpartners);
    }

    static getStudentsByCredits() {
        const visualpartners = Reader.readJson("visualpartners.json");
        return VisualpartnerService.getStudentsByCredits(visualpartners);
    }
}

module.exports = VisualpartnerController;
