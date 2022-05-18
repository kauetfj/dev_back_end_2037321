const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;


//Middleware para converter o body pra JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

function readFile(fileName) {
    var file = fs.readFileSync(fileName, 'utf-8');
    return file;
}



// 4-
// A)
// app.get('/', (req, res) => {
//     var body = 'Hello World';
//     res.writeHead(200, {
//     'Content-Length': Buffer.byteLength(body),
//     'Content.Type': 'text/plain'
//     });
//     res.end(body);
//   });


// B)
// app.get('/', (req, res) => {
//     var body = '<h1>Hello User</h1>';
//     res.writeHead(200, {
//         'Content-Length': Buffer.byteLength(body),
//         'Content.Type': 'text/html'
//     });
//     res.end(body);
// });


// C)
// app.get('/', (req, res) => {
//     var body = readFile('./index.html');
//     res.writeHead(200, {
//         'Content-Length': Buffer.byteLength(body),
//         'Content.Type': 'text/html'
//     });
//     res.end(body);
// });


// E)
// app.get('/', (req, res) => {
//     var body = readFile('./index.html');
//     file = body.replace("<h1>Bye World</h1>");

//     res.writeHead(200, {
//         'Content-Length': Buffer.byteLength(file),
//         'Content.Type': 'text/html'
//     });
//     res.end(file);
// });


// 5-
app.get("/user/:name", (req, res) => {
    var name = req.params.name;
    name = name.replace("<h1>Hello</h1>" + name);

    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(name),
        'Content.Type': 'text/html'
    });
    res.end(name);
});


// 6-
function log(req, res) {
    var method = req.method;
    var path = req.route.path
    var date = new Date();
    
    var str = "METHOD: " + method + ", PATH: " + path + ", DATE: " + date.toDateString();
}

app.get("/user/:name", (req, res) => {
    log(req, res);
    var name = req.params.name;
    name = name.replace("<h1>Hello</h1>" + name);

    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(name),
        'Content.Type': 'text/html'
    });
    res.end(name);
});

