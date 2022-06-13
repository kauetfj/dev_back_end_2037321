// importar o express
//const { request, response, query } = require('express');
const express = require('express');
const { Sequelize, Model, Datatypes } = require("sequelize");
const { UPSERT } = require('sequelize/types/query-types');

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

// instanciar o express
const app = express();
// definir a porta do servidor http
const port = 3000;

// funções middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// método que arranca o servidor http e fica à escuta
app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});


// Conectar e autenticas DB Sequilize no código JS
const sequelize = new Sequelize('ficha9', 'root', '', {
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established");
    })
    .catch(err => {
        console.error("Unable to connect", err);
    });

// 4-b)
const Person = sequelize.define('person', {
    firstname: {
        type: Sequelize.STRING,
    },
    lastname: {
        type: Sequelize.STRING
    },
    profession: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    }
})

// 4-c) Sincronizar com a database
sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables created!');
    })
    .then(function () {
        return Person.findAll();
    })
    .then(function (person) {
        console.log(person);
    });

// 4-d)

// Person.bulkCreate([
//     { firstname: 'Pedro', lastname: 'Santos', profession: 'Student', age: 19 },
//     { firstname: 'Lourenco', lastname: 'Breitas', profession: 'Student', age: 19 },
//     { firstname: 'Francisco', lastname: 'Babelo', profession: 'Student', age: 18 },
//     { firstname: 'Rodrigo', lastname: 'Mamão', profession: 'Student', age: 20 }

// ]).then(function () {
//     return Person.findAll();
// }).then(function (person) {
//     console.log(person);
// });

// 5- a) & e)

app.get('/person', function (req, res) {

    var id = req.query.id;
    if (id == undefined) {
        Person.findAll()
            .then(person => {
                res.send(person)
            });
    }

    else {
        Person.findByPk(id)
            .then(person => {

                if (person == undefined) {
                    res.status(404).send("Cannot find ID");
                }
                else
                    res.send(person)
            })
    }
});

// b)
app.post('/person', function (req, res) {
    Person.create(req.body)
        .then(person => {
            res.send("ID Auto-generated: " + person.id);
        })
});

// c)
app.delete('/person', (req, res) => {
    var id = req.body.id;
    if (isNaN(id)) {
        res.status(400).send("Invalid ID supplied");
    }
    else {
        Person.destroy({
            where: {
                id: id
            }
        })
            .then(affectedRows => {
                if (affectedRows == 0) {
                    res.status(404).send("Cannot find ID");
                }
                else {
                    res.send("ID Deleted: " + affectedRows);
                }
            })
    }
});

// d)
app.delete('/person/:id', (req, res) => {
    var id = req.params.id;
    if (isNaN(id)) {
        res.status(400).send("Invalid ID supplied");
    }
    else {
        Person.destroy({
            where: {
                id: id
            }
        })
            .then(affectedRows => {
                if (affectedRows == 0) {
                    res.status(404).send("Cannot find ID");
                }
                else {
                    res.send("ID Deleted: " + affectedRows);
                }
            })
    }
});


// f)
app.get('/person/:profession/:age', (req, res) => {
    Person.findAll({
        where: {
            profession: req.params.profession,
            age: req.params.age
        }
    })
    .then(result => {
        if (result == 0) {
            res.send("Cannot find Age or Profession");
        }
        else{
            res.send(result);
        }
    });
});

// g) **
app.put('/person/:id', (req, res) => {
    Person.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(result => {
        if (result == 0) {
            res.send("Cannot find ID");
        }
        else{
            Person.findAll({
                where: {
                    id: req.params.id 
                }
            })
            .then(result => {
                res.send(result);
            });
        }
    });
});