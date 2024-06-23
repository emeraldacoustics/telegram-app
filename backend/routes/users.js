var express = require('express');
const { loginUser, registerUser, logout } = require('../controllers/auth.controller');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
// 	res.send('respond with a resource');
// });

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);

router.route('/logout').get(logout);

module.exports = router;
