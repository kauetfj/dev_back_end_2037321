var fs = require('fs')
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

function readFile(fileName) {
    var file = fs.readFileSync(fileName, 'utf-8');
    return file;
}

app.get('/', (req, res) => {
    res.send('Hello World!');
  })

app.get('/users', (req, res) => {
  //res.send(JSON.parse(readFile("./persons.json")));
  res.send(fileObj);
})

app.post('/users', (req, res) => {
  
  var person = req.body;

  var size = Object.keys(fileObj).length;
  size++;
  var str = 'person';
  var personId = str + size;

  person.id = size;

  fileObj[personId] = person;
  res.send(person.id + "");
})

app.delete('/users/:id', (req, res) => {
  var id = req.params.id;
  var person = fileObj["person" + id];

  if (person != undefined) {
    delete fileObj["person" + id];
    res.send("Id: " + id + " was deleted");
  }
  else{
    res.send("ID doesn't exist");
  }

  res.send("THIS IS A DELETE: " + id);
})

app.get('/users/:id', (req, res) => {
  var id = req.params.id;
  var person = fileObj["person" + id];

  if (person != undefined) {
    res.send(person);
  }
  else{
    res.send("ID doesn't exist");
  }

  res.send(person);
})

app.put('/users/:id', (req, res) => {
  
  var id = req.params.id;

  var personFromBody = req.body;
  var person = fileObj["person" + id];

  if (person != undefined) {
    personFromBody.id = id;
    fileObj["person" + id]= personFromBody;
    res.send(personFromBody);
  }
  else{
    res.send("ID doesn't exist")
  }

  res.send("THIS IS THE ID " + body.id);
})

app.put('/users', (req, res) => {
  res.send("THIS IS A PUT");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

var fileStr = readFile('./persons.json');
var fileObj = JSON.parse(fileStr);
