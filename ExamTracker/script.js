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

    // DEV NOTE !!! Please try to use svg files if you can for logo's as they are scalable and better than other formats. 
    const workExams = [
        { number: 1, name: "UPSC CSE (IAS IES)",logo: "./Media/Emblem_of_India.svg", sector: "Civil Services", lastDate: "2024-07-01", nextAnnouncement: "2024-08-01", lastUpdated: "2024-06-20", linkToOfficialWebsite: "", status: "offline" },
        { number: 2, name: "CTET",logo: "./Media/ctet.png", sector: "Education", lastDate: "2024-07-15", nextAnnouncement: "2024-08-15", lastUpdated: "2024-06-21", linkToOfficialWebsite: "", status: "offline" },
        { number: 3, name: "SBI Probationary Officer",logo: "./Media/SBI.jpg", sector: "Banking", lastDate: "2024-08-01", nextAnnouncement: "2024-09-01", lastUpdated: "2024-06-22", linkToOfficialWebsite: "", status: "offline" },
        { number: 4, name: "SBI SO",logo: "./Media/SBI.jpg", sector: "Banking", lastDate: "2024-07-25", nextAnnouncement: "2024-08-25", lastUpdated: "2024-06-23", linkToOfficialWebsite: "", status: "online" },
        { number: 5, name: "SBI Clerk",logo: "./Media/SBI.jpg", sector: "Banking", lastDate: "2024-08-10", nextAnnouncement: "2024-09-10", lastUpdated: "2024-06-24", linkToOfficialWebsite: "", status: "offline" },
        { number: 6, name: "IBPS Probationary Officer",logo: "./Media/ibps.png", sector: "Banking", lastDate: "2024-08-20", nextAnnouncement: "2024-09-20", lastUpdated: "2024-06-25", linkToOfficialWebsite: "", status: "offline" },
        { number: 7, name: "IBPS Clerk",logo: "./Media/ibps.png", sector: "Banking", lastDate: "2024-07-30", nextAnnouncement: "2024-08-30", lastUpdated: "2024-06-26", linkToOfficialWebsite: "", status: "offline" },
        { number: 8, name: "IBPS SO",logo: "./Media/ibps.png", sector: "Banking", lastDate: "2024-08-15", nextAnnouncement: "2024-09-15", lastUpdated: "2024-06-27", linkToOfficialWebsite: "", status: "offline" },
        { number: 9, name: "IBPS RRB",logo: "./Media/ibps.png", sector: "Banking", lastDate: "2024-09-01", nextAnnouncement: "2024-10-01", lastUpdated: "2024-06-28", linkToOfficialWebsite: "", status: "offline" },
        { number: 10, name: "SSC CGLE",logo: "./Media/SSC.png", sector: "Government Recruitment", lastDate: "2024-09-10", nextAnnouncement: "2024-10-10", lastUpdated: "2024-06-29", linkToOfficialWebsite: "", status: "online" },
        { number: 11, name: "SSC CHSL",logo: "./Media/SSC.png", sector: "Government Recruitment", lastDate: "2024-07-20", nextAnnouncement: "2024-08-20", lastUpdated: "2024-06-30", linkToOfficialWebsite: "", status: "offline" },
        { number: 12, name: "RRB NTPC",logo: "./Media/RRB.png", sector: "Railways", lastDate: "2024-08-05", nextAnnouncement: "2024-09-05", lastUpdated: "2024-07-01", linkToOfficialWebsite: "", status: "offline" },
        { number: 13, name: "RRB Group D",logo: "./Media/RRB.png", sector: "Railways", lastDate: "2024-09-15", nextAnnouncement: "2024-10-15", lastUpdated: "2024-07-02", linkToOfficialWebsite: "", status: "offline" },
        { number: 14, name: "NDA",logo: "./Media/NDA.png", sector: "Armed Forces", lastDate: "2024-07-25", nextAnnouncement: "2024-08-25", lastUpdated: "2024-07-03", linkToOfficialWebsite: "", status: "offline" },
        { number: 15, name: "CDS SSB",logo: "./Media/CDS.png", sector: "Armed Forces", lastDate: "2024-08-30", nextAnnouncement: "2024-09-30", lastUpdated: "2024-07-04", linkToOfficialWebsite: "", status: "offline" },
        { number: 16, name: "AFCAT",logo: "./Media/AFCAT.png", sector: "Armed Forces", lastDate: "2024-09-20", nextAnnouncement: "2024-10-20", lastUpdated: "2024-07-05", linkToOfficialWebsite: "", status: "offline" },
        { number: 17, name: "INET",logo: "./Media/Navy.png", sector: "Armed Forces", lastDate: "2024-07-10", nextAnnouncement: "2024-08-10", lastUpdated: "2024-07-06", linkToOfficialWebsite: "", status: "offline" },
        { number: 18, name: "CEE",logo: "./Media/Army.png", sector: "Armed Forces", lastDate: "2024-09-05", nextAnnouncement: "2024-10-05", lastUpdated: "2024-07-07", linkToOfficialWebsite: "", status: "offline" }
    ];
    

    const tnFocusExams = [
        { number: 1, name: "TNUSRB",logo: "./Media/TN_EDUCATION/sylendrababu.jpg", sector: "TN Police", lastDate: "2024-09-05", nextAnnouncement: "2024-10-05", lastUpdated: "2024-07-06", linkToOfficialWebsite: "", status: "offline" },
        { number: 2, name: "TNPSC GROUP 1",logo: "./Media/TN_EDUCATION/T._Udhayachandran.jpg",  sector: "Civil Services",  lastDate: "2024-07-15", nextAnnouncement: "2024-09-10", lastUpdated: "2024-06-22", linkToOfficialWebsite: "", status: "offline" },
        { number: 3, name: "TNPSC GROUP 2",logo: "./Media/TN_EDUCATION/TamilNadu_Logo.svg",   sector: "Civil Services",  lastDate: "2024-07-30", nextAnnouncement: "2024-09-25", lastUpdated: "2024-06-23", linkToOfficialWebsite: "", status: "offline" },
        { number: 4, name: "TNPSC GROUP 3",logo: "./Media/TN_EDUCATION/TamilNadu_Logo.svg",   sector: "Civil Services",  lastDate: "2024-08-10", nextAnnouncement: "2024-09-30", lastUpdated: "2024-06-24", linkToOfficialWebsite: "", status: "offline" },
        { number: 5, name: "TNPSC GROUP 4",logo: "./Media/TN_EDUCATION/TamilNadu_Logo.svg",   sector: "Civil Services",  lastDate: "2024-08-25", nextAnnouncement: "2024-10-10", lastUpdated: "2024-06-25", linkToOfficialWebsite: "", status: "offline" },
        { number: 6, name: "TNPSC GROUP 5A",logo: "./Media/TN_EDUCATION/TamilNadu_Logo.svg",   sector: "Civil Services",  lastDate: "2024-09-05", nextAnnouncement: "2024-10-20", lastUpdated: "2024-06-26", linkToOfficialWebsite: "", status: "offline" },
        { number: 7, name: "TNPSC CESE",logo: "./Media/TN_EDUCATION/TamilNadu_Logo.svg",   sector: "Civil Services",  lastDate: "2024-07-05", nextAnnouncement: "2024-08-20", lastUpdated: "2024-06-27", linkToOfficialWebsite: "", status: "offline" },
        { number: 8, name: "TNPSC GROUP 6",logo: "./Media/TN_EDUCATION/sekarbaabu.gif",   sector: "HR&CE",  lastDate: "2024-08-15", nextAnnouncement: "2024-09-25", lastUpdated: "2024-06-28", linkToOfficialWebsite: "", status: "offline" },
        { number: 9, name: "TNPSC GROUP 7A",logo: "./Media/TN_EDUCATION/sekarbaabu.gif",   sector: "HR&CE",  lastDate: "2024-09-01", nextAnnouncement: "2024-10-05", lastUpdated: "2024-06-29", linkToOfficialWebsite: "", status: "offline" },
        { number: 10, name: "TNPSC GROUP 7B",logo: "./Media/TN_EDUCATION/sekarbaabu.gif",   sector: "HR&CE",  lastDate: "2024-09-20", nextAnnouncement: "2024-10-15", lastUpdated: "2024-06-30", linkToOfficialWebsite: "", status: "offline" },
        { number: 11, name: "TNPSC GROUP 8",logo: "./Media/TN_EDUCATION/sekarbaabu.gif",   sector: "HR&CE",  lastDate: "2024-07-25", nextAnnouncement: "2024-08-20", lastUpdated: "2024-07-01", linkToOfficialWebsite: "", status: "offline" },
        { number: 12, name: "TNPSC ASE",logo: "./Media/TN_EDUCATION/TamilNadu_Logo.svg",   sector: "Civil Services",  lastDate: "2024-08-30", nextAnnouncement: "2024-09-30", lastUpdated: "2024-07-02", linkToOfficialWebsite: "", status: "offline" },
        { number: 13, name: "TNPSC DEO",logo: "./Media/TN_EDUCATION/TamilNadu_Logo.svg",   sector: "Civil Services",  lastDate: "2024-09-10", nextAnnouncement: "2024-10-10", lastUpdated: "2024-07-03", linkToOfficialWebsite: "", status: "offline" },
        { number: 14, name: "TN TET",logo: "./Media/TN_EDUCATION/radhakrishnan.jpeg",   sector: "Education",  lastDate: "2024-09-25", nextAnnouncement: "2024-10-25", lastUpdated: "2024-07-04", linkToOfficialWebsite: "", status: "offline" },
        { number: 15, name: "TN SET",logo: "./Media/TN_EDUCATION/CVRAMAN.jpeg",   sector: "Education",  lastDate: "2024-07-10", nextAnnouncement: "2024-08-10", lastUpdated: "2024-07-05", linkToOfficialWebsite: "", status: "offline" }
        
    ];
    

    const educationalExams = [
        { number: 1, name: "NEET",logo: "./Media/Educational/NEET.jpg",   sector: "Medical",  lastDate: "2024-08-10", nextAnnouncement: "2024-10-01", lastUpdated: "2024-06-21", linkToOfficialWebsite: "", status: "offline" },
        { number: 2, name: "IIT JEE",logo: "./Media/Educational/JEE.jpg",   sector: "Engineering",  lastDate: "2024-09-01", nextAnnouncement: "2024-10-15", lastUpdated: "2024-06-22", linkToOfficialWebsite: "", status: "offline" },
        { number: 3, name: "CUET UG",logo: "./Media/Educational/NTA.jpg",   sector: "Common Admissions",  lastDate: "2024-07-20", nextAnnouncement: "2024-09-05", lastUpdated: "2024-06-23", linkToOfficialWebsite: "", status: "offline" },
        { number: 4, name: "GATE PG",logo: "./Media/Educational/IIT_Madras_Logo.svg",   sector: "Engineering",  lastDate: "2024-08-25", nextAnnouncement: "2024-10-10", lastUpdated: "2024-06-24", linkToOfficialWebsite: "", status: "offline" },
        { number: 5, name: "CEETA",logo: "./Media/Educational/Anna_University_Logo.svg.png",   sector: "Anna University",  lastDate: "2024-09-05", nextAnnouncement: "2024-10-20", lastUpdated: "2024-06-25", linkToOfficialWebsite: "", status: "offline" },
        { number: 6, name: "TANCET",logo: "./Media/Educational/Anna_University_Logo.svg.png",   sector: "AU PG",  lastDate: "2024-07-05", nextAnnouncement: "2024-08-20", lastUpdated: "2024-06-26", linkToOfficialWebsite: "", status: "offline" },
        { number: 7, name: "CAT IIMs",logo: "./Media/Educational/IIT_Madras_Logo.svg",   sector: "Management",  lastDate: "2024-08-15", nextAnnouncement: "2024-09-25", lastUpdated: "2024-06-27", linkToOfficialWebsite: "", status: "offline" },
        { number: 8, name: "MAT",logo: "./Media/Educational/Management_Aptitude_Test_Logo.jpg",   sector: "Management",  lastDate: "2024-09-01", nextAnnouncement: "2024-10-05", lastUpdated: "2024-06-28", linkToOfficialWebsite: "", status: "offline" },
        { number: 9, name: "XAT",logo: "./Media/Educational/XAT.png",   sector: "Management",  lastDate: "2024-09-20", nextAnnouncement: "2024-10-15", lastUpdated: "2024-06-29", linkToOfficialWebsite: "", status: "offline" },
        { number: 10, name: "GMAT",logo: "./Media/Educational/GMAT.png",   sector: "Management",  lastDate: "2024-07-25", nextAnnouncement: "2024-08-20", lastUpdated: "2024-06-30", linkToOfficialWebsite: "", status: "offline" },
        { number: 11, name: "CMAT",logo: "./Media/Educational/CMAT.jpeg",   sector: "Management",  lastDate: "2024-08-30", nextAnnouncement: "2024-09-30", lastUpdated: "2024-07-01", linkToOfficialWebsite: "", status: "offline" },
        { number: 12, name: "NMAT",logo: "./Media/Educational/NMAT.png",   sector: "Management",  lastDate: "2024-09-10", nextAnnouncement: "2024-10-10", lastUpdated: "2024-07-02", linkToOfficialWebsite: "", status: "offline" },
        { number: 13, name: "ATMA",logo: "./Media/Educational/ATMA.jpeg",   sector: "Management",  lastDate: "2024-09-25", nextAnnouncement: "2024-10-25", lastUpdated: "2024-07-03", linkToOfficialWebsite: "", status: "offline" },
        { number: 14, name: "CSIR NET",logo: "./Media/Educational/CSIR_NET.jpg",   sector: "Medical",  lastDate: "2024-07-10", nextAnnouncement: "2024-08-10", lastUpdated: "2024-07-04", linkToOfficialWebsite: "", status: "offline" },
        { number: 15, name: "UGC NET",logo: "./Media/Educational/UGC_NET.jpg",   sector: "Medical",  lastDate: "2024-09-05", nextAnnouncement: "2024-10-05", lastUpdated: "2024-07-05", linkToOfficialWebsite: "", status: "offline" },
        { number: 16, name: "ICMR JRF",logo: "./Media/Educational/ICMR.svg",   sector: "Medical",  lastDate: "2024-07-15", nextAnnouncement: "2024-08-15", lastUpdated: "2024-07-06", linkToOfficialWebsite: "", status: "offline" },
        { number: 17, name: "ICAI CA",logo: "./Media/Educational/CA.jpg",   sector: "Charted Accountant",  lastDate: "2024-09-01", nextAnnouncement: "2024-10-01", lastUpdated: "2024-07-07", linkToOfficialWebsite: "", status: "offline" },
        { number: 18, name: "CLAT (UG, PG)",logo: "./Media/Educational/CLAT.png",   sector: "Law",  lastDate: "2024-07-20", nextAnnouncement: "2024-08-20", lastUpdated: "2024-07-08", linkToOfficialWebsite: "", status: "offline" },
        { number: 19, name: "IELTS",logo: "./Media/Educational/IELTS.png",   sector: "Overseas",  lastDate: "2024-08-05", nextAnnouncement: "2024-09-05", lastUpdated: "2024-07-09", linkToOfficialWebsite: "", status: "offline" },
        { number: 20, name: "TOEFL",logo: "./Media/Educational/TOEFL.png",   sector: "Overseas",  lastDate: "2024-09-15", nextAnnouncement: "2024-10-15", lastUpdated: "2024-07-10", linkToOfficialWebsite: "", status: "offline" },
        { number: 21, name: "GRE",logo: "./Media/Educational/GRE.png",   sector: "Overseas",  lastDate: "2024-09-25", nextAnnouncement: "2024-10-25", lastUpdated: "2024-07-11", linkToOfficialWebsite: "", status: "offline" }
    ];

    function renderExams(exams, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = exams.map(exam => `
            <tr>
                <td>${exam.number}</td>
                <td class="exam-name">
                    <img src="${exam.logo}" alt=";(" class="exam-logo">
                    ${exam.name}
                </td>
                <td>${exam.sector}</td>
                <td>${exam.lastDate}</td>
                <td>${exam.nextAnnouncement}</td>
                <td>${exam.lastUpdated}</td>
                <td><a href="${exam.linkToOfficialWebsite}">Link</a></td>
                <td class="status ${exam.status}"><span></span>${exam.status.charAt(0).toUpperCase() + exam.status.slice(1)}</td>
            </tr>
        `).join('');
    }

    renderExams(workExams, 'work-exams');
    renderExams(tnFocusExams, 'tn-focus-exams');
    renderExams(educationalExams, 'educational-exams');
});
// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            const statusCell = row.querySelector('.status');
            if (statusCell && statusCell.classList.contains('online')) {
                row.classList.add('online-row');
            }
        });
    });
});




window.addEventListener('DOMContentLoaded', () => {
    // コンテナを指定
    const section = document.querySelector('.cherry-blossom-container');
  
    // 花びらを生成する関数
    const createPetal = () => {
      const petalEl = document.createElement('span');
      petalEl.className = 'petal';
      const minSize = 10;
      const maxSize = 15;
      const size = Math.random() * (maxSize + 1 - minSize) + minSize;
      petalEl.style.width = `${size}px`;
      petalEl.style.height = `${size}px`;
      petalEl.style.left = Math.random() * innerWidth + 'px';
      section.appendChild(petalEl);
  
      // 一定時間が経てば花びらを消す
      setTimeout(() => {
        petalEl.remove();
      }, 20000);
    }
  
    // 花びらを生成する間隔をミリ秒で指定
    setInterval(createPetal, 300);
  });
