const Sequelize = require("sequelize");

const UserModel = require('./models/user');

const sequelize = new Sequelize(process.env.DB_SCHEMA, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

const User = UserModel(sequelize, Sequelize);

// Sincronizar com a database
User.sync({ force: false })
    .then(() => {
        return User.create({
            password: 'Test',
            email: 'Test'
        })
    });

// Autenticate
sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established");
    })
    .catch(err => {
        console.error("Unable to connect", err);
    });

// Criar BD
sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables created!');
    })
    .then(function () {
        return User.findAll();
    })
    .then(function (user) {
        console.log(user);
    });

module.exports = {
    User
}