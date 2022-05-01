const VisualpartnerController = require("../../lib/controllers/Visualpartner_controller");
const fs = require("fs");
const rawdata = fs.readFileSync("./test/data_test/visualpartner_testdata.json");
const dataTest = JSON.parse(rawdata);


describe("Set de tests para el controllador VisualpartnerController", () => {

    test("1) Validanto el metodo estatico getAllVisualpartners acepte los datos del archivo JSON", () => {
        const visualparnerData = VisualpartnerController.getAllVisualpartners();
        expect(visualparnerData).not.toBeUndefined();
    });

    test("2) Validando que el metodo getStudentsWithCertification del cotrolador retorne so la lista de estudiantes que tengan certificación", () => {
        const visualparnerData = VisualpartnerController.getStudentsWithCertification(dataTest);
        expect(visualparnerData).not.toBeUndefined();
    });
});
