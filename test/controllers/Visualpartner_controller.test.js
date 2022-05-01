const VisualpartnerController = require("../../lib/controllers/Visualpartner_controller");

describe("Set de tests para el controllador VisualpartnerController", () => {

    test("1) Validanto el metodo estatico getAllVisualpartners acepte los datos del archivo JSON", () => {
        const visualparnerData = VisualpartnerController.getAllVisualpartners();
        expect(visualparnerData).not.toBeUndefined();
    });

    test("2) Validando que el metodo getStudentsWithCertification del cotrolador retorne so la lista de estudiantes que tengan certificación", () => {
        const visualparnerData = VisualpartnerController.getStudentsWithCertification();
        expect(visualparnerData).not.toBeUndefined();
    })
});
