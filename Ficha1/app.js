
// linha 5
function calculateGrade(gradeP, gradeT){
    var grade = gradeP * 0.7 + gradeT * 0.3;

    console.log("A sua nota foi: " + grade);
    if (grade < 9.5) {
        console.log("Reprovado");
    } else {
        console.log("Aprovado");
    }
}

//calculateGrade(12, 10);

// linha 6
function monthName(number){

    if (number == 1) {
        console.log("Janeiro")
    }
    else if (number == 2) {
        console.log("Fevereiro")
    }
    else if (number == 3) {
        console.log("Março")
    }
    else if (number == 4) {
        console.log("Abril")
    }
    else if (number == 5) {
        console.log("Maio")
    }
    else if (number == 6) {
        console.log("Junho")
    }
    else if (number == 7) {
        console.log("Julho")
    }
    else if (number == 8) {
        console.log("Agosto")
    }
    else if (number == 9) {
        console.log("Setembro")
    }
    else if (number == 10) {
        console.log("Outubro")
    }
    else if (number == 11) {
        console.log("Novembro")
    }
    else if (number == 12) {
        console.log("Dezembro")
    }
    else {
        console.log("Número inválido")
    }
}

//monthName(12)

// linha 7


