const Person = require('../sequelize').Person;

exports.getAllPerson = function(request, response, next) {
    Person.findAll()
    .then(users => {
        response.render('person', { title: 'Persons', data: users });
    })
}

exports.test = function(req, res, next){
    res.send("PERSONS TEST");
}

exports.test