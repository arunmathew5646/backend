var Order = require('../models/order');

exports.order_id = function(req, res) {
    res.send('NOT IMPLEMENTED: order_id');
};

exports.amount = function(req, res) {
    res.send('NOT IMPLEMENTED:  amount');
};

exports.order_date = function(req, res) {
    res.send('NOT IMPLEMENTED:  order_date');
};

exports.product_product_id = function(req, res) {
    res.send('NOT IMPLEMENTED:  product_product_id');
};

exports.shipping_address_id = function(req, res) {
    res.send('NOT IMPLEMENTED:  shipping_address_id');
};

exports.user_id = function(req, res) {
    res.send('NOT IMPLEMENTED:  user_id');
};

import express from 'express'
            const router=express.Router()
            import { findAllUsers } from '../../controllers/user.js'

            router.get('/all',findAllUsers)

            export default router

            
/* Test */
it('should return true if valid user id', function(){
    var isValid = orderController.isOrderId(['abc123','xyz321'], 'abc123')
    assert.equal(isValid, true);
});

var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
it('should return true if valid user id', function(){
      var isValid = orderController.isOrderId('abc123')
      //assert.equal(isValid, true);
      expect(isValid).to.be.true;
});
it('should return false if invalid user id', function(){
      var isValid = orderController.isOrderId('abc1234')
      //assert.equal(isValid, false);
      isValid.should.equal(false);
});