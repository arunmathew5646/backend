var shippingAddress = require('../models/shippingAddress');

exports.id = function(req, res) {
    res.send('NOT IMPLEMENTED: Artist id');
};

exports.city = function(req, res) {
    res.send('NOT IMPLEMENTED:  city');
};

exports.landmark= function(req, res) {
    res.send('NOT IMPLEMENTED:  landmark');
};

exports.name = function(req, res) {
    res.send('NOT IMPLEMENTED:  name');
};

exports.phone = function(req, res) {
    res.send('NOT IMPLEMENTED:  phone');
};

exports.state = function(req, res) {
    res.send('NOT IMPLEMENTED:  state');
};

exports.street = function(req, res) {
    res.send('NOT IMPLEMENTED:  street');
};

exports.zipCode = function(req, res) {
    res.send('NOT IMPLEMENTED:  zipCode');
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
    var isValid = shippingAddressController.isShippingAddressId(['abc123','xyz321'], 'abc123')
    assert.equal(isValid, true);
});

var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
it('should return true if valid user id', function(){
      var isValid = shippingAddressController.isShippingAddressControllerId('abc123')
      //assert.equal(isValid, true);
      expect(isValid).to.be.true;
});
it('should return false if invalid user id', function(){
      var isValid = shippingAddressController.isShippingAddressControllerId('abc1234')
      //assert.equal(isValid, false);
      isValid.should.equal(false);
});