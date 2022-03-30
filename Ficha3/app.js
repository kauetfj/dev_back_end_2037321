const { subArray } = require('./ArrayUtils');
var arrayUtils = require('./ArrayUtils');


//linha 3

function started() {
    console.log("Started Download");
};

function update(){
    var upmin = 0;
    var upmax = 100;  
    for (let i = 0; i <= upmax; i++)
        console.log(i+"% of Download");
};

function completed() {
    console.log("Download Completed");
};

function performDownload() {
   started();
   update();
   completed();
};

//performDownload(started, update, completed)

//linha 3 - Professor

/*function started() {
    console.log("Started Download");
};

function update(progress){
    console.log(progress+"% of Download");
};

function completed() {
    console.log("Completed Download");
};

function performDownload(started_fn, update_fn, completed_fn) {
   started_fn();

   for (let i = 0; i <= 100; i++) {
    update_fn(i);
   };
   
   completed_fn();
};

performDownload(started, update, completed)*/

// variaveis
var array = [7,2,3,5,6,10,11];
var a1 = [1,2,3];
var a2 = [1,2,3];
var value = [5];
var index1 = [3];
var index2 = [0];

console.log(arrayUtils.swap(array, index1, index2));
//console.log(arrayUtils.indexOf(array, value));
//console.log(arrayUtils.reverse(array));
//console.log(arrayUtils.isSameLength(a1,a2));
//console.log(arrayUtils.subArray(array, 1, -1));
//console.log(arrayUtils.isEmpty(array));