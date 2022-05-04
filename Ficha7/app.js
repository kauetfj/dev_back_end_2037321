const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

var connection = mysql.createConnection({
    host: 'localhost',
    //user: 'root',
    user: 'root@localhost',
    password: '',
    database: 'ficha7'
})

app.get('/users', function (request, response) {
    connection.query('SELECT * FROM ficha7.persons', function(err, results, fields){
        response.send(results);
    })
    response.send("USERS")
})