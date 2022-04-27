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
  res.send(JSON.parse(readFile("./persons.json")));
})

app.post('/users', (req, res) => {
  var person = req.body;

  var fileStr = readFile('./persons.json');
  var fileObj = JSON.parse(fileStr);

  fileObj.person5 = {x:10};

  var size = Object.keys(fileObj).length;

  person.id = size++;

  fileObj.person5 = person;

  res.send(JSON.stringify(fileObj));
})



app.delete('/users', (req, res) => {
  res.send("THIS IS A DELETE");
})

app.put('/users', (req, res) => {
  res.send("THIS IS A PUT");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})