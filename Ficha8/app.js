// importar o express
//https://codesandbox.io/s/oqo0ylv8oy?file=/src/controllers/sample.controller.js

const { request, response, query } = require('express');
const express = require('express');
const mysql = require('mysql');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Ficha 7 API",
            description: "Ficha 7 API Information",
            contact: {
                name: "TPSI-DWB"
            },
            servers: ["http://localhost:3000"],
        },
        definitions: {
            "Person": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer",
                        
                        "x-primary-key": true
                    },
                    "firstname": {
                        "type": "string"                        
                    },
                    "lastname": {
                        "type": "string"                        
                    },
                    "profession": {
                        "type": "string"                        
                    },                 
                    "age": {
                        "type": "integer",
                        "format": "int64"
                    }
                },
                "xml": {
                    "name": "Person"
                }
            }
        }
    },
    apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// instanciar o express
const app = express();
// definir a porta do servidor http
const port = 3000;

// funções middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

var dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ficha7'
});

/**
 * @swagger
 * /person:
 *    get:
 *      tags:
 *        - Person
 *      summary: Gets a list of persons
 *      description: Returns a list of persons
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: An array of persons
 *              schema:
 *                $ref: '#/definitions/Person'
 */
app.get('/person', (request, response) => {
    log(req,res);
    var body = 'Hello World!';
    res.writeHead(200,{
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/plain'});
    res.end(body);
});

/**
 * @swagger
 * /person:
 *    post:
 *      tags:
 *        - Person
 *      summary: Creates and stores a person
 *      description: Returns the id of the created person
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: Model
 *            description: Sample person
 *            in: body
 *            required: true
 *            schema:
 *              $ref: '#/definitions/Person'
 *      responses:
 *          200:
 *              description: Successfully created
 */
app.post('/person', (request, response) => {
    log(req,res);
    var body = "<h1>My First Heading</h1>";
    res.writeHead(200,{
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/html'});
    res.end(body);
});

/**
 * @swagger
 * /person/:
 *    delete:
 *      tags:
 *        - Person
 *      summary: Deletes a person by id
 *      description: Deletes a single sperson by id
 *      produces:
 *          - application/json
 *      parameters:
 *       - name: id
 *         description: Person's id
 *         in: body
 *         required: true
 *         type: string
 *      responses:
 *          200:
 *              description: Successfully deleted
 */
app.delete('/person', (request, response) => {
    log(req,res);
    var body = readFile('./index.html');
    res.writeHead(200,{
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/html'});
    res.end(body);
});

/**
 * @swagger
 * /person/{id}:
 *    delete:
 *      tags:
 *        - Person
 *      summary: Deletes a person by id
 *      description: Deletes a single sperson by id
 *      produces:
 *          - application/json
 *      parameters:
 *       - name: id
 *         description: Person's id
 *         in: path
 *         required: true
 *         type: string
 *      responses:
 *          200:
 *              description: Successfully deleted
 */
app.delete('/person/:id', (request, response) => {
    log(req,res);
    var date = new Date();

    var body = readFile('./index.html');
    body = body.replace('First', date.toDateString());

    res.writeHead(200,{
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/html'});
    res.end(body);
});


/**
 * @swagger
 * /person/{id}:
 *    get:
 *      tags:
 *        - Person
 *      summary: Reads a single person by id
 *      description: Returns a single person
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: id
 *            description: Person's id
 *            in: path
 *            required: true
 *            type: string
 *      responses:
 *          200:
 *              description: A single person
 *              schema:
 *                $ref: '#/definitions/Person'
 */
app.get('/person/:id', (request, response) => {
   
});

/**
 * @swagger
 * /person/{age}/{profession}:
 *    get:
 *      tags:
 *        - Person
 *      summary: Reads a single person by age and profession
 *      description: Returns a single person
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: age
 *            description: Person's age
 *            in: path
 *            required: true
 *            type: string
 *          - name: profession
 *            description: Person's profession
 *            in: path
 *            required: true
 *            type: string
 *      responses:
 *          200:
 *              description: A single person
 *              schema:
 *                $ref: '#/definitions/Person'
 */
app.get('/person/:age/:profession', (request, response) => {
   
});


/**
 * @swagger
 * /person{id}:
 *    put:
 *      tags:
 *        - Person
 *      summary: Updates and stores a person
 *      description: Returns the id of the updated person
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: Id
 *            description: Person's id
 *            in: path
 *            required: true
 *          - name: Model
 *            description: Sample person
 *            in: body
 *            required: true
 *            schema:
 *              $ref: '#/definitions/Person'
 *      responses:
 *          200:
 *              description: Successfully created
 */
app.put('/person/:id', (request, response) => {
   
});


// método que arranca o servidor http e fica à escuta
app.listen(port, () => {
    console.log('Example app listening at http://localhost:3000');
});



