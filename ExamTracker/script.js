// script.js
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('nav ul li a');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            tabContents.forEach(content => content.classList.remove('active'));
            tabs.forEach(tab => tab.classList.remove('active'));

            target.classList.add('active');
            this.classList.add('active');
        });
    });

    // Initialize with the first tab active
    tabs[0].click();

    // Exam data
    const workExams = [
        { number: 1, name: "UPSC CSE (IAS IES)", lastDate: "2024-07-01", nextAnnouncement: "2024-08-01", lastUpdated: "2024-06-20", status: "offline" },
        { number: 2, name: "CTET", lastDate: "2024-07-15", nextAnnouncement: "2024-08-15", lastUpdated: "2024-06-21", status: "offline" },
        { number: 3, name: "SBI Probationary Officer", lastDate: "2024-08-01", nextAnnouncement: "2024-09-01", lastUpdated: "2024-06-22", status: "offline" },
        { number: 4, name: "SBI SO", lastDate: "2024-07-25", nextAnnouncement: "2024-08-25", lastUpdated: "2024-06-23", status: "offline" },
        { number: 5, name: "SBI Clerk", lastDate: "2024-08-10", nextAnnouncement: "2024-09-10", lastUpdated: "2024-06-24", status: "offline" },
        { number: 6, name: "IBPS Probationary Officer", lastDate: "2024-08-20", nextAnnouncement: "2024-09-20", lastUpdated: "2024-06-25", status: "offline" },
        { number: 7, name: "IBPS Clerk", lastDate: "2024-07-30", nextAnnouncement: "2024-08-30", lastUpdated: "2024-06-26", status: "offline" },
        { number: 8, name: "IBPS SO", lastDate: "2024-08-15", nextAnnouncement: "2024-09-15", lastUpdated: "2024-06-27", status: "offline" },
        { number: 9, name: "IBPS RRB", lastDate: "2024-09-01", nextAnnouncement: "2024-10-01", lastUpdated: "2024-06-28", status: "offline" },
        { number: 10, name: "SSC CGL", lastDate: "2024-09-10", nextAnnouncement: "2024-10-10", lastUpdated: "2024-06-29", status: "offline" },
        { number: 11, name: "SSC CHSL", lastDate: "2024-07-20", nextAnnouncement: "2024-08-20", lastUpdated: "2024-06-30", status: "offline" },
        { number: 12, name: "RRB NTPC", lastDate: "2024-08-05", nextAnnouncement: "2024-09-05", lastUpdated: "2024-07-01", status: "offline" },
        { number: 13, name: "RRB Group D", lastDate: "2024-09-15", nextAnnouncement: "2024-10-15", lastUpdated: "2024-07-02", status: "offline" },
        { number: 14, name: "NDA", lastDate: "2024-07-25", nextAnnouncement: "2024-08-25", lastUpdated: "2024-07-03", status: "offline" },
        { number: 15, name: "CDS SSB", lastDate: "2024-08-30", nextAnnouncement: "2024-09-30", lastUpdated: "2024-07-04", status: "offline" },
        { number: 16, name: "AFCAT", lastDate: "2024-09-20", nextAnnouncement: "2024-10-20", lastUpdated: "2024-07-05", status: "offline" },
        { number: 17, name: "INET", lastDate: "2024-07-10", nextAnnouncement: "2024-08-10", lastUpdated: "2024-07-06", status: "offline" },
        { number: 18, name: "CEE", lastDate: "2024-09-05", nextAnnouncement: "2024-10-05", lastUpdated: "2024-07-07", status: "offline" }
    ];
    

    const tnFocusExams = [
        { number: 1, name: "TNPSC GROUP 1", lastDate: "2024-07-15", nextAnnouncement: "2024-09-10", lastUpdated: "2024-06-22", status: "offline" },
        { number: 2, name: "TNPSC GROUP 2", lastDate: "2024-07-30", nextAnnouncement: "2024-09-25", lastUpdated: "2024-06-23", status: "offline" },
        { number: 3, name: "TNPSC GROUP 3", lastDate: "2024-08-10", nextAnnouncement: "2024-09-30", lastUpdated: "2024-06-24", status: "offline" },
        { number: 4, name: "TNPSC GROUP 4", lastDate: "2024-08-25", nextAnnouncement: "2024-10-10", lastUpdated: "2024-06-25", status: "offline" },
        { number: 5, name: "TNPSC GROUP 5A", lastDate: "2024-09-05", nextAnnouncement: "2024-10-20", lastUpdated: "2024-06-26", status: "offline" },
        { number: 6, name: "TNPSC CESE", lastDate: "2024-07-05", nextAnnouncement: "2024-08-20", lastUpdated: "2024-06-27", status: "offline" },
        { number: 7, name: "TNPSC GROUP 6", lastDate: "2024-08-15", nextAnnouncement: "2024-09-25", lastUpdated: "2024-06-28", status: "offline" },
        { number: 8, name: "TNPSC GROUP 7A", lastDate: "2024-09-01", nextAnnouncement: "2024-10-05", lastUpdated: "2024-06-29", status: "offline" },
        { number: 9, name: "TNPSC GROUP 7B", lastDate: "2024-09-20", nextAnnouncement: "2024-10-15", lastUpdated: "2024-06-30", status: "offline" },
        { number: 10, name: "TNPSC GROUP 8 (Age 25)", lastDate: "2024-07-25", nextAnnouncement: "2024-08-20", lastUpdated: "2024-07-01", status: "offline" },
        { number: 11, name: "TNPSC ASE", lastDate: "2024-08-30", nextAnnouncement: "2024-09-30", lastUpdated: "2024-07-02", status: "offline" },
        { number: 12, name: "TNPSC DEO", lastDate: "2024-09-10", nextAnnouncement: "2024-10-10", lastUpdated: "2024-07-03", status: "offline" },
        { number: 13, name: "TN TET", lastDate: "2024-09-25", nextAnnouncement: "2024-10-25", lastUpdated: "2024-07-04", status: "offline" },
        { number: 14, name: "TN SET", lastDate: "2024-07-10", nextAnnouncement: "2024-08-10", lastUpdated: "2024-07-05", status: "offline" },
        { number: 15, name: "TNUSRB", lastDate: "2024-09-05", nextAnnouncement: "2024-10-05", lastUpdated: "2024-07-06", status: "offline" }
    ];
    

    const educationalExams = [
        { number: 1, name: "NEET", lastDate: "2024-08-10", nextAnnouncement: "2024-10-01", lastUpdated: "2024-06-21", status: "offline" },
        { number: 2, name: "IIT JEE", lastDate: "2024-09-01", nextAnnouncement: "2024-10-15", lastUpdated: "2024-06-22", status: "offline" },
        { number: 3, name: "CUET UG", lastDate: "2024-07-20", nextAnnouncement: "2024-09-05", lastUpdated: "2024-06-23", status: "offline" },
        { number: 4, name: "GATE PG", lastDate: "2024-08-25", nextAnnouncement: "2024-10-10", lastUpdated: "2024-06-24", status: "offline" },
        { number: 5, name: "CEETA", lastDate: "2024-09-05", nextAnnouncement: "2024-10-20", lastUpdated: "2024-06-25", status: "offline" },
        { number: 6, name: "TANCET", lastDate: "2024-07-05", nextAnnouncement: "2024-08-20", lastUpdated: "2024-06-26", status: "offline" },
        { number: 7, name: "CAT IIMs", lastDate: "2024-08-15", nextAnnouncement: "2024-09-25", lastUpdated: "2024-06-27", status: "offline" },
        { number: 8, name: "MAT", lastDate: "2024-09-01", nextAnnouncement: "2024-10-05", lastUpdated: "2024-06-28", status: "offline" },
        { number: 9, name: "XAT", lastDate: "2024-09-20", nextAnnouncement: "2024-10-15", lastUpdated: "2024-06-29", status: "offline" },
        { number: 10, name: "GMAT", lastDate: "2024-07-25", nextAnnouncement: "2024-08-20", lastUpdated: "2024-06-30", status: "offline" },
        { number: 11, name: "CMAT", lastDate: "2024-08-30", nextAnnouncement: "2024-09-30", lastUpdated: "2024-07-01", status: "offline" },
        { number: 12, name: "NMAT", lastDate: "2024-09-10", nextAnnouncement: "2024-10-10", lastUpdated: "2024-07-02", status: "offline" },
        { number: 13, name: "ATMA", lastDate: "2024-09-25", nextAnnouncement: "2024-10-25", lastUpdated: "2024-07-03", status: "offline" },
        { number: 14, name: "CSIR NET", lastDate: "2024-07-10", nextAnnouncement: "2024-08-10", lastUpdated: "2024-07-04", status: "offline" },
        { number: 15, name: "UGC NET", lastDate: "2024-09-05", nextAnnouncement: "2024-10-05", lastUpdated: "2024-07-05", status: "offline" },
        { number: 16, name: "ICMR JRF", lastDate: "2024-07-15", nextAnnouncement: "2024-08-15", lastUpdated: "2024-07-06", status: "offline" },
        { number: 17, name: "ICAI CA", lastDate: "2024-09-01", nextAnnouncement: "2024-10-01", lastUpdated: "2024-07-07", status: "offline" },
        { number: 18, name: "CLAT (UG, PG)", lastDate: "2024-07-20", nextAnnouncement: "2024-08-20", lastUpdated: "2024-07-08", status: "offline" },
        { number: 19, name: "IELTS", lastDate: "2024-08-05", nextAnnouncement: "2024-09-05", lastUpdated: "2024-07-09", status: "offline" },
        { number: 20, name: "TOEFL", lastDate: "2024-09-15", nextAnnouncement: "2024-10-15", lastUpdated: "2024-07-10", status: "offline" },
        { number: 21, name: "GRE", lastDate: "2024-09-25", nextAnnouncement: "2024-10-25", lastUpdated: "2024-07-11", status: "offline" }
    ];
    

    function renderExams(exams, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = exams.map(exam => `
            <tr>
                <td>${exam.number}</td>
                <td>${exam.name}</td>
                <td>${exam.lastDate}</td>
                <td>${exam.nextAnnouncement}</td>
                <td>${exam.lastUpdated}</td>
                <td class="status ${exam.status}"><span></span>${exam.status.charAt(0).toUpperCase() + exam.status.slice(1)}</td>
            </tr>
        `).join('');
    }

    renderExams(workExams, 'work-exams');
    renderExams(tnFocusExams, 'tn-focus-exams');
    renderExams(educationalExams, 'educational-exams');
});
