var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');
const { route } = require('.');
var userController = require('../controllers/userController');

router.use(authenticateTokenFromHeaders);

router.get('/', userController.findAll)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

function authenticateTokenFromHeaders(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err)
          return res.sendStatus(403);
      req.user = user;
      next();
  });
}

module.exports = router;
