var express = require('express');
const { getMessages, newMessage } = require('../controllers/message');
const { isAuthenticatedUser } = require('../middlewares/auth');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
// 	res.send('respond with a resource');
// });

router.route('/messages').post(isAuthenticatedUser, newMessage);
router.route('/messages').get(isAuthenticatedUser, getMessages);

module.exports = router;
