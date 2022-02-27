var express = require('express');
var router = express.Router();

router.get('/shippingAddress', function (req, res) {
  res.send('shippingAddress page');
})

module.exports = router;

var express = require('express');
var router = express.Router();

var shippingAddressController = require('../controllers/shippingAddressController');

router.get('/shop/create', shop_controller.GET /shippingAddress);