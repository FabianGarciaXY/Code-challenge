
const Reader = require("./../../lib/utils/Reader");


describe("Tests para el archivo Reader.js", () => {

    it("Validando que el metodo reader lea el archivo JSON", () => {
        const visualpartner_test = Reader.readJson("./../data_test/visualpartner_testdata.json");
        expect(visualpartner_test).not.toBeUndefined;
        expect(visualpartner_test.length).toBe(2);
    })
});