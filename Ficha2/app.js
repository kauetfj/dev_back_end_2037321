// linha 1
function IMC(peso, altura){
    imc=peso/((altura)**2);
    if(imc<18.5){
        console.log("Abaixo do peso");
    }
    else if (imc>=18.5 && imc<25){
        console.log("No peso normal");
    }
    else if (imc>=25 && imc<30){
        console.log("Acima do peso");
    }
    else{
        console.log("Obeso");
    }
}

// linha 2
function reverse(str) {
    var splittedStr = str.split(" ");
    var reversedStr = "";
    for (let j = 0; j < splittedStr.length; j++) {
       var word = splittedStr[j]
       for (var i = word.length - 1; i >=0; i--) {
        reversedStr+= word[i];
        }
    }  
    return reversedStr;
}

// linha 3
var str = "ola mundo";
var count = countVogals(str);

function countVogals(str){
    var count = 0;
    for(var i = 0; i < str.length; i++) {
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
            count++;
        }
    }
    return count;
}

//countVogals()

// linha 4
var letter = "a";
var str1 = "Ola Mundo";
function countLetter(str1, letter){
    var count = 0;
    for(var i = 0; i < str.length; i++) {
        if (str[i] == letter){
            count++;
        }
    }
    return count;
}

//countLetter()

//linha 5
function calculateTime(he, me, se, hs, ms, ss){
    var totalTimeES = he * 3600 + me * 60 + se;
    var totalTimeSS = hs * 3600 + ms * 60 + ss;

    var diffInSeconds = totalTimeSS - totalTimeES;
    console.log(diffInSeconds);

    var hours = Math.floor((diffInSeconds / 3600));
    var remainderHours = diffInSeconds % 3600;

    var minutes = Math.floor((remainderHours / 60));
    var seconds = remainderHours % 60;



    console.log("O empregado trabalhou: " + hours + "h " + minutes + "m " + seconds + "s ");
    
    
}

//calculateTime(8, 0, 0, 9, 1, 1);

// linha 6
function rectangle(width, heigth){

    var line = "";
    for (var j = 0; j < width; j++){
        line += "*";
    }

    for (var i = 0; i < heigth; i++){
        console.log(line);
    }
}

//rectangle(3,3);

// linha 7
function triangle(heigth){

    var line1 = "*";
    for (var i = 0; i < heigth; i++){
        console.log(line1);
        line1 += "*";
    }

}

//triangle(10);

//linha 8 
function box(width, heigth){

    for (var i = 0; i < heigth; i++){
        var line2 = "";
        for(var j = 0; j < width; j++){
            if(i == 0 || i == heigth - 1){
                line2 += "*";
            }
            else{
                if(j == 0 || j == width - 1){
                    line2 += "*";
                }
                else{
                    line2 += " ";
                }
            }
        
        }
        console.log(line2);
    }   
}

//box(10,10);

// linha 9 na Aula

/*var student1 = {
    number: 1000,
    grade: 16
};

var student2 = {
    number: 1001,
    grade: 12
};

var student3 = {
    number: 1002,
    grade: 11
};

var students = [];

students.push(student1);
students.push(student2);
students.push(student3);

console.log(students[0].number);
*/

/*var students = []
for (var i = 0; i < 10; i++){
    var student = {
        number: Math.ceil(Math.random() * 1000),
        grade: Math.ceil(Math.random() * 20)
    };
    students.push(student);
}

function listStudents(students){
    for (var i = 0; i < students.length; i++) {
        var student = students[i];
        console.log ("Number: " + student.number + ", Grade: " + student.grade)   
    }
}

function bestGrade (students){
    var max = students[0].grade;
    var bestStudent = student[0];

    for (var i = 1; i < students.length; i++) {
        if (students[i].grade > max) {
            max = students[i].grade; 
            bestStudent = students[i];
        }    
    }
    console.log ("Best Student - Number: " + bestStudent.number + ", Grade: " + bestStudent.grade) 
}

function main(students){
    var option = 1;
    switch (option) {
        case 1:
            listStudents(students);
            break;
        case 2:
            bestGrade(students);
            break;
        case 3:
            worstGrade(students);
            break;
        case 4:
            averageGrade(students);
            break;
        case 5:

    
        default:
            break;
    }
}

main(students, 1);*/

// linha 9

var student1 = {
    number: 1000,
    grade: 13
};
var student2 = {
    number: 1001,
    grade: 18
};
var student3 = {
    number: 1002,
    grade: 9
};
var student4 = {
    number: 1003,
    grade: 16
};
var student5 = {
    number: 1004,
    grade: 11
};

for (let i = 0; i < 10; i++){
    var student
}

var students = [];

students.push(student1);
students.push(student2);
students.push(student3);
students.push(student4);
students.push(student5);

function listStudents(students){
    for (let i = 0; i < students.length; i++) {
        var student = students[i];
        console.log ("Number: " + student.number + ", Grade: " + student.grade)
        
    }
}

function bestGrade(students) {
    var max = students[0].grade;
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade > max){
            max = students[i].grade;
            bestStudent = students[i].number;
        }
    }
    console.log ("Best Student - Number: " + bestStudent + ", Grade: " + max)  
}

function worstGrade(students){
    var min = students[0].grade;
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade <= min){
            min = students[i].grade;
            worstStudent = students[i].number;
        }
    }
    console.log("Worst Student - Number: " + worstStudent + ", Grade: " + min) 
}

function averageGrade(students){ 
    var average = 0;
    var aveGrade = 0;
    var ave1 = 0;
    var ave2 = 0;
    for (let i = 0; i < students.length; i++) {
        average += students[i].grade;
        aveGrade = average / students.length;
        if (aveGrade <= students[i].grade){
            ave1 = students[i].grade;
            ave2 = students[i].number;
        }
    }
     console.log("Number: " + ave2 + " - Grade: " + ave1 + ", The score closest to the average: " + aveGrade)
}

function negativeGrade(students){
    var neg = 0;
    for (let i = 0; i < students.length; i++) {
        if(students[i].grade < 9.5){
            neg++;
        }
        else{}
    }
     console.log("The number of negative grades: " + neg)
}

function positiveGrade(students){
    var positive = 0;
    for (let i = 0; i < students.length; i++) {
        if(students[i].grade > 9.5){
            positive++;
        }
        else{}
    }
     console.log("The number of positive grades: " + positive)
}
function main(students, option){
    switch (option) {
        case 1:
            listStudents(students);
            break;
        case 2:
            bestGrade(students);
            break;
        case 3:
            worstGrade(students);
            break;
        case 4:
            averageGrade(students);
            break;
        case 5:
            negativeGrade(students);
            break;
        case 6:
            positiveGrade(students);
            break;    
        default:
            break;
    }
}
main(students, 6);

//case 4
function averageGrade(students){ 
    var average = 0;
    for (let i = 0; i < students.length; i++) {
        average += students[i].grade;
    }
    average /= students.length;
    return average;
}

function closestToAvg(students){
    var avg = averageGrade(students);
    var student = students[0]; var aux=Math.abs(avg-students[0].grade);
    for (let i = 0; i < students.length; i++) {
        var diff = Math.abs(avg-students[i].grade);
        if (diff<aux) {
            aux=diff;
            student=students[i];
        }
    }
    console.log ("Number: " + student.number + ", Grade: " + student.grade);
}

function negativeGrade(students){
    var neg = 0;
    for (let i = 0; i < students.length; i++) {
        if(students[i].grade < 9.5){
            neg++;
        }
    }
     console.log("The number of negative grades: " + neg)
}

function positiveGrade(students){
    var positive = 0;
    for (let i = 0; i < students.length; i++) {
        if(students[i].grade > 9.5){
            positive++;
        }
    }
     console.log("The number of positive grades: " + positive)
}
function main(students, option){
    switch (option) {
        case 1:
            listStudents(students);
            break;
        case 2:
            bestGrade(students);
            break;
        case 3:
            worstGrade(students);
            break;
        case 4:
            closestToAvg(students);
            break;
        case 5:
            negativeGrade(students);
            break;
        case 6:
            positiveGrade(students);
            break;    
        default:
            break;
    }
}
main(students, 1);

