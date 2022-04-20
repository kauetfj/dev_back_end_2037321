// linha 2
//a
var obj = {name: "Kauet", age: 18, gender: "Masculino"};

var str = JSON.stringify(obj);

//console.log(str);

//b
var str = '{"name": "Kauet", "age": "18", "gender": "Masculino"}';

var obj1 = JSON.parse(str);

console.log(obj1);

//--//
var Emitter = require("./emitter");
var config = require("./config");

var emtr = new Emitter();

//Registrar o listening com a função para o evento LOGIN
emtr.on(config.events.LOGIN, function(){
    console.log("Som    eone has logged in");
});

emtr.on(config.events.LOGIN, function(){
    console.log("Someone has logged in again");
});

emtr.on(config.events.LOGOUT, function(){
    console.log("Someone has logged out");
});

emtr.on(config.events.SENNA, function(){
    console.log("AYRTON SENNA É DO BRASIL SIL SIL");
});

emtr.emit("LOGIN");
emtr.emit("LOGOUT");
emtr.emit("SENNA");

