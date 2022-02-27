var express = require('express');
var router = express.Router();

router.get('/order', function (req, res) {
  res.send('order page');
})

module.exports = router;

var express = require('express');
var router = express.Router();

var order_controller = require('../controllers/orderController');

router.get('/shop/create', shop_controller.GET /order);