var express = require('express');
var router = express.Router();

router.get('/product', function (req, res) {
  res.send('product page');
})

module.exports = router;

var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/productController');

router.get('/shop/create', shop.GET /product);