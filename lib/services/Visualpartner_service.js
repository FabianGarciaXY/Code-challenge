
class VisualpartnerService {

    static getAllVisualpartners(visualpartners) {
        return visualpartners;
    }

    static getStudentsWithCertification(visualpartners) {
        const studentsWithCertification = visualpartners.filter( student => student.haveCertification);
        const listOfEmails = studentsWithCertification.map( student => student.email);
        return listOfEmails;
    }

    static getStudentsByCredits(visualpartners) {
        const listOfStudents = visualpartners.filter( student => student.credits >= 500 );
        return listOfStudents;
    }
}

module.exports = VisualpartnerService;
