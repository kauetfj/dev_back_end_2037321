// linha 2
//a)
var obj = {name: "Kauet", age: 18, gender: "Masculino"};

var str = JSON.stringify(obj);

//console.log(str);

//b
var str = '{"name": "Kauet", "age": "18", "gender": "Masculino"}';

var obj1 = JSON.parse(str);

console.log(obj1);