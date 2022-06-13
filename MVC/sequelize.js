// importar o express
//const { request, response, query } = require('express');
const express = require('express');
const { Sequelize, Model, Datatypes } = require("sequelize");
const PersonModel = require('/.models/person');

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

const Person = PersonModel(sequelize, Sequelize);


// método que arranca o servidor http e fica à escuta
app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});


// Connection Pool
const sequelize = new Sequelize('ficha9', 'root', '', {
    dialect: 'mysql'
});

// Autenticas 
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