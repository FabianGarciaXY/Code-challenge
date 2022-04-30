
const VisualpartnerService = require("./../../lib/services/Visualpartner_service");

describe("Suite de tests para la clase VisualpartnerService", () => {

    it("1) Probando el metodo getAllVisualpartners retorne todos los valores", () => {

        const visualpartners = VisualpartnerService.getAllVisualpartners();
        expect(visualpartners).not.toBeUndefined();
    })
})