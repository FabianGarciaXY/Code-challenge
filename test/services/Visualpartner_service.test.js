const fs = require("fs");
const VisualpartnerService = require("../../lib/services/Visualpartner_service");

const rawdata = fs.readFileSync("./test/data_test/visualpartner_testdata.json");
const visualpartner_testdata = JSON.parse(rawdata);

describe("Suite de tests para la clase VisualpartnerService", () => {

    it("1) Probando el metodo getAllVisualpartners retorne todos los valores", () => {
        const visualpartners = VisualpartnerService.getAllVisualpartners(visualpartner_testdata);
        expect(visualpartners).not.toBeUndefined();
        expect(visualpartners.length).toBe(5);
    });

    it("2) Validando el metodo static getStudentsWithCertification", () => {
        const visualpartners = VisualpartnerService.getStudentsWithCertification(visualpartner_testdata);
        expect(visualpartners).not.toBeUndefined();
        expect(visualpartners.length).toBe(3);
    });

    it("3) Validando el metodo getStudentsByCredits de Services", () => {
        const visualpartners = VisualpartnerService.getStudentsByCredits(visualpartner_testdata);
        expect(visualpartners).not.toBeUndefined();
    })

    
});
