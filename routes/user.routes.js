var express = require('express');
var router = express.Router();

router.get('/user', function (req, res) {
  res.send('user page');
})

module.exports = router;

var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');

router.get('/shop/create', shop_controller.GET /user);