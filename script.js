// Example data (This can be replaced with dynamic user input)
const studentData = {
    candidateName: "Kamalesh",
    regNo: "2023001",
    enrolledNo: "12345678",
    centerName: "Hindusthan College of Engineering and Techology",
    subjects: {
        science: { theory: 80, practice: 15, total: 95 , word: "NinetyFive"},
        Calculus: { theory: 70, practice: 13, total: 83, word: "EightyThree" },
        Physics : { theory: 80, practice: 15, total: 95, word: "NinetyFive" },
        Chemistry : { theory: 60, practice: 15, total: 75, word: "SeventyFive" },
        python : { theory: 80, practice: 12, total: 92, word: "NinetyTwo" }
    },
    grandTotal: 440,
    totalInWords: "Four Hundred Forty",
    examDate: "May 2023",
    subjectsOffered: "T5&P5=5",
    result: "PASS",
    percentage: "88%",
    grade: "A",
    resultDate: "2023-07-01"
};

// Function to update the HTML with student data
function updateStudentData(data) {
    document.getElementById("candidateName").innerText = data.candidateName;
    document.getElementById("regNo").innerText = data.regNo;
    document.getElementById("enrolledNo").innerText = data.enrolledNo;
    document.getElementById("centerName").innerText = data.centerName;

    document.getElementById("scienceTheory").innerText = data.subjects.science.theory;
    document.getElementById("sciencePractice").innerText = data.subjects.science.practice;
    document.getElementById("scienceTotal").innerText = data.subjects.science.total;
    document.getElementById("scienceWord").innerText = data.subjects.science.word;

    document.getElementById("scienceTheory1").innerText = data.subjects.Calculus.theory;
    document.getElementById("sciencePractice1").innerText = data.subjects.Calculus.practice;
    document.getElementById("scienceTotal1").innerText = data.subjects.Calculus.total;
    document.getElementById("scienceWord1").innerText = data.subjects.Calculus.word;

    document.getElementById("scienceTheory2").innerText = data.subjects.Physics.theory;
    document.getElementById("sciencePractice2").innerText = data.subjects.Physics.practice;
    document.getElementById("scienceTotal2").innerText = data.subjects.Physics.total;
    document.getElementById("scienceWord2").innerText = data.subjects.Physics.word;

    document.getElementById("scienceTheory3").innerText = data.subjects.Chemistry.theory;
    document.getElementById("sciencePractice3").innerText = data.subjects.Chemistry.practice;
    document.getElementById("scienceTotal3").innerText = data.subjects.Chemistry.total;
    document.getElementById("scienceWord3").innerText = data.subjects.Chemistry.word;

    document.getElementById("scienceTheory4").innerText = data.subjects.python.theory;
    document.getElementById("sciencePractice4").innerText = data.subjects.python.practice;
    document.getElementById("scienceTotal4").innerText = data.subjects.python.total;
    document.getElementById("scienceWord4").innerText = data.subjects.python.word;


    document.getElementById("grandTotal").innerText = data.grandTotal;
    document.getElementById("totalInWords").innerText = data.totalInWords;
    document.getElementById("examDate").innerText = data.examDate;
    document.getElementById("subjectsOffered").innerText = data.subjectsOffered;
    document.getElementById("result").innerText = data.result;
    document.getElementById("percentage").innerText = data.percentage;
    document.getElementById("grade").innerText = data.grade;
    document.getElementById("resultDate").innerText = data.resultDate;
}

// Update the page with the example data
updateStudentData(studentData);
