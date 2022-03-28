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

// linha 4
var array = [];
console.log(arrayUtils.isEmpty(array));