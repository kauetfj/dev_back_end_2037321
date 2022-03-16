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
var width = 20;
var heigth = 10;
var line = "";

for (var i = 0; i < width ; i++){
    line += "*";




}

console.log (line);

