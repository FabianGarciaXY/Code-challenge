const VisualpartnerController = require("./../lib/controllers/Visualpartner_controller");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ msj: "Hiii" });
});

app.get("/v1/students/", (req, res) => {
    const allStudents = VisualpartnerController.getAllVisualpartners();
    res.status(200).json(allStudents);
});

app.get("/v1/students/haveCertification", (req, res) => {
    const studentsWithCertification = VisualpartnerController.getStudentsWithCertification();
    res.status(200).json(studentsWithCertification);
});

app.get("/v1/students/credits", (req, res) => {
    const students = VisualpartnerController.getStudentsByCredits();
    res.status(200).json(students);
});

app.listen(port, () => {
    // console.log(`API listening in port ${port} at ${new Date()}`);
});
