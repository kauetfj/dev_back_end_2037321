var express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
var router = express.Router();
const jwt = require('jsonwebtoken');

var indexController = require('../controllers/indexController');
const user = require('../models/user');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res) {
    res.render('login', { message: req.flash('loginMessage') });
});

router.get('/signup', function(req, res) {
    res.render('signup', { message: req.flash('signupMessage')});
});

router.post('/signup', indexController.signup);

router.post('/login', indexController.login);

router.get('/profile', authenticateTokenFromSession, function(req, res) {
    res.render('profile.ejs', { user: req.session.user});
});

function authenticateTokenFromSession(req, res, next) {
    const token = req.session.token;
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err)
            return res.sendStatus(403);
        req.user = user;
        next();
    });
}


module.exports = router;