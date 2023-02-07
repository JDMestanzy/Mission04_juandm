$('#btnCalculate').click(function (event) {
    event.preventDefault();
    let assignment = parseFloat($('#Assignment').val());
    let groupProject = parseFloat($('#GroupProject').val());
    let quiz = parseFloat($('#Quiz').val());
    let midterm = parseFloat($('#Midterm').val());
    let finalExam = parseFloat($('#Final').val());
    let intex = parseFloat($('#Intex').val());

    /*checks if values are empty or outside of boundaries*/

    if (assignment < 0 || assignment > 100 ||
        groupProject < 0 || groupProject > 100 ||
        quiz < 0 || quiz > 100 ||
        midterm < 0 || midterm > 100 ||
        finalExam < 0 || finalExam > 100 ||
        intex < 0 || intex > 100) {
        alert("Input must be a number between 0 and 100");
        return;
    }

    let total = (assignment * 0.5) + (groupProject * 0.1) + (quiz * 0.1) + (midterm * 0.1) + (finalExam * 0.1) + (intex * 0.1);

    let grade;
    if (total >= 94) {
        grade = "A";
    } else if (total >= 90) {
        grade = "A-";
    } else if (total >= 87) {
        grade = "B+";
    } else if (total >= 84) {
        grade = "B";
    } else if (total >= 80) {
        grade = "B-";
    } else if (total >= 77) {
        grade = "C+";
    } else if (total >= 74) {
        grade = "C";
    } else if (total >= 70) {
        grade = "D+";
    } else if (total >= 67) {
        grade = "D";
    } else if (total >= 60) {
        grade = "D-";
    } else {
        grade = "E";
    }

    alert("Total Grade as Percentage: " + total.toFixed(2) + "%\n Final Letter Grade: " + grade);
});
