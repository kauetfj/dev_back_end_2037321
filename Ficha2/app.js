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

// linha 9

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

// linha 9
var students = []
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

main(students, 1);




