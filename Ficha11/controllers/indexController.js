const e = require('connect-flash');

const User = require('../sequelize').User;

const jwt = require('jsonwebtoken');

function generateAccessToken(email, password) {
    var token = jwt.sign({ email, password }, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
    return token;
};

exports.signup = function (req, res) {
    
    var { email } = req.body;
    var { password } = req.body;

    User.findOne({
        where: {
            email: email
        }
    }).then(result => {
        if (result == null) {
            User.create({ 'email': email, 'password': password })
                .then(user => {

                    var token = generateAccessToken(email, password);
                    req.session.user = user;
                    req.session.token = token;
                    res.redirect('/profile');
                });
        }
        else {
            req.flash('signupMessage', 'That e-mail is already taken.');
            res.redirect('/signup');
        }
    })
}

exports.login = function (req, res) {

    var { email, password } = req.body;

    User.findOne({
        where: {
            email: email
        }
    })
    .then(user => {
        if (user == null) {
            req.flash('loginMessage', 'No user found with that e-mail.');
            res.redirect('/login');
        }
        else if (user.password != password) {
            req.flash('loginMessage', 'Oops! Wrong password.');
            res.redirect('/login');
        }
        else {
            var token = generateAccessToken(email, password);
            req.session.user = user;
            req.session.token = token;
            res.cookie('access_token', token, {
                expires: new Date(Date.now() + 8 * 3600)
            }).redirect('/profile');
        }
    })
}