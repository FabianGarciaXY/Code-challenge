
class VisualpartnerService {

    static getAllVisualpartners(visualpartners) {
        return visualpartners;
    }

    static getStudentsWithCertification(visualpartners) {
        const studentsWithCertification = visualpartners.filter( student => student.haveCertification);
        const listOfEmails = studentsWithCertification.map( student => student.email);
        return listOfEmails;
    }
}

module.exports = VisualpartnerService;
