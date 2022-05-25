const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const { response } = require('express');
const { append } = require('express/lib/response');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extebded: false }));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


function readFile(fileName) {
    var file = fs.readFileSync(fileName, 'utf-8');
    return file;
  }


  //4a
app.get('/', (req, res) => {
    log(req,res);
    var body = 'Hello World!';
    res.writeHead(200,{
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/plain'});
    res.end(body);
})


//4b
app.get('/HTML', (req, res) => {
    log(req,res);
    var body = "<h1>My First Heading</h1>";
    res.writeHead(200,{
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/html'});
    res.end(body);
})


//4c
app.get('/HTML2', (req, res) => {
    log(req,res);
    var body = readFile('./index.html');
    res.writeHead(200,{
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/html'});
    res.end(body);
})


//4e
app.get('/replace', (req, res) => {
    log(req,res);
    var date = new Date();

    var body = readFile('./index.html');
    body = body.replace('First', date.toDateString());

    res.writeHead(200,{
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/html'});
    res.end(body);
})


//5
app.get('/name/:name', (req, res) => {
    log(req,res);
    var name = req.params.name; 
    var body = readFile('./index.html');
    body = body.replace('First', name);
    res.writeHead(200,{
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/html'});
    res.end(body);
 });


 //6
 function log(req,res){
    var method = req.method;
    var path = req.route.path;
    var date = new Date();

    var str = "METHOD: " + method + ", PATH:" + path + ", DATE:" + date.toDateString();

    fs.appendFileSync("log.txt" , str)
 }


 //7
 app.get('/log', function(req,res){
    log(req,res);
    var name = req.params.name; 
    var body = readFile('./log.txt');
    res.writeHead(200,{
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/plain'});
    res.end(body);
 })

 


 //8
 app.get('/download', function(req,res){ 
    log(req,res);
    res.download('log.txt');
 })


 //9
 app.get('/remove', function(req,res){
    try {
        fs.unlinkSync('log.txt')
        res.end('Ficheiro log.txt apagado com sucesso')
        //file removed
      } catch(err) {
        console.error(err)
      }
 })
