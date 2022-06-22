const User = require('../sequelize').User;

exports.findAll = function(req, res, next){
    User.findAll().then(results => {
        res.send(results);
    })
}