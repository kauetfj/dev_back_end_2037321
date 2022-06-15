const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3001;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');

// funções middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Middleware para converter o body pra JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//SQL connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ficha7'
});

app.get('/persons', function (req, res) {
    connection.query('SELECT * FROM ficha7.persons', function (err, results, fields) {
        res.send(results);
    })
});

app.post('/persons', function (req, res) {
    var details = req.body;
    connection.query("INSERT persons set ?", [details], function (err, rows, fields) {
        res.send("Inserted " + rows.insertId)
    })
});

app.delete('/persons', (req, res) => {
    var id = req.body.id;
    connection.query("DELETE FROM ficha7.persons WHERE id = ?", [id], function (err, rows, fields) {
        res.send("Deleted: " + rows.affectedRows);
    });
});

app.get('/persons/:id', function (req, res) {
    var id = req.params.id;
    connection.query("SELECT * FROM ficha7.persons WHERE id = ?", [id], function (err, rows, fields) {
        res.send(rows)
    })
});

app.get('/persons/:age/:profession', function (req, res) {
    var age = req.params.age;
    var profession = req.params.profession;
    connection.query("SELECT * FROM ficha7.persons WHERE age = ? AND profession = ?", [age, profession], function (err, rows, fields) {
        res.send(rows)
    })
});

app.put('/persons/:id', function (req, res) {
    var details = req.body;
    connection.query("UPDATE persons SET ?", [details], function (err, rows, fields) {
        res.send(rows)
    });
});
