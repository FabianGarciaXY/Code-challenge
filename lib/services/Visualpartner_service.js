
class VisualpartnerService {

    static getAllVisualpartners(visualpartners) {
        return visualpartners;
    }

    static getStudentsWithCertification(visualpartners) {
        const visualpartnersWithCertification = visualpartners.filter( student => student.haveCertification == true);
        const listOfEmails = visualpartnersWithCertification.map( student => student.email);
        return listOfEmails;
    }
}

module.exports = VisualpartnerService;
