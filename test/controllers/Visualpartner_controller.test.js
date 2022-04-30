const VisualpartnerController = require("../../lib/controllers/Visualpartner_controller");

describe("Set de tests para el controllador VisualpartnerController", () => {
    test("1) Validanto el metodo estatico getAllVisualpartners acepte los datos del archivo JSON", () => {
        const visualparnerData = VisualpartnerController.getAllVisualpartners();
        expect(visualparnerData).not.toBeUndefined();
    });
});
